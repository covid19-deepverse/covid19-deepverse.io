/**
 *   Donate Page
 *
 */

import React from 'react';
import * as IoIcons from 'react-icons/io';

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

    };
  
  // onClick(e) {
  //   e.preventDefault();
  //   this.setState({ showReply: !this.state.showReply });
  // }
  render() {
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
            <div className="contents">
              <div className="content-number">1</div>
              <div className="content-title">
                <a onClick={()=>{this.setState({showReply1:!this.state.showReply1})}} href="#">
                  กูติดยังวะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply1 && (
                <p>
                  <dd>
                    ก่อนอื่นขอเรียกคุณนะค้าาา ถ้าไปตรวจเชื้อโควิด-19
                    กับโรงพยาบาลแล้วแจ้งมาว่าพบเชื้อ (Detectable)
                    นั่นแปลว่าติดแล้วค่ะ แม้ทางการแพทย์จะบอกว่าควรตรวจสองรอบ
                    แต่สถานการณ์ตอนนี้ ชุดตรวจวัดขาดแคลนอยู่
                    อาจจะตรวจรอบเดียวไปก่อนได้ ส่วนข้อบ่งชี้อื่นๆ
                    ที่อาจจะบ่งชี้ว่าคุณติดโควิด-19 แล้วก็ได้แก่
                    <br />
                    <br />* ไข้ขึ้นสูง
                    <br />* การรับรสหรือกลิ่นแย่ลง
                    <br />* เหนื่อยล้ามาก
                    <br />* ไอแห้ง
                    <br />* มีอาการปวดเมื่อยกล้ามเนื้อ
                    <br />* หายใจลำบาก
                  </dd>
                </p>
              )}
            </div>

            <div className="contents">
              <div className="content-number">2</div>
              <div className="content-title">
                <a onClick={()=>{this.setState({showReply2:!this.state.showReply2})}} href="#">
                  มีเซ็กส์กับแฟนจะติดโควิดไหมคะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply2 && (
                <p>
                  มันต้องถามจริงๆ เนอะ เพราะรอบนี้ท่าจะอีกนาน
                  <br />
                  <br />
                  การสัมผัสใกล้ชิดกัน ยิ่งมีการหายใจรดกัน สัมผัสกันเป็นเวลานาน
                  เหล่านี้ถือเป็นปัจจัยเพิ่มความเสี่ยงของการติดเชื้อได้หมดค่ะ
                  แต่ถ้ามีเพศสัมพันธ์กันโดยห่างกัน 2 เมตร
                  อย่างที่คุณหมอยงกล่าวไว้ในเฟซบุ๊กส่วนตัวก็ปลอดภัยค่ะ
                  ถ้าทำแบบนี้ไม่ได้ก็อดทนกันหน่อยนะคะ เป็นกำลังใจให้ค่ะ
                  <br />
                  <br />
                  บทความของ Vox
                  ที่พูดถึงแนวปฏิบัติที่ดีที่สุดเกี่ยวกับการมีเพศสัมพันธ์และการออกเดทท่ามกลางสถานการณ์การระบาดของไวรัส
                  โดยอ้างความเห็นของแอนนา มัลดูน อดีตที่ปรึกษาด้านนโยบายศาสตร์
                  ประจำกระทรวงสาธารณสุขและบริการมนุษย์ของสหรัฐฯ บอกว่า
                  <br />
                  <br />
                  แม้จะไม่มีหลักฐานแสดงว่าโควิด-19
                  ติดต่อทางเพศสัมพันธ์ได้หรือไม่
                  แต่กิจกรรมทางเพศก็มักเลี่ยงการต้องใกล้ชิดกัน การหายใจรดใส่กัน
                  การสัมผัสร่างกายอีกฝ่ายไปไม่ได้
                  ซึ่งสิ่งเหล่านี้ล้วนเพิ่มความเสี่ยงของการติดเชื้อ
                  โดยเฉพาะการจูบที่อาจสามารถแพร่กระจายไวรัสได้ดี
                  <br />
                  <br />
                  ยังไงก็ลองประเมินจากข้อมูลทั้งหมดนี้ดู แล้วหาทางออกกันนะคะ
                </p>
              )}
            </div>

            <div className="contents">
              <div className="content-number">3</div>
              <div className="content-title">
                <a onClick={()=>{this.setState({showReply3:!this.state.showReply3})}}href="#">
                  กูติดยังวะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply3 && (
                <p>
                  <dd>
                    ก่อนอื่นขอเรียกคุณนะค้าาา ถ้าไปตรวจเชื้อโควิด-19
                    กับโรงพยาบาลแล้วแจ้งมาว่าพบเชื้อ (Detectable)
                    นั่นแปลว่าติดแล้วค่ะ แม้ทางการแพทย์จะบอกว่าควรตรวจสองรอบ
                    แต่สถานการณ์ตอนนี้ ชุดตรวจวัดขาดแคลนอยู่
                    อาจจะตรวจรอบเดียวไปก่อนได้ ส่วนข้อบ่งชี้อื่นๆ
                    ที่อาจจะบ่งชี้ว่าคุณติดโควิด-19 แล้วก็ได้แก่
                    <br />
                    <br />* ไข้ขึ้นสูง
                    <br />* การรับรสหรือกลิ่นแย่ลง
                    <br />* เหนื่อยล้ามาก
                    <br />* ไอแห้ง
                    <br />* มีอาการปวดเมื่อยกล้ามเนื้อ
                    <br />* หายใจลำบาก
                  </dd>
                </p>
              )}
            </div>


            <div className="contents">
              <div className="content-number">4</div>
              <div className="content-title">
                <a  onClick={()=>{this.setState({showReply4:!this.state.showReply4})}}href="#">
                  กูติดยังวะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply4 && (
                <p>
                  <dd>
                    ก่อนอื่นขอเรียกคุณนะค้าาา ถ้าไปตรวจเชื้อโควิด-19
                    กับโรงพยาบาลแล้วแจ้งมาว่าพบเชื้อ (Detectable)
                    นั่นแปลว่าติดแล้วค่ะ แม้ทางการแพทย์จะบอกว่าควรตรวจสองรอบ
                    แต่สถานการณ์ตอนนี้ ชุดตรวจวัดขาดแคลนอยู่
                    อาจจะตรวจรอบเดียวไปก่อนได้ ส่วนข้อบ่งชี้อื่นๆ
                    ที่อาจจะบ่งชี้ว่าคุณติดโควิด-19 แล้วก็ได้แก่
                    <br />
                    <br />* ไข้ขึ้นสูง
                    <br />* การรับรสหรือกลิ่นแย่ลง
                    <br />* เหนื่อยล้ามาก
                    <br />* ไอแห้ง
                    <br />* มีอาการปวดเมื่อยกล้ามเนื้อ
                    <br />* หายใจลำบาก
                  </dd>
                </p>
              )}
            </div>


            <div className="contents">
              <div className="content-number">5</div>
              <div className="content-title">
                <a onClick={()=>{this.setState({showReply5:!this.state.showReply5})}}href="#">
                  กูติดยังวะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply5 && (
                <p>
                  <dd>
                    ก่อนอื่นขอเรียกคุณนะค้าาา ถ้าไปตรวจเชื้อโควิด-19
                    กับโรงพยาบาลแล้วแจ้งมาว่าพบเชื้อ (Detectable)
                    นั่นแปลว่าติดแล้วค่ะ แม้ทางการแพทย์จะบอกว่าควรตรวจสองรอบ
                    แต่สถานการณ์ตอนนี้ ชุดตรวจวัดขาดแคลนอยู่
                    อาจจะตรวจรอบเดียวไปก่อนได้ ส่วนข้อบ่งชี้อื่นๆ
                    ที่อาจจะบ่งชี้ว่าคุณติดโควิด-19 แล้วก็ได้แก่
                    <br />
                    <br />* ไข้ขึ้นสูง
                    <br />* การรับรสหรือกลิ่นแย่ลง
                    <br />* เหนื่อยล้ามาก
                    <br />* ไอแห้ง
                    <br />* มีอาการปวดเมื่อยกล้ามเนื้อ
                    <br />* หายใจลำบาก
                  </dd>
                </p>
              )}
            </div>



            <div className="contents">
              <div className="content-number">6</div>
              <div className="content-title">
                <a onClick={()=>{this.setState({showReply6:!this.state.showReply6})}} href="#">
                  กูติดยังวะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply6 && (
                <p>
                  <dd>
                    ก่อนอื่นขอเรียกคุณนะค้าาา ถ้าไปตรวจเชื้อโควิด-19
                    กับโรงพยาบาลแล้วแจ้งมาว่าพบเชื้อ (Detectable)
                    นั่นแปลว่าติดแล้วค่ะ แม้ทางการแพทย์จะบอกว่าควรตรวจสองรอบ
                    แต่สถานการณ์ตอนนี้ ชุดตรวจวัดขาดแคลนอยู่
                    อาจจะตรวจรอบเดียวไปก่อนได้ ส่วนข้อบ่งชี้อื่นๆ
                    ที่อาจจะบ่งชี้ว่าคุณติดโควิด-19 แล้วก็ได้แก่
                    <br />
                    <br />* ไข้ขึ้นสูง
                    <br />* การรับรสหรือกลิ่นแย่ลง
                    <br />* เหนื่อยล้ามาก
                    <br />* ไอแห้ง
                    <br />* มีอาการปวดเมื่อยกล้ามเนื้อ
                    <br />* หายใจลำบาก
                  </dd>
                </p>
              )}
            </div>



            <div className="contents">
              <div className="content-number">7</div>
              <div className="content-title">
                <a onClick={()=>{this.setState({showReply7:!this.state.showReply7})}} href="#">
                  กูติดยังวะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply7 && (
                <p>
                  <dd>
                    ก่อนอื่นขอเรียกคุณนะค้าาา ถ้าไปตรวจเชื้อโควิด-19
                    กับโรงพยาบาลแล้วแจ้งมาว่าพบเชื้อ (Detectable)
                    นั่นแปลว่าติดแล้วค่ะ แม้ทางการแพทย์จะบอกว่าควรตรวจสองรอบ
                    แต่สถานการณ์ตอนนี้ ชุดตรวจวัดขาดแคลนอยู่
                    อาจจะตรวจรอบเดียวไปก่อนได้ ส่วนข้อบ่งชี้อื่นๆ
                    ที่อาจจะบ่งชี้ว่าคุณติดโควิด-19 แล้วก็ได้แก่
                    <br />
                    <br />* ไข้ขึ้นสูง
                    <br />* การรับรสหรือกลิ่นแย่ลง
                    <br />* เหนื่อยล้ามาก
                    <br />* ไอแห้ง
                    <br />* มีอาการปวดเมื่อยกล้ามเนื้อ
                    <br />* หายใจลำบาก
                  </dd>
                </p>
              )}
            </div>



            <div className="contents">
              <div className="content-number">8</div>
              <div className="content-title">
                <a  onClick={()=>{this.setState({showReply8:!this.state.showReply8})}}href="#">
                  กูติดยังวะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply8 && (
                <p>
                  <dd>
                    ก่อนอื่นขอเรียกคุณนะค้าาา ถ้าไปตรวจเชื้อโควิด-19
                    กับโรงพยาบาลแล้วแจ้งมาว่าพบเชื้อ (Detectable)
                    นั่นแปลว่าติดแล้วค่ะ แม้ทางการแพทย์จะบอกว่าควรตรวจสองรอบ
                    แต่สถานการณ์ตอนนี้ ชุดตรวจวัดขาดแคลนอยู่
                    อาจจะตรวจรอบเดียวไปก่อนได้ ส่วนข้อบ่งชี้อื่นๆ
                    ที่อาจจะบ่งชี้ว่าคุณติดโควิด-19 แล้วก็ได้แก่
                    <br />
                    <br />* ไข้ขึ้นสูง
                    <br />* การรับรสหรือกลิ่นแย่ลง
                    <br />* เหนื่อยล้ามาก
                    <br />* ไอแห้ง
                    <br />* มีอาการปวดเมื่อยกล้ามเนื้อ
                    <br />* หายใจลำบาก
                  </dd>
                </p>
              )}
            </div>


            <div className="contents">
              <div className="content-number">9</div>
              <div className="content-title">
                <a onClick={()=>{this.setState({showReply9:!this.state.showReply9})}} href="#">
                  กูติดยังวะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply9 && (
                <p>
                  <dd>
                    ก่อนอื่นขอเรียกคุณนะค้าาา ถ้าไปตรวจเชื้อโควิด-19
                    กับโรงพยาบาลแล้วแจ้งมาว่าพบเชื้อ (Detectable)
                    นั่นแปลว่าติดแล้วค่ะ แม้ทางการแพทย์จะบอกว่าควรตรวจสองรอบ
                    แต่สถานการณ์ตอนนี้ ชุดตรวจวัดขาดแคลนอยู่
                    อาจจะตรวจรอบเดียวไปก่อนได้ ส่วนข้อบ่งชี้อื่นๆ
                    ที่อาจจะบ่งชี้ว่าคุณติดโควิด-19 แล้วก็ได้แก่
                    <br />
                    <br />* ไข้ขึ้นสูง
                    <br />* การรับรสหรือกลิ่นแย่ลง
                    <br />* เหนื่อยล้ามาก
                    <br />* ไอแห้ง
                    <br />* มีอาการปวดเมื่อยกล้ามเนื้อ
                    <br />* หายใจลำบาก
                  </dd>
                </p>
              )}
            </div>


            <div className="contents">
              <div className="content-number">10</div>
              <div className="content-title">
                <a onClick={()=>{this.setState({showReply10:!this.state.showReply10})}} href="#">
                  กูติดยังวะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply10 && (
                <p>
                  <dd>
                    ก่อนอื่นขอเรียกคุณนะค้าาา ถ้าไปตรวจเชื้อโควิด-19
                    กับโรงพยาบาลแล้วแจ้งมาว่าพบเชื้อ (Detectable)
                    นั่นแปลว่าติดแล้วค่ะ แม้ทางการแพทย์จะบอกว่าควรตรวจสองรอบ
                    แต่สถานการณ์ตอนนี้ ชุดตรวจวัดขาดแคลนอยู่
                    อาจจะตรวจรอบเดียวไปก่อนได้ ส่วนข้อบ่งชี้อื่นๆ
                    ที่อาจจะบ่งชี้ว่าคุณติดโควิด-19 แล้วก็ได้แก่
                    <br />
                    <br />* ไข้ขึ้นสูง
                    <br />* การรับรสหรือกลิ่นแย่ลง
                    <br />* เหนื่อยล้ามาก
                    <br />* ไอแห้ง
                    <br />* มีอาการปวดเมื่อยกล้ามเนื้อ
                    <br />* หายใจลำบาก
                  </dd>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
