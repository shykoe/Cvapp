import React, {Component} from 'react';
//import axios from 'axios';
import imgList from './randomList.json';
import './bar.css';
import './sketch.css';
import {SketchField, Tools} from 'react-sketch';
import CanvasDraw from "react-canvas-draw";
import Slider from 'material-ui/Slider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
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
    'width':'400px'
  },
	slider:{
		width:'8em'
	},
	attribute:{
		marginLeft:'2em',
	},
  img:{
    width: 'auto',
    height: '20em',
    'maxWidth': '100%',
  }
}
const attributes = ['jungle','longneck','fierce', 'claws','hands','spots','longleg','white',
'fields','timid','vegetation','stripes','flys','hooves','meat','hunter','horns','fish','group','domestic']
const matrix = [
[0,1,0,0,1,0,1,0,0],
[0,0,0,0,1,0,1,0,1],
[0,0,1,1,0,0,1,1,0],
[0,0,0,0,1,0,1,0,0],
[0,0,1,1,1,1,0,1,0],
[0,0,0,1,1,1,1,0,0],
[0,0,0,0,1,0,1,0,0],
[0,0,0,0,1,0,1,0,0],
[0,0,0,1,1,0,1,0,0],
[1,0,0,0,0,0,0,1,0],
[1,0,0,0,0,0,1,1,0],
[0,0,0,1,1,0,1,0,0],
]
function cosin(attrs){
  var cos = [];
  for(var i = 0;i<matrix.length;i++){
    var vector = matrix[i];
    var dotvalue = 0;
    var mo1 = 0;
    var mo2 = 0;
    var result = 0;
    for(var j = 0; j <vector.length;j++){
      dotvalue += vector[j]*attrs[j];
      mo1 += vector[j] * vector[j];
      mo2 += attrs[j] * attrs[j];
    }
    result = dotvalue / (Math.sqrt(mo1)* Math.sqrt(mo2) +1e-10);
    cos.push(result);

  }
  return cos;
}
class Sliderattribute extends Component {
  state = {
    secondSlider: 0,
  };

  handleSecondSlider = (event, value) => {
    const { index, setAttr } = this.props;
    this.setState({secondSlider: value});
    setAttr(index,value);
    //console.log(setAttr);
  };

