/**
 *   Donate Page
 *
 */

import React from 'react';
import * as IoIcons from 'react-icons/io';

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      showReply: false,
    };
  }
  onClick(e) {
    e.preventDefault();
    this.setState({ showReply: !this.state.showReply });
  }
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
                <a onClick={this.onClick.bind(this)} href="#">
                  กูติดยังวะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply && (
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
                <a onClick={this.onClick.bind(this)} href="#">
                  มีเซ็กส์กับแฟนจะติดโควิดไหมคะ?
                </a>
              </div>
            </div>
            <div className="content-show">
              {this.state.showReply && (
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
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
