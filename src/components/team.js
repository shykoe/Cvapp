import React, {Component} from 'react';
const style = {
	main:{
        display: 'flex',
        textAlign: 'center',
        // flexDirection: 'row',
         justifyContent: 'center',
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
	  margin: '5px 15px',
	  height: '300px',
	 // width: '500px',
	  // borderLeft: '1px solid gray',
	  // borderRight: '1px solid gray',
	  // borderTop: '5px solid gray',
	  // borderBottom: '5px solid gray',
	},
}
class TeamPage extends Component{
	render(){

		return(
	      <div style={style.main}>
	      <div style={{width:'40%',textAlign:'start',textIndent:'22px'}}>
	      <p>MMC人工智能开放云平台核心技术源自中科院自动化所模式识别国家重点实验室多媒体计算团队十多年积累的科研成果。团队成员长期从事图像与视频内容分析、多媒体数据挖掘、知识图谱等领域的关键技术研究。中科院自动化所在模式识别基础理论、计算机视觉、人工智能等领域具有长期的研究和技术积累，并于近期当选为中国人工智能产业发展联盟副理事长单位和人工智能标准工作组组长单位。</p>
	      <div style={{display: 'flex',textAlign: 'center',marginTop:'30px'}}>
	      <div style={{width:'25%',textAlign:'center'}}>
	      <p>徐常胜</p>
	      <p>研究员、博导</p>
	      </div>
	      <div style={{width:'25%',textAlign:'center'}}>
	      <p>董未名</p>
	      <p>研究员、硕导</p>
	      </div>
	      <div style={{width:'25%',textAlign:'center'}}>
	      <p>杨小汕</p>
	      <p>助理研究员</p>
	      </div>
		<div style={{width:'25%',textAlign:'center'}}>
	      <p>盛一堃</p>
	      <p>在读研究生</p>
	      </div>
	      </div>
	      </div>
	      </div>
		)
	}
}
export default TeamPage