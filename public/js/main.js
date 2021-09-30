const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');

const temp_status=document.getElementById('temp_status');
const temp_real_val=document.getElementById('temp_real_val');
const dataHide=document.querySelector('.middle_layer');

const getInfo=async (e)=>{
    e.preventDefault();
    let cityVal=cityName.value;

    if(cityVal===""){
        city_name.innerText="please write the name before search";
        dataHide.classList.add('data_hide');
    }
    else{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1e1e7ff8a512262f394b9250623a308d`;
            const res=await fetch(url);
            const data=await res.json();
            const arrData=[data];
            // console.log(arrData)

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText=arrData[0].main.temp;
            // temp_status.innerText=arrData[0].weather[0].main;

            console.log(arrData[0].weather[0].main)
            const tempMood=arrData[0].weather[0].main;
            //conditon to check sunny or cloudy
            if(tempMood==="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></>";
            }
            else if(tempMood==="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></>";
            }
            else if(tempMood==="Rain"){
                temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></>";
            }
            else {
                temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></>";
            }

            dataHide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText="please enter the city name properly";
            dataHide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo)