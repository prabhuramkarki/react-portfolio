// import React from 'react'

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            {/* <img src="../assets/profile.png" alt="user" /> */}
            <img
              src="https://media.licdn.com/dms/image/D4D35AQGYtugXDMi2Xg/profile-framedphoto-shrink_200_200/0/1687091833180?e=1688482800&v=beta&t=n1vm7Hcfv_2cOcIHW9HN-8h4Xqju3FmvwFdpmb9-xGg"
              alt="user"
            />
          </div>
          <div className="about-col-2">
            <h1>About Me</h1>
            <p>
              Hello, Everyone My name is Prabhuram Karki. I am currently
              pursuing my undergrad in Bachelors of Information Technology
            </p>

            <div className="tab-titles">
              <p className="tab-links active-links">Skills</p>
              <p className="tab-links ">Experience</p>
              <p className="tab-links ">Education</p>
            </div>

            <div className="tab-contents" id="skills">
              <ul>
                <li>
                  <span>Basic Web Development</span> <br />
                  Designing Basic Websites
                </li>
                <li>
                  <span>Basic Programming</span> <br />
                  Writting Simple Code on C Programming, Java, Javascript etc.
                </li>
                <li>
                  <span>Basic Graphics Designing</span> <br />
                  Designing Poster, Banner, Logo, Thumbnails etc. on Adobe
                  Photoshop & Illustrator etc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
