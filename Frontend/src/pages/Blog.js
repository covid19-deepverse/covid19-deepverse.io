/**
 *   Donate Page
 *
 */

import React from 'react';
import * as IoIcons from 'react-icons/io';
import database from '../database/Database';
import Database from '../database/Database'
class Blog extends React.Component {
 
    state = {
      showReply1: false,
      showReply2: false,
      showReply3: false,
      showReply4: false,
      showReply5: false,
      showReply6: false,
      showReply7: false,
      showReply8: false,
      showReply9: false,
      showReply10: false,
      showReply11: false,
      Items:[]

    };
     readdata_Success=async(data)=>{
       this.setState({Items:data})
    }
     readdata_Fail=async(e)=>{
      console.log("Error")

    }
      Update_Success=async(data)=>{
       await this.Fetchdata()
    }
     Update_Fail=async(e)=>{
      console.log("Error")

    }

   async Fetchdata(){
      await Database.readdata(this.readdata_Success,this.readdata_Fail)
    }
   async componentDidMount(){
       await Database.readdata(this.readdata_Success,this.readdata_Fail)
    }
  
  // onClick(e) {
  //   e.preventDefault();
  //   this.setState({ showReply: !this.state.showReply });
  // }
  render() {
    const{Items}=this.state
    return (
      <div className="blog-contents">
        <div className="blog-contents-top">
          <div className="blog-contents-top-left">
            <div className="blog-contents-top-left-logo">
              <IoIcons.IoMdPaper size="1.7em" />
            </div>
            <div className="blog-contents-top-left-title">
              <p>
                {' '}
                <strong>FAQ</strong> คำถามที่พบบ่อยเกี่ยวกับ COVID-19
              </p>
            </div>
          </div>
          <div className="blog-contents-top-right">
            <div className="blog-contents-top-right-logo1"></div>
            <div className="blog-contents-top-right-logo2"></div>
            <div className="blog-contents-top-right-logo3"></div>
          </div>
        </div>

        <div className="blog-contents-bottom">
          <div className="hide-show-content">
          {Items.map(({Id,Header,Para,Show})=>(
              <>
                  <div className="contents">
                      <div className="content-number">{Id}</div>
                      <div className="content-title">
                          <a onClick={()=>{
                            let tmp={Show}
                            database.UpdateShow(Id,Show,this.Update_Success,this.Update_Fail)
                          }} href="#">
                          {Header}
                          </a>
                      </div>
                  </div>
                  <div className="content-show">
                      {Show&& (
                    <p>
                      <dd>{ Para}</dd>
                    
                    </p>
                  )}
                  </div>                   
                </>                                
              ))}

          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
