import React, {Component} from 'react';
//import axios from 'axios';
import imgList from './randomList.json';
import './bar.css';
// import 'react-images-uploader/styles.css';
// import 'react-images-uploader/font.css';
const style = {
	main:{
        display: 'block',
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
    
    var len = imgList['imgList'].length;
    const imgs = [] 
    for(var i =0 ; i<5;i++){
    	var ind = parseInt(Math.random()* len);
    	var img = imgList['imgList'][ind]
    	if (img in imgs){
    		i = i - 1;
    		continue;
    	}
    	imgs.push(img);
    }
    this.state = {file: '',imagePreviewUrl: '', result:null, imglist:imgs};
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
	render(){
	    let {imagePreviewUrl} = this.state;
	    let $imagePreview = null;
	    if (imagePreviewUrl) {
	      $imagePreview = (<img style={{height:'250px'}} src={imagePreviewUrl} />);
	    } else {
	      $imagePreview = (<div style={style.previewText}> </div>);
	    }
		return(
	      <div style={style.main}>
	      <div style={style.subtitle}>测试图片</div>
	          <div className="custom-scrollbar">
    			<span className="img-span">
    				{
    					this.state['imglist'].map((item,ind)=>
    						(<img key={ind} style={{height:'380px',marginRight:'20px'}} onClick={(e)=>this._handleLocalImg(e)} src={require(item)}/>))
    				}
    				
    			</span>
    		   </div>
	        <form onSubmit={(e)=>this._handleSubmit(e)}>
	          <input className="fileInput" 
	            type="file"
	            style={style.input}
	            onChange={(e)=>this._handleImageChange(e)} />
	          <button className="submitButton" 
	            type="submit"
	            style={style.input}
	            onClick={(e)=>this._handleSubmit(e)}>上传</button>
	        </form>
	        <div style={style.imgPreview}>
	          {$imagePreview}
	        </div>
	        <div>
          { this.state.result && this.state.result.map((item,index)=>(
				<div  key={index} style={{display: 'block',textAlign: 'center'}}>
								<Bar
									key={index}
									barBackgroundColor={'#cccccc'}
									barColor={'#303030'}
									barHeight={42}
									label={item.label}
									makeUppercase={false}
									maxValue={1.0}
									showValue={true}
									suffix={''}
									value={parseFloat(item.prob).toFixed(2)}
									verticalSpacing={30}
								/>
					        </div>

          	))}
	        </div>
	      </div>
		)
	}
}
export default ItemPage