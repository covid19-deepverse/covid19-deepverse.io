/**
 *   Donate Page
 *
 */

import React from 'react';
import * as IoIcons from 'react-icons/io';

import Database from '../database/Database';
class Faq extends React.Component {
  state = {
    Items: [],
    Tmp: [],
  };
  readdata_Success = async (data) => {
    this.setState({ Items: data });
    this.state.Tmp.push(false);
    data.map(({ Show }) => {
      this.state.Tmp.push(Show);
    });

    console.log('Size :' + this.state.Tmp);
  };
  readdata_Fail = async (e) => {
    console.log('Error');
  };
  Update_Success = async (data) => {
    await this.Fetchdata();
  };
  Update_Fail = async (e) => {
    console.log('Error');
  };

  async Fetchdata() {
    await Database.readdata(this.readdata_Success, this.readdata_Fail);
  }
  async componentDidMount() {
    await Database.readdata(this.readdata_Success, this.readdata_Fail);
  }

  render() {
    const { Items, Tmp } = this.state;
    return (
      <div className="blog-contents">
        <div className="blog-contents-top">
          <div className="blog-contents-top-left">
            <div className="blog-contents-top-left-logo">
              <IoIcons.IoMdPaper size="3em" />
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
            {Items.map(({ Id, Header, Para, Show }) => (
              <>
                <div className="contents">
                  <div className="content-number">{Id}</div>
                  <div className="content-title">
                    <a
                      onClick={() => {
                        let tmp = { Show };
                        Tmp[Id] = !Tmp[Id];
                        console.log('ID:' + Id + ' Val:' + Tmp[Id]);
                        // database.UpdateShow(Id,Show,this.Update_Success,this.Update_Fail)
                      }}
                      href="#"
                    >
                      {Header}
                    </a>
                  </div>
                </div>
                <div className="content-show">
                  {Tmp[Id] && (
                    <p>
                      <dd>{Para}</dd>
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
export default Faq;
