import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import RaisedButton from 'material-ui/RaisedButton';
import ProjectPage from './components/ProjectPage';
import ItemPage from './components/item';
import CaptionPage from './components/caption';
import TeamPage from './components/team';
import Background  from '../res/img/advantage-back.jpg';
const style = {
	main:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        flexWrap: 'wrap',
	},
	h1:{
		fontFamily:'geometos,sans-serif',
		fontStyle: 'normal',
		fontWeight: '500',
		lineHeight: '10rem',
    	letterSpacing: '0rem',
    	fontSize: '6rem',
    	color: '#6a82af',
    	display: 'inline-block',
    	backgroundImage: '-webkit-linear-gradient(45deg,#6a82af,#6a82af 20%,#7cd3d5 70%,#7cd3d5)',
    	WebkitTextFillColor: 'transparent',
    	WebkitBackgroundClip: 'text',

	}
}
const Routes = ()=>(
	<Switch>
		<Route exact 
		path="/"
		render={()=>(
			<div style={style.main}>

			<div style={{width: '100%',display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
			<img  alt={''}  style={{width:'18%',flex:'0 0 0 0'}}src={require('../res/img/CloudAI.png')}/>
			<h1 style={style.h1}>AI开放云平台</h1>
			</div>
			<div style={{width: '100%',display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
			<span   style={{color: '#969696'}}>为文本、图像、视频和音频等非结构化数据构建高效的人工智能算法平台。</span>
			</div>
			<div style={{paddingTop:'60px', width: '60%',
			display: 'flex',flexWrap: 'wrap',flexDirection: 'row',
			justifyContent: 'center',alignContent:'center', 
			alignItems:'center',fontFamily: 'PingFangSC,FZLTXHK,arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif'}}>
				<h2 style={{width: '100%', textAlign:'center',fontWeight: '400',paddingBottom: '14px',margin:'0 0 0 0'}}>我们的产品</h2>
				<p style={{width: '100%', textAlign:'center',paddingBottom: '14px'}}>多种产品形式，灵活适用各类业务场景</p>

				<div style={{width: '30%', textAlign:'center', marginRight:'20px'}} >
				<img  alt={''} src={require('../res/img/web-icon.png')}/>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>Web API</h3>
				<p>  根据需求在线调用 网页 API，轻松拥有智能分析能力。</p>
				</div>
				<div style={{width: '30%', textAlign:'center',marginRight:'20px'}}>
				<img alt={''} src={require('../res/img/mobile-icon.png')}/>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>Mobile SDK</h3>
				<p>集成 SDK 到 移动设备，离线调用开放云平台功能。</p>
				</div>
				<div style={{width: '30%', textAlign:'center'}}>
				<img  alt={''} src={require('../res/img/other-icon.png')}/>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>其他形式</h3>
				<p>提供服务器端 整体解决方案，满足各类业务场景需求。</p>
				</div>
			</div>

			<div style={{backgroundImage:"url(" + Background + ")",width: '60%',
			display: 'flex',flexWrap: 'wrap',flexDirection: 'row',
			justifyContent: 'center',alignContent:'center', 
			alignItems:'center',fontFamily: 'PingFangSC,FZLTXHK,arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif',
			paddingTop:'67px',color:'#fff'		
						}}>
			<h2 style={{width: '100%', textAlign:'center',fontWeight: '400',paddingBottom: '74px',margin:'0 0 0 0'}}>我们的优势</h2>
				<div style={{width: '30%', textAlign:'center'}} >
				<img alt={''}  src={require('../res/img/advantage-one.png')}/>
				<h3 style={{  textAlign:'center', fontWeight: '400'}}>准确</h3>
				
				</div>
				<div style={{width: '30%', textAlign:'center'}} >
				<img  alt={''} src={require('../res/img/advantage-two.png')}/>
				<h3 style={{  textAlign:'center', fontWeight: '400'}}>快速</h3>
				
				</div>
				<div style={{width: '30%', textAlign:'center'}} >
				<img  alt={''} src={require('../res/img/advantage-three.png')}/>
				<h3 style={{  textAlign:'center', fontWeight: '400'}}>可靠</h3>
				
				</div>
			</div>
			</div>
			)}
		/>
		<Route path='/project' component={ProjectPage}/>
		<Route path='/classify' render={()=>(<ItemPage/>)}/>
		<Route path='/caption' render={()=>(<CaptionPage/>)}/>
		<Route path='/team' render={()=>(<TeamPage/>)}/>
	</Switch>

	)
export default Routes