  render() {
    const { attribute,width } = this.props;
    //console.log(this.props.index)
    return (
      <div style={{width:`${width}em`}}>
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={this.state.secondSlider}
          onChange={this.handleSecondSlider}
          sliderStyle={{margin: 0}}
        />
        <p style={{marginTop:0}}>
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
    this.state = {
      file: '',
      imagePreviewUrl: '',
      result:null,
      idx:null,
      labels:LABELS,
      width:400, 
      height:400,
      deviceWidth: document.documentElement.clientWidth,
      deviceHeight: document.documentElement.clientHeight,
      sliderWidth:8,
      attributes:['fish','longneck', 'fierce','fast','fields','stripes','group','meat','hooves'],
      attValue:[0,0,0,0,0,0,0,0,0],
    };
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
    var canvasContainerCtx = this._sketch.ctx;
    var imageData = canvasContainerCtx.getImageData(0,0,400,400);
    imageData = imageData.data;
    var boxSize = parseInt(imageSize / inputSize);

    function pixelPos(i, j, k, l) {
      return (imageSize * (i * boxSize + k) + (j * boxSize + l)) * 4;
    }

    function calcGreyScale(i, j, k, l) {
      var pos = pixelPos(i, j, k, l);
      return imageData[pos + 3];
    }
    var resizedData = new Uint8ClampedArray(inputSize * inputSize * 4);
    var inputForPredict = new Uint8ClampedArray(inputSize * inputSize);
    var flag = 0
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
        flag += color;
        // color = Math.random() * 256;
        var resizedDataPos = (i * inputSize + j) * 4;
        resizedData[resizedDataPos] = 
        resizedData[resizedDataPos + 1] = 
        resizedData[resizedDataPos + 2] = 255 - color;
        resizedData[resizedDataPos + 3] = 255;

        inputForPredict[i * inputSize + j] = color;
      }
    }
    //var canvasPreviewCtx = this.preview.getContext('2d');
    console.log(imageData);
    //canvasPreviewCtx.putImageData(new ImageData(imageData, 400, 400), 0, 0);
    const url = window.location.host;
    const attrvec = this.state.attValue;
    const result = cosin(attrvec);
    var formData  = new FormData();
    formData.append("img", inputForPredict.toString());
    var flag_attr = 0; 
    for(var i = 0; i < result.length; i++){
      flag_attr += result[i];
    }
    if(flag > 0){
      fetch(`http://${url}/api/sketch`,
      {method: 'POST',body: formData }).
      then(res=>res.text()).
      then(data=>{
        console.log(data);
        data = data.split(",").map(function(x,index) { var value = Math.min(parseFloat(x)+ result[index]*0.8,1); return toPercent(parseFloat(value)); });
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
    else if (flag_attr>0){
      console.log(result);
      var results = result.map((x=>(toPercent(parseFloat(x)))))
      var idx = [];
      for(var i=0; i<results.length; i++) idx.push(i);
      idx.sort(function(x, y) {
        if(results[x] < results[y]) return -1;
        else if(results[x] > results[y]) return 1;
        return 0;
      }).reverse();
    this.setState({result:results,idx:idx})
    }
  }
  _clear(){
	this._sketch.clear();
  this.setState({result:null,idx:null});
	//this._sketch.setBackgroundFromDataUrl('');
  }
  setAttr(index,value){
    var attrs = this.state.attValue;
    attrs[index] = value;
    this.setState({attValue:attrs});
  }
	render(){
	    let {imagePreviewUrl} = this.state;
	    let $imagePreview = null;
	    if (imagePreviewUrl) {
	      $imagePreview = (<img style={{height:'250px'}} src={imagePreviewUrl} />);
	    } else {
	      $imagePreview = (<div style={style.previewText}> </div>);
	    }
      const { styleinner } = this.props;
		return(
      <div style={styleinner}>
	      <div style={style.main}>

	      <div>

            <CanvasDraw style={{border: '1px solid #0d3349'}} ref={(c) => this._sketch = c} />
        <div style={style.subtitle}><span>candidate class</span>: giraffe, cow, bat, pig, tiger, zebra, elephant,
       sheep, horse, whale, dolphin, monkey</div>
	      </div>
	      <div style={style.attribute}>
{this.state.attributes.map((item, index)=>
          (<Sliderattribute setAttr={(index,val)=>this.setAttr(index,val)} index={index} key={index} attribute={item} width={this.state.sliderWidth}/>))}

	      </div>

          </div>
          <div style={{display:'block', textAlign:'center'}}>
                    <button className="myButton" 
            type="button"
              
            onClick={(e)=>this.onClick()}>Submit</button>
          <button className="myButton" 
            type="button"
              
            onClick={(e)=>this._clear()}>Clear</button>
          </div>
            <div style={{fontSize:'20px'}}>
        {this.state.result&& this.state.idx.map((item, index)=>(<div key={index}>{this.state.labels[item] + '   ' + this.state.result[item]}   </div> ))
          }
          </div>
      </div>
		)
	}
}
class MainPage extends Component{
  constructor(props){
    super(props);
    this.state={display:false};
  }
  onClick(){

  }
  render(){
    return(
      <div>
      <ItemPage styleinner={{display: this.state.display? '': 'none'}}/>
      <Paper style={{display: this.state.display? 'none':'flex', height:'100%', width:'100%', flexDirection:'column'}} zDepth={0} >
      <div style={{display:'block', padding:'15px 32px', textAlign:'center'}}>
      <div style={{ maxWidth:'700px', lineHeight:'1.4em',fontSize:'2.4em', fontWeight:'400'}}>
      Describe And Guess
      </div>
      </div>
      <div style={{marginLeft:'auto', marginRight:'auto'}}>
      <img  alt={''} style={style.img} src={require('../../res/img/startImg.png')} />
      </div>
      <div style={{display:'block', padding:'15px 32px', textAlign:'center'}}>
      <div style={{fontsize:'0.75em', maxWidth:'700px', lineHeight:'1.4em',fontSize:'1.4em'}}>
      Draw an animal and choose its attributes
      </div>
      <RaisedButton label="Start" style={{marginTop:'1em',fontSize:'20px'}} labelStyle={{textTransform: "none"}} primary={true} onClick={()=>(this.setState({display:true}))}/>
      </div>
      </Paper>
      </div>
      )
  }
}
export default MainPage