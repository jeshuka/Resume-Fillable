const input = document.querySelectorAll('input');


const output = document.querySelector('.section2');


function resume() {

    output.innerHTML = `
<div class="container2">
    <div class="header">
        <div class="full-name">
            <!-- entering full name wiht js  -->
            <span class="first-name">${input['0'].value}</span>
        </div>
        <br>
        <div class="contact-info">
            <span class="email">Email: </span>
            <!-- entering email with js  -->
            <span class="email-val">${input['2'].value}</span>
            <br>
            <span class="phone">Phone: </span>

            <!-- entering phone number with js  -->
            <span class="phone-val">${input['3'].value}</span>
            <br>
            <span class="email">Address: </span>

            <!-- enering address with js  -->
            <span class="phone-val">${input['4'].value}</span>
            <br>


            <span class="email">Portfolio Site: </span>

            <!-- entering the porfolio site in link and projects as a link button with js  -->
            <a href="https://codepen.io/your-work" target="_blank">
                <span class="phone-val">${input['5'].value}</span>

            </a>
            <br>
        </div>

        <div class="about">

            <!-- Entering Profession  -->
            <span class="position">${input['1'].value}</span>
            <!-- entering abour your self here with js  -->
            <span class="desc">${input['6'].value}
            </span>


        </div>
    </div>


    <div class="details">
        <div class="section">
            <div class="section__title">Experience</div>
            <div class="section__list">
                <div class="section__list-item">
                    <div class="left">

                        <!-- entering first professional experience with js  -->

                        <!-- prvious company  -->
                        <div class="name">${input['18'].value}</div>

                        <!-- previous company address  -->
                        <div class="addr">${input['19'].value}</div>

                    </div>
                    <div class="right">

                        <!-- previous job  -->
                        <div class="name">${input['20'].value}</div>

                        <!-- abour previous job  -->
                        <div class="desc">${input['21'].value}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section__title">Skills</div>
            <div class="section__list">
                <div class="section__list-item">
                    <div class="left">

                        <!-- enterinng the skill 1 with js  -->
                        <!-- Skill 1  -->
                        <div class="name">${input['8'].value}</div>

                    </div>
                    <div class="right">

                        <!-- Skill 2 -->
                        <div class="name">${input['9'].value}</div>

                    </div>
                    <br>
                    <br>
                    <div class="left">

                        <!-- enterinng the skill 1 with js  -->
                        <!-- Skill 3  -->
                        <div class="name">${input['10'].value}</div>

                    </div>
                    <div class="right">

                        <!-- Skill 4 -->
                        <div class="name">${input['11'].value}</div>

                    </div>
                </div>
            </div>
        </div>


        <div class="section">
            <div class="section__title">Education</div>
            <div class="section__list">
                <div class="section__list-item">
                    <div class="left">

                        <!-- Entering University name  -->
                        <div class="name">${input['12'].value}</div>
                        <div class="duration">${input['13'].value}</div>
                    </div>
                    <div class="right">
                        <!-- entering course name  -->
                        <div class="name">${input['14'].value}</div>
                        <div class="desc">${input['15'].value}</div>
                    </div>
                </div>

                <div class="section__list-item">
                    <div class="left">
                        <!-- Entering 12 class stream with js  -->
                        <div class="name">${input['16'].value}</div>
                    </div>
                    <div class="right">
                        <div class="desc">${input['17'].value}</div>
                    </div>
                </div>

            </div>
        </div>
        <div class="section">
            <div class="section__title">Projects</div>
            <div class="section__list">
                <div class="section__list-item">

                    <!-- entering firt project name with js  -->
                    <div class="name">${input['22'].value}</div>

                    <!-- about your project 1  -->
                    <div class="text">${input['23'].value}
                    </div>


                    <!-- entering link of project 1  -->
                    <span class="email">Project link: </span>
                    <a href="https://codepen.io/knaman2609/pen/Zbyjvv" target="_blank">
                        <div class="text">${input['24'].value}</div>
                    </a>
                </div>


                <div class="section__list-item">
                    <!-- entering second project name with js  -->
                    <div class="name">${input['25'].value}</div>
                    <!-- about your project 2  -->
                    <div class="text">${input['26'].value}
                    </div>
                    <!-- entering link of project 2  -->
                    <span class="email">Project link: </span>
                    <a href="https://codepen.io/knaman2609/pen/Zbyjvv" target="_blank">
                        <div class="text">${input['27'].value}</div>
                    </a>
                </div>
                <br>
            </div>
        </div>

        <div class="section">
            <div class="section__title">Hobbies</div>
            <div class="section__list">
                <div class="section__list-item">
                    <div class="left">

                        <!-- enterinng the skill 1 with js  -->
                        <!-- Skill 1  -->
                        <div class="name">${input['28'].value}</div>

                    </div>
                    <div class="right">

                        <!-- Skill 2 -->
                        <div class="name">${input['29'].value}</div>

                    </div>
                    <br>
                    <br>
                    <div class="left">

                        <!-- enterinng the skill 1 with js  -->
                        <!-- Skill 3  -->
                        <div class="name">${input['30'].value}</div>

                    </div>
                    <div class="right">

                        <!-- Skill 4 -->
                        <div class="name">${input['31'].value}</div>

                    </div>
                </div>
            </div>
        </div>
        
        

    </div>
    
    
    </div>
    <a href="#form">
            <button id="submit" class="bttn" type="button">Go to Form</button>
    </a>
    
    `


}

