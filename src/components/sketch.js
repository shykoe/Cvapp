import React, {Component} from 'react';
//import axios from 'axios';
import imgList from './randomList.json';
import './bar.css';
import './sketch.css';
import {SketchField, Tools} from 'react-sketch';
import Slider from 'material-ui/Slider';
// import 'react-images-uploader/styles.css';
// import 'react-images-uploader/font.css';
const style = {
	main:{
        display: 'flex',
        textAlign: 'center',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // height: '60%',
        // flexWrap: 'wrap',
	},
	previewText:{
		  //width: '100%',
		  marginTop:'20px',
		  textAlign: 'center',
	},
	imgPreview:{
	  textAlign: 'center',
	  margin: '10px 15px',
	  height: 'auto',
	 // width: '500px',
	  // borderLeft: '1px solid gray',
	  // borderRight: '1px solid gray',
	  // borderTop: '5px solid gray',
	  // borderBottom: '5px solid gray',
	},
	input:{
	'fontSize':'1.0em',
	//'height':'2.7em',
	'borderRadius':'4px',
	'border':'1px solid #c8cccf',
	'color':'#6a6f77',
	},
	subtitle:{
		'marginBottom':'20px',
		'fontSize':'1.0em',
	},
	slider:{
		width:'8em'
	},
	attribute:{
		marginLeft:'2em',
	}
}

class Sliderattribute extends Component {
  state = {
    secondSlider: 0,
  };

  handleSecondSlider = (event, value) => {
    this.setState({secondSlider: value});
  };

  render() {
  	const { attribute } = this.props;
    return (
      <div style={style.slider}>
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={this.state.secondSlider}
          onChange={this.handleSecondSlider}
          sliderStyle={{margin: 0}}
        />
        <p>
          <span>{attribute+'  '}</span>
          <span>{this.state.secondSlider}</span>
        </p>
      </div>
    );
  }
}

class Bar extends Component {
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<div className="bar-contain" style={{
					height: this.props.barHeight + 'px',
					marginBottom: this.props.verticalSpacing + 'px',
					background: this.props.barBackgroundColor,
					textAlign: 'start'
				}}>
					<span className="bar-expand" style={{
						width: 100 * this.props.value / this.props.maxValue + '%',
						height: this.props.barHeight -2 + 'px',
						background: this.props.barColor
					}}>
						<div className="bar-label"> 
							{this.props.makeUppercase ? this.props.label.toUpperCase() : this.props.label}
						</div>
					</span>
				</div>

				<div className="bar-suffix">
					{this.props.showValue ? this.props.value : ''}
					{this.props.suffix}
				</div>

			</div>
		);
	}
}
Bar.defaultProps = {
	barBackgroundColor: '#cccccc',
	barColor: '#303030',
	barHeight: 42,
	label: '',
	makeUppercase: false,
	maxValue: 100,
	showValue: false,
	suffix: '',
	value: 0,
	verticalSpacing: 30,
};

