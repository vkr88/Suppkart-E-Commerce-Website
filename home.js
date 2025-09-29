
/* 
  <!-------------------------------------- SideBar ------------------------------------------------------------- -->
    <!-------------------------------------- SideBar ------------------------------------------------------------- -->
    <!-------------------------------------- SideBar ------------------------------------------------------------- --> */




const mainubar = document.querySelector(".mainubar");
const SideBarmain = document.querySelector(".SideBar-main-Div");

const closebar = document.querySelector(".closeSidebar");

const SideBarf = () => {
    if (SideBarmain.style.display == "none" || SideBarmain.style.display == "") {
        SideBarmain.style.display = "block"
    }

}
const closebarf = () => {
    SideBarmain.style.display = "none"
}


if (mainubar) { mainubar.addEventListener("click", SideBarf); } 
if (closebar) { closebar.addEventListener("click", closebarf); }

/* 
  <!-------------------------------------- Login page------------------------------------------------------------- -->
    <!--------------------------------------Login page ------------------------------------------------------------- -->
    <!-------------------------------------- Login page------------------------------------------------------------- --> */

const btnsign = document.querySelector(".Signin");
const btnsignm = document.querySelector(".loginparsernicon")
const loginpage = document.querySelector(".loginmainDiv");
const forgermainDiv = document.querySelector(".forgermainDiv");
const loginmainDiv = document.getElementsByClassName("loginmainDiv")[0];
const Registerpage = document.querySelector(".Registerpage");
const SendOTP = document.querySelector(".SendOTP");
const loginhide = () => {
    const Emailvalue = document.getElementsByClassName("Emailinput")[0].value;
    loginmainDiv.style.display = "none"
}

const loginpageshow = () => {
    loginmainDiv.style.display = "block"
    forgermainDiv.style.display = "none"
    Registerpage.style.display = "none"
    loginmainDiv.style.display = "flex"
}


const forgetpage = () => {
    forgermainDiv.style.display = "block"
    loginmainDiv.style.display = "none"
    forgermainDiv.style.display = "flex"

}
const openRegisterpage = () => {
    loginmainDiv.style.display = "none"
    Registerpage.style.display = "block"
    Registerpage.style.display = "flex"
}

const SendOTPbtn = () => {
    forgermainDiv.style.display = "none"
    SendOTP.style.display = "block"
    SendOTP.style.display = "flex"

}
const NewPassword = document.querySelector(".NewPassword");

const SubmitNewpassword = () => {
    SendOTP.style.display = "none"
    NewPassword.style.display = "block"
    NewPassword.style.display = "flex"
}











console.log("ehllo")
const showProfile = () => {

    const profileDiv = document.querySelector('.profile-mainDiv');
    if (profileDiv.style.display == "none" || profileDiv.style.display === "") {
        profileDiv.style.display = "block"
    } else {
        profileDiv.style.display = "none"
    }
    console.log("helllo")
};




const container = document.querySelector('.main-div-list' ,);
const nextBtn = document.querySelector('.rightSideImageTop');
const prevBtn = document.querySelector('.leftSideImageTop');

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
});




const containerA = document.querySelector('.All-Deals');
const nextBtnD = document.querySelector('.rightSideImageAllDeal');
const prevBtnD = document.querySelector('.leftSideImageAllDeal');

nextBtnD.addEventListener('click', () => {
  containerA.scrollBy({ left: 300, behavior: 'smooth' });

});

prevBtnD.addEventListener('click', () => {
  containerA.scrollBy({ left: -300, behavior: 'smooth' });
});



const containerB = document.querySelector('.All-Deals-t');
const nextBtnE = document.querySelector('.rightSideImageGoal');
const prevBtnE = document.querySelector('.leftSideImageGoal');

nextBtnE.addEventListener('click', () => {
  containerB.scrollBy({ left: 300, behavior: 'smooth' });

});

prevBtnE.addEventListener('click', () => {
  containerB.scrollBy({ left: -300, behavior: 'smooth' });
});


















