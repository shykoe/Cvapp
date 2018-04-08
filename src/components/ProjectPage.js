import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
const style = {
	main:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '60%',
        flexWrap: 'wrap',
        width:'auto',
        alignContent:'center',  alignItems:'center'
	},
	    content: {
        padding: '2em',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width:'60%'
        //display:'flex',
    },
    img:{
    	width: 'auto',
    	'maxWidth': '100%',
    }
}
class ProjectPage extends Component{
	render(){
		return (
			<div style={style.main}>
			
			<div  style={{display: 'flex',flexDirection: 'column', margin:'10 10 10 10', width:'25%'}}>
				<div style={{display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
				<img  alt={''} style={style.img} src={require('../../res/img/classification.png')} />
				</div>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>图像识别</h3>
				<p style={{width: '100%', textAlign:'center', color:'#9B9B9B'}}>识别图像中的物体类别</p>
				<FlatButton label="立即测试" primary={true} href={'/classify'}/>
			</div>
			<div  style={{display: 'flex',flexDirection: 'column', margin:'10 10 10 10', width:'25%'}}>
				<div style={{display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
				<img  alt={''}  style={style.img} src={require('../../res/img/caption.png')} />
				</div>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>图像描述</h3>
				<p style={{width: '100%', textAlign:'center', color:'#9B9B9B'}}>生成图像的文字描述</p>
				<FlatButton label="立即测试" primary={true} href={'/caption'} />
			</div>
			<div  style={{display: 'flex',flexDirection: 'column', margin:'10 10 10 10', width:'25%'}}>
				<div style={{display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
				<img  alt={''} style={style.img} src={require('../../res/img/vqa.png')} />
				</div>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>涂鸦</h3>
				<p style={{width: '100%', textAlign:'center', color:'#9B9B9B'}}>涂鸦</p>
				<FlatButton label="立即测试" primary={true} href={'/sketch'} />
			</div>
			<div  style={{display: 'flex',flexDirection: 'column', margin:'10 10 10 10', width:'25%'}}>
				<div style={{display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
				<img  alt={''} style={style.img} src={require('../../res/img/emotion.png')} />
				</div>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>情感分类</h3>
				<p style={{width: '100%', textAlign:'center', color:'#9B9B9B'}}>识别人脸的情感分类</p>
				<FlatButton label="立即测试" primary={true}/>
			</div>
			<div  style={{display: 'flex',flexDirection: 'column', marginTop:'20px', width:'25%'}}>
				<div style={{display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
				<img  alt={''} style={style.img} src={require('../../res/img/ocr.png')} />
				</div>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>文字识别</h3>
				<p style={{width: '100%', textAlign:'center', color:'#9B9B9B'}}>多场景图像文字识别</p>
				<FlatButton label="立即测试" primary={true}/>
			</div>
			<div  style={{display: 'flex',flexDirection: 'column', marginTop:'20px', width:'25%'}}>
				<div style={{display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
				<img  alt={''} style={style.img} src={require('../../res/img/cut.png')} />
				</div>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>词性标注</h3>
				<p style={{width: '100%', textAlign:'center', color:'#9B9B9B'}}>告诉你哪些词是什么词性</p>
				<FlatButton label="立即测试" primary={true}/>
			</div>
			<div  style={{display: 'flex',flexDirection: 'column', marginTop:'20px', width:'25%'}}>
				<div style={{display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
				<img  alt={''} style={style.img} src={require('../../res/img/net.png')} />
				</div>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>知识图谱</h3>
				<p style={{width: '100%', textAlign:'center', color:'#9B9B9B'}}>汇聚知识，连接万物</p>
				<FlatButton label="立即测试" primary={true}/>
			</div>
			<div  style={{display: 'flex',flexDirection: 'column', marginTop:'20px', width:'25%'}}>
				<div style={{display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
				<img  alt={''} style={style.img} src={require('../../res/img/abs.png')} />
				</div>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>自动摘要</h3>
				<p style={{width: '100%', textAlign:'center', color:'#9B9B9B'}}>自动阅读文章, 书写摘要</p>
				<FlatButton label="立即测试" primary={true}/>
			</div>
			</div>
			)
	}
}
export default ProjectPage