function resume2() {
    output.innerHTML = `
    <div class="container4">
        <section class="section_left">

            <h1 class="title">${input['0'].value}</h1>
            <hr>
            </hr>
            <br>
            <h5 class="sub-title">CONTACT INFO</h5>
            <ul>
                <!-- phone  -->
                <li><i class="fa fa-phone"></i> ${input['3'].value}</li>
                <!-- email  -->
                <li><i class="fa fa-envelope"></i> ${input['2'].value}</li>
                <!-- porfolio sit  -->
                <li><i class="fa fa-globe"></i> ${input['5'].value}</li>
                <!-- address  -->
                <li><i class="fa fa-map-marker"></i>${input['4'].value}</li>


                <ul>

                    <h5 class="sub-title">EDUCATIONAL BACKGROUND</h5>
                    <em>Tertiary Level</em>
                    <!-- Tertiary -->
                    <p>${input['12'].value} - ${input['13'].value}</p>

                    <em>Secondary Level</em>
                    <!-- Secondary -->
                    <p>${input['14'].value} - ${input['15'].value}</p>

                    <em>Primary Level</em>
                    <!-- Primary -->
                    <p>${input['16'].value} - ${input['17'].value}</p>
                   
                    
                    <br>


                 
                    <!-- Hobbies  -->
                    <br>
                    <br>
                    <h5 class="sub-title">General Skills</h5>
                    <!-- University -->
                    <em>${input['28'].value}</em>
                    
                    <!-- college name  -->
                    <em>${input['29'].value}</em>
                    <!-- courrse name  -->
                    <em>${input['30'].value}</em>
                    <!-- courrse name  -->
                    <em>${input['31'].value}</em>
                    <br>



                </ul>    
            

        </section>
        <section class="section_right">
            <!-- job title -->
            <h1 class="title">${input['1'].value}</h1>
            <br>
            <!-- about your self  -->
            <p>${input['6'].value}</p>
            <br>
            <!-- professional EXPERIENCE  -->
            <h1 class="title">HONOURS and AWARDS</h1>

            <!-- previous company  -->
            <h5 class="sub-title">${input['18'].value}</h5>
            
            <!-- address of previous company -->
            <p>${input['19'].value}</p>

            <!-- previous job  -->
            <h5 class="sub-title">${input['20'].value}</h5>
            <!-- about your previous job  -->
            <p>${input['21'].value}</p>

            
            <br>
            <!-- Prject Details -->

            <h1 class="title">EXPERIENCES</h1>
            <br>
            <!-- previous company  -->
            <h3 clas
            
            

            
            <p>${input['22'].value}</p>
            <p>${input['23'].value}</p>
            <p>${input['24'].value}</p>
            <p>${input['25'].value}</p>
            <p>${input['26'].value}</p>
            <p>${input['27'].value}</p>

            

            <br>
            <br>
            <h1 class="title">TECHNICAL SKILLS</h1>
            <table>
                <tr>

                    <!-- skill 1  -->
                    <td>
                    ${input['8'].value}
                    </td>
                    <td>
                        <div class="progress_container">
                            <div class="progress_bar" style="width:90%"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <!-- skill 2  -->
                    <td>
                    ${input['9'].value}
                    </td>
                    <td>
                        <div class="progress_container">
                            <div class="progress_bar" style="width:70%"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <!-- skill 3  -->
                    <td>
                    ${input['10'].value}
                    </td>
                    <td>
                        <div class="progress_container">
                            <div class="progress_bar" style="width:80%"></div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <!-- skill 4 -->
                    <td>
                    ${input['11'].value}
                    </td>
                    <td>
                        <div class="progress_container">
                            <div class="progress_bar" style="width:86%"></div>
                        </div>
                    </td>
                </tr>
            </table>
            
            
            </section>
            <a href="#form">
            <button id="submit" class="bttn" type="button">Go to Form</button>
            </a>
            
    
    `

}