class ItemPage extends Component{
  constructor(props) {
    super(props);
    const LABELS = ['giraffe', 'cow', 'bat', 'pig', 'tiger', 'zebra', 'elephant',
       'sheep', 'horse', 'whale', 'dolphin', 'monkey']
    this.state = {file: '',imagePreviewUrl: '', result:null,idx:null, labels:LABELS};
  }
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
    const url = window.location.host;
    console.log(url);
    const imageFormData = new FormData();
    imageFormData.append("img", this.state.file, this.state.file.name);
	fetch(`http://${url}/api/imglist`,
		{method: 'POST', headers:{'Access-Control-Allow-Origin':'*'},body: imageFormData}).then(res=>(res.json())).then(data=>(this.setState({result:data.results})))
  }
  _handleLocalImg(e){
  	//e.preventDefault();
  	//console.log(require("./test.jpg"));
  	console.log(e.target.src);
    let reader    = new FileReader();
    const url = window.location.host;
    const imageFormData = new FormData();
    this.getImageBlob( e.target.src , (blob)=>{
    			//this.setState({file:blob})
    			imageFormData.append("img", blob, blob.name);
    				fetch(`http://${url}/api/imglist`,
		{method: 'POST', headers:{'Access-Control-Allow-Origin':'*'},body: imageFormData})
    				.then(res=>(res.json())).
    				then(data=>(this.setState({result:data.results})))
    		}
    	);
    //const url = window.location.host;
    //const imageFormData = new FormData();
    //imageFormData.append("img", this.state.file, this.state.file.name);
	//fetch(`http://${url}/api/imglist`,
	//	{method: 'POST', headers:{'Access-Control-Allow-Origin':'*'},body: imageFormData}).then(res=>(res.json())).then(data=>(this.setState({result:data.results})))
  }
 getImageBlob(url, cb) {
    var xhr          = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "blob";
    xhr.onload       = function() {
        if (this.status == 200) {
            if(cb) cb(this.response);
        }
    };
    xhr.send();
}
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  onClick(){
    function toPercent(number) {
      return Math.round(number * 10000) / 100;
    }
    const inputSize = 28;
    const imageSize = 400;
    var canvasContainerCtx = this._sketch._canvas.getContext('2d');
    var imageData = canvasContainerCtx.getImageData(0,0,400,400);
    imageData = imageData.data;
    var boxSize = parseInt(400 / 28);
    function pixelPos(i, j, k, l) {
      return (imageSize * (i * boxSize + k) + (j * boxSize + l)) * 4;
    }
    function calcGreyScale(i, j, k, l) {
      var pos = pixelPos(i, j, k, l);
      return imageData[pos + 3];
    }
    var resizedData = new Uint8ClampedArray(inputSize * inputSize * 4);
    var inputForPredict = new Uint8ClampedArray(inputSize * inputSize);
    for(var i=0; i<inputSize; i++) {
      for(var j=0; j<inputSize; j++) {
        var color = 0;
        for(var k=0; k<boxSize; k++) {
          for(var l=0; l<boxSize; l++) {
            color += calcGreyScale(i, j, k, l);
          }
        }
        color = parseInt(color / (boxSize * boxSize));
        if (color > 64) color = 255;
        // color = Math.random() * 256;
        var resizedDataPos = (i * inputSize + j) * 4;
        resizedData[resizedDataPos] = 
        resizedData[resizedDataPos + 1] = 
        resizedData[resizedDataPos + 2] = 255 - color;
        resizedData[resizedDataPos + 3] = 255;

        inputForPredict[i * inputSize + j] = color;
      }
    }
    //console.log(inputForPredict);
    const url = window.location.host;
    var formData  = new FormData();
    formData.append("img", inputForPredict.toString());
    fetch(`http://${url}/api/sketch`,
    {method: 'POST',body: formData }).
    then(res=>res.text()).
    then(data=>{
      data = data.split(",").map(function(x) { return toPercent(parseFloat(x)) });
      var idx = [];
      for(var i=0; i<data.length; i++) idx.push(i);
      idx.sort(function(x, y) {
        if(data[x] < data[y]) return -1;
        else if(data[x] > data[y]) return 1;
        return 0;
      }).reverse();
      this.setState({result:data,idx:idx})
    })
    console.log(this.state)
  }
  _clear(){
	this._sketch.clear();
	this._sketch.setBackgroundFromDataUrl('');
  }
	render(){
	    let {imagePreviewUrl} = this.state;
	    let $imagePreview = null;
	    if (imagePreviewUrl) {
	      $imagePreview = (<img style={{height:'250px'}} src={imagePreviewUrl} />);
	    } else {
	      $imagePreview = (<div style={style.previewText}> </div>);
	    }
		return(
      <div>
	      <div style={style.main}>
	      <div>
            <SketchField width='400px' 
                         height='400px'
                         className='canvas-area'
                         ref={(c) => this._sketch = c}
                         tool={Tools.Pencil} 
                         lineColor='black'
                         lineWidth={10}/>
          <button className="myButton" 
            type="button"
            	
            onClick={(e)=>this.onClick()}>Submit</button>
          <button className="myButton" 
            type="button"
            	
            onClick={(e)=>this._clear()}>Clear</button>
	      </div>
	      <div style={style.attribute}>
	      <Sliderattribute attribute={'big'}/>
	      </div>
          </div>
        {this.state.result&& this.state.idx.map((item, index)=>(<div key={index}>{this.state.labels[item] + '   ' + this.state.result[item]}   </div> ))
          }
      </div>
		)
	}
}
export default ItemPage