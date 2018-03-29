import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import RaisedButton from 'material-ui/RaisedButton';
import ProjectPage from './components/ProjectPage';
import ItemPage from './components/item';
import CaptionPage from './components/caption';
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
    	fontSize: '7rem',
    	color: '#6a82af',
    	display: 'inline-block',
    	backgroundImage: '-webkit-linear-gradient(45deg,#6a82af,#6a82af 30%,#7cd3d5 70%,#7cd3d5)',
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
			<img  alt={''}  style={{width:'15%',flex:'0 0 0 0'}}src={require('../res/img/CloudAI.png')}/>
				<h1 style={style.h1}>AI开放云平台</h1>
			</div>
			<div style={{width: '100%',display: 'flex',justifyContent: 'center',alignContent:'center',  alignItems:'center'}}>
			<span   style={{color: '#969696'}}>构建可再生的人工智能研究平台。</span>
			</div>
			<div style={{paddingTop:'60px', width: '60%',
			display: 'flex',flexWrap: 'wrap',flexDirection: 'row',
			justifyContent: 'center',alignContent:'center', 
			alignItems:'center',fontFamily: 'PingFangSC,FZLTXHK,arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif'}}>
				<h2 style={{width: '100%', textAlign:'center',fontWeight: '400',paddingBottom: '14px',margin:'0 0 0 0'}}>我们的产品</h2>
				<p style={{width: '100%', textAlign:'center'}}>多种产品形式，灵活适用各类业务场景</p>

				<div style={{width: '30%', textAlign:'center'}} >
				<img  alt={''} src={require('../res/img/web-icon.png')}/>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>Web API</h3>
				<p>根据您的业务需求在线灵活调用 Web API，轻松拥有最新的所有识别能力。</p>
				</div>
				<div style={{width: '30%', textAlign:'center'}}>
				<img alt={''} src={require('../res/img/mobile-icon.png')}/>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>Mobile SDK</h3>
				<p>集成 Mobile SDK 到您的应用中，在移动设备上离线调用。</p>
				</div>
				<div style={{width: '30%', textAlign:'center'}}>
				<img  alt={''} src={require('../res/img/other-icon.png')}/>
				<h3 style={{ color: '#3f3f4c', textAlign:'center', fontWeight: '400'}}>其他形式</h3>
				<p>提供服务器端 SDK、整体解决方案等其他形式的产品服务，满足您各类业务场景需求。</p>
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
	</Switch>

	)
export default Routes