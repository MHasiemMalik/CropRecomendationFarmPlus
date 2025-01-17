/*function calculate() {
  // Get the selected values from the two select elements
  const num1 = parseInt(document.getElementById('cropdata').value);
  const num2 = parseInt(document.getElementById('soil').value);

  // Perform the addition
  const sum = num1 + num2;

  // Display the result
  document.getElementById('wateroutput').textContent = sum;
  //document.getElementById('timetaken').textContent = sum;
}
function calculate() {
  // Get the selected value from the select element
  const num1 = parseInt(document.getElementById('cropdata').value);

  // Get the entered value from the input field
  const num2 = parseInt(document.getElementById('area').value);

  const num3 = parseInt(document.getElementById('soil').value);

  // Perform the addition
  const sum = num1 + num2 + num3;

  // Set the result to the input value
  document.getElementById('wateroutput').value = sum;
  document.getElementById('timetaken').value = sum;
  document.getElementById('fert').value = sum;
  document.getElementById('seed').value = sum;
  document.getElementById('cost').value = sum;
}
function handleOption() {
  const selectedOption = document.getElementById('options').value;

  switch (selectedOption) {
    case 'option1':
      // Code to execute for Option 1
      console.log("Option 1 selected");
      break;
    case 'option2':
      // Code to execute for Option 2
      console.log("Option 2 selected");
      break;
    case 'option3':
      // Code to execute for Option 3
      console.log("Option 3 selected");
      break;
    default:
      console.log("Invalid option");
      break;
  }
}

function handleOption() {
  const selectedOption = document.getElementById('options').value;

  if (selectedOption === 'option1') {
    // Code to execute for Option 1
    console.log("Option 1 selected");
  } else if (selectedOption === 'option2') {
    // Code to execute for Option 2
    console.log("Option 2 selected");
  } else if (selectedOption === 'option3') {
    // Code to execute for Option 3
    console.log("Option 3 selected");
  } else {
    console.log("Invalid option");
  }
}
document.getElementById('wateroutput').value = num1 + "-" + sum;
  document.getElementById('timetaken').value = sum;
  document.getElementById('fert').value = sum;
  document.getElementById('seed').value = sum;
  document.getElementById('cost').value = sum;

*/function reset() {
  // Reset the selected value in the select element

  document.getElementById("Statedata").value = "none";
 // document.getElementById("Precropdata").value = "none";
  document.getElementById("Curcropdata").value = "none";
  document.getElementById("CurSeason").value = "none";
  document.getElementById("Soildata").value = "none";

  // Clear the entered value in the input field
  /*document.getElementById('area').value = '';

  document.getElementById("imgdiv").style.display = "none";
  document.getElementById("croph3").style.display = "none";
  document.getElementById("imgdiv1").style.display = "none";
  document.getElementById("soil3").style.display = "none";
  document.getElementById("sc1").style.display = "none";
  document.getElementById("sc").style.display = "inline-block";*/
   
  // Clear the displayed result
  document.getElementById("img1").src="Farmp.jpeg";
  document.getElementById("img2").src="Farmp.jpeg";
  document.getElementById("img3").src="Farmp.jpeg";
  document.getElementById("img4").src="Farmp.jpeg";
  document.getElementById("img5").src="Farmp.jpeg";
  document.getElementById("img6").src="Farmp.jpeg";

  document.getElementById("sc").style.display = "inline-block";
 document.getElementById("sc1").style.display = "none";

  //text
  document.getElementById("txt1").textContent="Enter Data";
  document.getElementById("txt2").textContent="Enter Data";
  document.getElementById("txt3").textContent="Enter Data";
  document.getElementById("txt4").textContent="Enter Data";
  document.getElementById("txt5").textContent="Enter Data";
  document.getElementById("txt6").textContent="Enter Data";

  //Displayed Images and texts
  document.getElementById("imgdiv").style.display = "none";
  document.getElementById("croph3").style.display = "none";
  document.getElementById("imgdiv1").style.display = "none";
  document.getElementById("soil3").style.display = "none";

  document.getElementById("imgdiv2").style.display = "none";
  document.getElementById("soil4").style.display = "none";
  document.getElementById("imgdiv3").style.display = "none";
  document.getElementById("soil5").style.display = "none";
  
  // Select all elements with class 'imgs'
  const images = document.getElementsByClassName("imgs");
  // Loop through the HTMLCollection to set opacity
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = "0.4"; // Set desired opacity value (e.g., 0.5 for 50%)
  }

  swal("Reset Completed", "Enter New Details", "success");
                        
}



function calculate() {
  
  
  

  // Get the selected value from the State element
  const SD = document.getElementById('Statedata').value;

  // Get the selected value from the previous Crop element
  //const PCD = parseInt(document.getElementById('Precropdata').value);

 // Get the selected value from the Current Crop element
  const CN = parseInt(document.getElementById('Curcropdata').value);

// Get the selected value from the Season element
  const SS = document.getElementById("CurSeason").value;

  // Get the selected value from the Season element
  const Soil = parseInt(document.getElementById('Soildata').value);


  /*Get Image And name tags info
  const img1 = document.getElementById("img1");
  const txt1 = document.getElementById("txt1");

  const img2 = document.getElementById("img2");
  const txt2 = document.getElementById("txt2");

  const img3 = document.getElementById("img3");
  const txt3 = document.getElementById("txt3");*/


 if (!SD || SD === "none") {
  swal("Details Required!", "Please Select A State Name!", "error");              
  return;
}
else if(!CN || CN === "none") {
 // alert("Please select a soil type.");
  swal("Details Required!", "Please Select Your Currently Grown Crop Name!", "error");
  return;
}
else if(!SS || SS === "none") {
  // alert("Please select a soil type.");
   swal("Details Required!", "Please Select Select the Current Season at the time of this input!", "error");
   return;
 }
else if(!Soil || Soil === "none") {
  // alert("Please select a soil type.");
   swal("Details Required!", "Please Select Soil Type!", "error");
   return;
 }

 
 else if(SD === "Andhra Pradesh"){
       

     /*
                
                <option value="-1">ALLUVIAL SOIL</option>
                <option value="-2">BLACK SOIL</option>
                <option value="-3">RED SOIL</option>
                <option value="-4">LATERITE SOIL</option>
                <option value="-5">MOUNTAIN SOIL</option>
                <option value="-6">ARID, DESERT SOIL</option>
                <option value="-7">YELLOW SOIL</option>
                <option value="-8">FOREST SOIL</option>
                
               
     */



    //if-else statements for soil types Andhra Pradesh For seasonal data And local market value.
    if( Soil == -1){
      if(SS==152){
       img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
       txt3.textContent = "Rice/Paddy";
       
       img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
       txt4.textContent = "Turmeric";
  
       img5.src = "TP CP PICS/mango5.jpg"; // New image path
        txt5.textContent = "Mango";
        
        img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
        txt6.textContent = "Turmeric";
  
      }
      if(SS==107){
       img3.src = "TP CP PICS/corn4.jpg"; // New image path
       txt3.textContent = "Maize";
       
       img4.src = "TP CP PICS/banana.jpg"; // New image path
       txt4.textContent = "Banana";
  
       img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
       txt5.textContent = "Cauliflower";
        
       img6.src = "TP CP PICS/rose1.jpg"; // New image path
       txt6.textContent = "Rose";
      }
      if(SS==161){
       img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
       txt3.textContent = "Watermelon";
       
       img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
       txt4.textContent = "Okra";
  
      img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
      txt5.textContent = "Cucumber";
        
      img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
      txt6.textContent = "Groundnut";
      }
  
    }else if( Soil == -2){
     if(SS==152){
      img3.src = "TP CP PICS/cotton1.jpg"; // New image path
      txt3.textContent = "Cotton";
      
      img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
      txt4.textContent = "Chillies";

      img5.src = "TP CP PICS/cotton1.jpg"; // New image path
      txt5.textContent = "Cotton";
      
      img6.src = "TP CP PICS/chillis1.jpg"; // New image path
      txt6.textContent = "Red Chilli";
     }
     if(SS==107){
      img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
      txt3.textContent = "Sunflower";
      
      img4.src = "TP CP PICS/coriander.jpg"; // New image path
      txt4.textContent = "Coriander";

      img5.src = "TP CP PICS/onion3.jpg"; // New image path
      txt5.textContent = "Onion";
      
      img6.src = "TP CP PICS/custard.jpg"; // New image path
      txt6.textContent = "Custard Apple";
     }
     if(SS==161){
      img3.src = "TP CP PICS/sesame1.jpg"; // New image path
      txt3.textContent = "Sesame";
      
      img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
      txt4.textContent = "Tomato";

      img5.src = "TP CP PICS/watermelon.jpg"; // New image path
      txt5.textContent = "Watermelon";
      
      img6.src = "TP CP PICS/marigold1.jpg"; // New image path
      txt6.textContent = "Marigold";
     }

   }else if( Soil == -3){
    if(SS==152){
     img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
     txt3.textContent = "Groundnut";
     
     img4.src = "TP CP PICS/mango5.jpg"; // New image path
     txt4.textContent = "Mango";

     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Beans";
      
      img6.src = "TP CP PICS/pine.jpg"; // New image path
      txt6.textContent = "Pineapple";

    }
    if(SS==107){
     img3.src = "TP CP PICS/jowar.jpg"; // New image path
     txt3.textContent = "Sorghum/Jowar";
     
     img4.src = "TP CP PICS/marigold1.jpg"; // New image path
     txt4.textContent = "Marigold";

     img5.src = "TP CP PICS/gin.jpg"; // New image path
     txt5.textContent = "Ginger";
      
     img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
     txt6.textContent = "Snapdragon";
    }
    if(SS==161){
     img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt3.textContent = "Cucumber";
     
     img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
     txt4.textContent = "Brinjal";

    img5.src = "TP CP PICS/papaya.jpg"; // New image path
    txt5.textContent = "Papaya";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }

  }else if( Soil == -4){
    if(SS==152){
     img3.src = "TP CP PICS/cashew10.jpg"; // New image path
     txt3.textContent = "Cashew";
     
     img4.src = "TP CP PICS/pine.jpg"; // New image path
     txt4.textContent = "Pineapple";

     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Mango";
      
      img6.src = "TP CP PICS/Coffee.png"; // New image path
      txt6.textContent = "Coffee";

    }
    if(SS==107){
     img3.src = "TP CP PICS/longpepper.jpg"; // New image path
     txt3.textContent = "Pepper";
     
     img4.src = "TP CP PICS/papaya.jpg"; // New image path
     txt4.textContent = "Papaya";

     img5.src = "TP CP PICS/cloves.jpg"; // New image path
     txt5.textContent = "Clove";
      
     img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
     txt6.textContent = "Jasmine";
    }
    if(SS==161){
     img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
     txt3.textContent = "Bitter Gourd";
     
     img4.src = "TP CP PICS/beans3.jpg"; // New image path
     txt4.textContent = "Beans";

    img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
    txt5.textContent = "Ridge Gourd";
      
    img6.src = "TP CP PICS/cashew10.jpg"; // New image path
    txt6.textContent = "Cashew";
    }

  }else if( Soil == -5){
    if(SS==152){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "wheat";
     
     img4.src = "TP CP PICS/applebyme.jpg"; // New image path
     txt4.textContent = "Apple";

     img5.src = "TP CP PICS/applebyme.jpg"; // New image path
      txt5.textContent = "Apple";
      
      img6.src = "TP CP PICS/peas1.jpg"; // New image path
      txt6.textContent = "Peas";

    }
    if(SS==107){
     img3.src = "TP CP PICS/plum.jpg"; // New image path
     txt3.textContent = "Plum";
     
     img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
     txt4.textContent = "Barley";

     img5.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt5.textContent = "Cardamom";
      
     img6.src = "TP CP PICS/lily.jpg"; // New image path
     txt6.textContent = "Lily";
    }
    if(SS==161){
     img3.src = "TP CP PICS/radish3.jpg"; // New image path
     txt3.textContent = "Radish";
     
     img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
     txt4.textContent = "Cabbage";

    img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
    txt5.textContent = "Pumpkin";
      
    img6.src = "TP CP PICS/grapes.jpg"; // New image path
    txt6.textContent = "Grapes";
    }

  }else if( Soil == -6){
    if(SS==152){
     img3.src = "TP CP PICS/bajra.jpg"; // New image path
     txt3.textContent = "Bajra";
     
     img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
     txt4.textContent = "Date Palm";

     img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
      txt5.textContent = "Date Palm";
      
      img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
      txt6.textContent = "Bottle Gourd";

    }
    if(SS==107){
     img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt3.textContent = "Mustard";
     
     img4.src = "TP CP PICS/GUAR.jpg"; // New image path
     txt4.textContent = "Guar";

     img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
     txt5.textContent = "Ajwain";
      
     img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt6.textContent = "Mustard";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/musk.jpg"; // New image path
     txt4.textContent = "Muskmelon";

    img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
    txt5.textContent = "Rice/Paddy";
      
    img6.src = "TP CP PICS/rose1.jpg"; // New image path
    txt6.textContent = "Rose";
    }

  }else if( Soil == -7){     //NO DATA YELLOW SOIL I WILL SHARE ....
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt4.textContent = "Cotton";

     img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
    txt5.textContent = "Chillies";
      
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";

    }
    if(SS==107){
      img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
      txt5.textContent = "Groundnut";
        
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";

     img5.src = "TP CP PICS/marigold1.jpg"; // New image path
     txt5.textContent = "Marigold";
      
     img6.src = "TP CP PICS/guava.jpg"; // New image path
     txt6.textContent = "Guava";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";

    img5.src = "TP CP PICS/musk.jpg"; // New image path
    txt5.textContent = "Muskmelon";
      
    img6.src = "TP CP PICS/ash gourd3.jpg"; // New image path
    txt6.textContent = "Ash Gourd";
    }

  }else if( Soil == -8){
    if(SS==152){
     img3.src = "TP CP PICS/Coffee.png"; // New image path
     txt3.textContent = "Coffee";
     
     img4.src = "TP CP PICS/gin.jpg"; // New image path
     txt4.textContent = "Ginger";

     img5.src = "TP CP PICS/Tea1.jpg"; // New image path
      txt5.textContent = "Tea";
      
      img6.src = "TP CP PICS/banana.jpg"; // New image path
      txt6.textContent = "Banana";

    }
    if(SS==107){
     img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt3.textContent = "Turmeric";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";

     img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
     txt5.textContent = "Dahlia";
      
     img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt6.textContent = "Turmeric";
    }
    if(SS==161){
     img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
     txt3.textContent = "Pumpkin";
     
     img4.src = "TP CP PICS/spinach3.jpg"; // New image path
     txt4.textContent = "Spinach";

    img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
    txt5.textContent = "Ridge Gourd";
      
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
    }

  }








}else if(SD === "Arunachal Pradesh"){

    if( Soil == -1){ 
      if(SS==152){
       img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
       txt3.textContent = "Rice/Paddy";
       
       img4.src = "TP CP PICS/gin2.jpg"; // New image path
       txt4.textContent = "Ginger";
  
       img5.src = "TP CP PICS/banana (2).jpg"; // New image path
        txt5.textContent = "Banana";
        
        img6.src = "TP CP PICS/ricepaddy.jpg"; // New image path
        txt6.textContent = "Rice";
  
      }
      if(SS==107){
       img3.src = "TP CP PICS/mustard seeds1.jpg"; // New image path
       txt3.textContent = "Mustard";
       
       img4.src = "TP CP PICS/orange.jpg"; // New image path
       txt4.textContent = "Orange";
  
       img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
       txt5.textContent = "Cauliflower";
        
       img6.src = "TP CP PICS/gin2.jpg"; // New image path
       txt6.textContent = "Ginger";
      }
      if(SS==161){
       img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
       txt3.textContent = "Cucumber";
       
       img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
       txt4.textContent = "Tomato";
  
      img5.src = "TP CP PICS/pineapple.jpg"; // New image path
      txt5.textContent = "Pineapple";
        
      img6.src = "TP CP PICS/maize.jpg"; // New image path
      txt6.textContent = "Maize";
      }
  
    }else if( Soil == -2){
     if(SS==152){
      img3.src = "TP CP PICS/cotton1.jpg"; // New image path
      txt3.textContent = "cotton";
      
      img4.src = "TP CP PICS/Pineapple.jpg"; // New image path
      txt4.textContent = "Pineapple";

      img5.src = "TP CP PICS/cotton1.jpg"; // New image path
      txt5.textContent = "Cotton";
      
      img6.src = "TP CP PICS/papaya (2).jpg"; // New image path
      txt6.textContent = "Papaya";
     }
     if(SS==107){
      img3.src = "TP CP PICS/Pineapple.jpg"; // New image path
      txt3.textContent = "pineapple";
      
      img4.src = "TP CP PICS/carrot1.jpg"; // New image path
      txt4.textContent = "carrot";

      img5.src = "TP CP PICS/radish3.jpg"; // New image path
      txt5.textContent = "Radish";
      
      img6.src = "TP CP PICS/turmaric3.jpg"; // New image path
      txt6.textContent = "Turmeric";
     }
     if(SS==161){
      img3.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
      txt3.textContent = "Tomato";
      
      img4.src = "TP CP PICS/sesame1.jpg"; // New image path
      txt4.textContent = "Sesame";

      img5.src = "TP CP PICS/groundnut.jpg"; // New image path
      txt5.textContent = "Groundnut";
      
      img6.src = "TP CP PICS/watermelon.jpg"; // New image path
      txt6.textContent = "Watermelon";
     }

   }else if( Soil == -3){
    if(SS==152){
     img3.src = "TP CP PICS/maize.jpg"; // New image path
     txt3.textContent = "Maize";
     
     img4.src = "TP CP PICS/pineapple.jpg"; // New image path
     txt4.textContent = "Pineapple";

     img5.src = "TP CP PICS/pineapple.jpg"; // New image path
      txt5.textContent = "Pineapple";
      
      img6.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
      txt6.textContent = "Millets";

    }
    if(SS==107){
     img3.src = "TP CP PICS/soyabean.jpg"; // New image path
     txt3.textContent = "Soyabean";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";

     img5.src = "TP CP PICS/blackpepper (2).jpg"; // New image path
     txt5.textContent = "Blackpepper";
      
     img6.src = "TP CP PICS/marigold (2).jpg"; // New image path
     txt6.textContent = "Marigold";
    }
    if(SS==161){
     img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
     txt3.textContent = "Pumpkin";
     
     img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
     txt4.textContent = "Brinjal";

    img5.src = "TP CP PICS/guava.jpg"; // New image path
    txt5.textContent = "Guava";
      
    img6.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt6.textContent = "Sesame";
    }

  }else if( Soil == -4){
    if(SS==152){
     img3.src = "TP CP PICS/pine1.jpg"; // New image path
     txt3.textContent = "Pineapple";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";

     img5.src = "TP CP PICS/Tea1.jpg"; // New image path
      txt5.textContent = "Tea";
      
      img6.src = "TP CP PICS/orange (2).jpg"; // New image path
      txt6.textContent = "Orange";

    }
    if(SS==107){
     img3.src = "TP CP PICS/longpepper.jpg"; // New image path
     txt3.textContent = "Pepper";
     
     img4.src = "TP CP PICS/maize.jpg"; // New image path
     txt4.textContent = "Maize";

     img5.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt5.textContent = "Cardamom";
      
     img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
     txt6.textContent = "Jasmine";
    }
    if(SS==161){
     img3.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
     txt3.textContent = "Brinjal";
     
     img4.src = "TP CP PICS/beans3.jpg"; // New image path
     txt4.textContent = "Beans";

    img5.src = "TP CP PICS/mango1 (2).jpg"; // New image path
    txt5.textContent = "Mango";
      
    img6.src = "TP CP PICS/ridge gourd1.jpg"; // New image path
    txt6.textContent = "Ridge gourd";
    }

  }else if( Soil == -5){
    if(SS==152){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "wheat";
     
     img4.src = "TP CP PICS/applebyme.jpg"; // New image path
     txt4.textContent = "Apple";

     img5.src = "TP CP PICS/applebyme.jpg"; // New image path
      txt5.textContent = "Apple";
      
      img6.src = "TP CP PICS/Tea1.jpg"; // New image path
      txt6.textContent = "Tea";

    }
    if(SS==107){
     img3.src = "TP CP PICS/plum.jpg"; // New image path
     txt3.textContent = "Plum";
     
     img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
     txt4.textContent = "Barley";

     img5.src = "TP CP PICS/dahlia.jpg"; // New image path
     txt5.textContent = "Dahlia";
      
     img6.src = "TP CP PICS/clov3.jpg"; // New image path
     txt6.textContent = "Clove";
    }
    if(SS==161){
     img3.src = "TP CP PICS/radish3.jpg"; // New image path
     txt3.textContent = "Radish";
     
     img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
     txt4.textContent = "Cabbage";

    img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
    txt5.textContent = "Pumpkin";
      
    img6.src = "TP CP PICS/lily.jpg"; // New image path
    txt6.textContent = "Lily";
    }

  }else if( Soil == -6){
    if(SS==152){
     img3.src = "TP CP PICS/bajra.jpg"; // New image path
     txt3.textContent = "Bajra";
     
     img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
     txt4.textContent = "Date Palm";

     img5.src = "TP CP PICS/bottle gourd1.jpg"; // New image path
      txt5.textContent = "Bottle Gourd";
      
      img6.src = "TP CP PICS/pomegranate.jpg"; // New image path
      txt6.textContent = "Pomegranate";

    }
    if(SS==107){
     img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt3.textContent = "Mustard";
     
     img4.src = "TP CP PICS/GUAR.jpg"; // New image path
     txt4.textContent = "Guar";

     img5.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt5.textContent = "Mustard";
      
     img6.src = "TP CP PICS/fennel.jpg"; // New image path
     txt6.textContent = "Fennel";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/musk.jpg"; // New image path
     txt4.textContent = "Muskmelon";

    img5.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt5.textContent = "Sesame";
      
    img6.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt6.textContent = "Dates";
    }

  }else if( Soil == -7){     //NO DATA YELLOW SOIL I WILL SHARE ....
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/soyabean.jpg"; // New image path
     txt4.textContent = "Soyabean";

     img5.src = "TP CP PICS/ginger1.jpg"; // New image path
    txt5.textContent = "Ginger";
      
    img6.src = "TP CP PICS/orange (2).jpg"; // New image path
    txt6.textContent = "Orange";

    }
    if(SS==107){
      img5.src = "TP CP PICS/potato1.jpg"; // New image path
      txt5.textContent = "Potato";
        
      img6.src = "TP CP PICS/mustard seeds1.jpg"; // New image path
      txt6.textContent = "Mustard";

     img5.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt5.textContent = "Kiwi";
      
     img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
     txt6.textContent = "Cabbage";
    }
    if(SS==161){
     img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
     txt3.textContent = "Pumpkin";
     
     img4.src = "TP CP PICS/bottle gourd1.jpg"; // New image path
     txt4.textContent = "Bottle Gourd";

    img5.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt5.textContent = "Tomato";
      
    img6.src = "TP CP PICS/red chilli1.jpg"; // New image path
    txt6.textContent = "Chilli";
    }

  }else if( Soil == -8){
    if(SS==152){
     img3.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt3.textContent = "Cardamom";
     
     img4.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt4.textContent = "Kiwi";

     img5.src = "TP CP PICS/Tea1.jpg"; // New image path
      txt5.textContent = "Tea";
      
      img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
      txt6.textContent = "Jackfruit";

    }
    if(SS==107){
     img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt3.textContent = "Turmeric";
     
     img4.src = "TP CP PICS/pear.jpg"; // New image path
     txt4.textContent = "Pear";

     img5.src = "TP CP PICS/ginger1.jpg"; // New image path
     txt5.textContent = "Ginger";
      
     img6.src = "TP CP PICS/spinach3.jpg"; // New image path
     txt6.textContent = "Spinach";
    }
    if(SS==161){
     img3.src = "TP CP PICS/bitter gourd1.jpg"; // New image path
     txt3.textContent = "Bitter Gourd";
     
     img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
     txt4.textContent = "Capsicum";

    img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
    txt5.textContent = "Pumpkin";
      
    img6.src = "TP CP PICS/kiwi.jpg"; // New image path
    txt6.textContent = "Kiwi";
    }

  }

  




}else if(SD === "Assam"){

  if( Soil == -1){
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice";
     
     img4.src = "TP CP PICS/jute.jpg"; // New image path
     txt4.textContent = "Jute";

     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/turmaric3.jpg"; // New image path
      txt6.textContent = "Turmeric";

    }
    if(SS==107){
     img3.src = "TP CP PICS/mustard seeds1.jpg"; // New image path
     txt3.textContent = "Mustard";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";

     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/banana.jpg"; // New image path
     txt6.textContent = "Banana";
    }
    if(SS==161){
     img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt3.textContent = "Cucumber";
     
     img4.src = "TP CP PICS/pumpkin1.jpg"; // New image path
     txt4.textContent = "Pumpkin";

    img5.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt5.textContent = "Pineapple";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }

  }else if( Soil == -2){
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "cotton";
    
    img4.src = "TP CP PICS/Pineapple.jpg"; // New image path
    txt4.textContent = "Pineapple";

    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya (2).jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/Pineapple.jpg"; // New image path
    txt3.textContent = "pineapple";
    
    img4.src = "TP CP PICS/carrot1.jpg"; // New image path
    txt4.textContent = "carrot";

    img5.src = "TP CP PICS/coriander.jpg"; // New image path
    txt5.textContent = "Coriander";
    
    img6.src = "TP CP PICS/onion1.jpg"; // New image path
    txt6.textContent = "Onion";
   }
   if(SS==161){
    img3.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt3.textContent = "Tomato";
    
    img4.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt4.textContent = "Sesame";

    img5.src = "TP CP PICS/groundnut.jpg"; // New image path
    txt5.textContent = "Groundnut";
    
    img6.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt6.textContent = "Watermelon";
   }

 }else if( Soil == -3){
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/pineapple.jpg"; // New image path
   txt4.textContent = "Pineapple";

   img5.src = "TP CP PICS/blackpepper (2).jpg"; // New image path
    txt5.textContent = "Blackpepper";
    
    img6.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
    txt6.textContent = "Millets";

  }
  if(SS==107){
   img3.src = "TP CP PICS/potato1.jpg"; // New image path
   txt3.textContent = "Potato";
   
   img4.src = "TP CP PICS/orange (2).jpg"; // New image path
   txt4.textContent = "Orange";

   img5.src = "TP CP PICS/radish1.jpg"; // New image path
   txt5.textContent = "Radish";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd1.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";

  img5.src = "TP CP PICS/mango.jpg"; // New image path
  txt5.textContent = "Mango";
    
  img6.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt6.textContent = "Sesame";
  }

}else if( Soil == -4){
  if(SS==152){
   img3.src = "TP CP PICS/pine1.jpg"; // New image path
   txt3.textContent = "Pineapple";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";

   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/orange (2).jpg"; // New image path
    txt6.textContent = "Orange";

  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";

   img5.src = "TP CP PICS/chrysanthemum (2).jpg"; // New image path
   txt5.textContent = "Chrysanthemum";
    
   img6.src = "TP CP PICS/ginger.jpg"; // New image path
   txt6.textContent = "Ginger";
  }
  if(SS==161){
   img3.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt3.textContent = "Brinjal";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";

  img5.src = "TP CP PICS/papaya (2).jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/ridge gourd1.jpg"; // New image path
  txt6.textContent = "Ridge gourd";
  }

}else if( Soil == -5){
  if(SS==152){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/lemon (2).jpg"; // New image path
   txt4.textContent = "Lemon";

   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";

  }
  if(SS==107){
   img3.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt3.textContent = "Barley";
   
   img4.src = "TP CP PICS/pear.jpg"; // New image path
   txt4.textContent = "Pear";

   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/peas1.jpg"; // New image path
   txt6.textContent = "Peas";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";

  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/Kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }

}else if( Soil == -6){
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";

   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/cluster beans1.jpg"; // New image path
    txt6.textContent = "Cluster Beans";

  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";

   img5.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt5.textContent = "Mustard";
    
   img6.src = "TP CP PICS/ajwain.jpg"; // New image path
   txt6.textContent = "Ajwain";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";

  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig (2).jpg"; // New image path
  txt6.textContent = "Fig";
  }

}else if( Soil == -7){     //NO DATA YELLOW SOIL I WILL SHARE ....
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/jute.jpg"; // New image path
   txt4.textContent = "Jute";

   img5.src = "TP CP PICS/AERACANUT.jpg"; // New image path
  txt5.textContent = "Arecanut";
    
  img6.src = "TP CP PICS/Tea1.jpg"; // New image path
  txt6.textContent = "Tea";

  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";

   img5.src = "TP CP PICS/turmaric3.jpg"; // New image path
   txt5.textContent = "Turmeric";
    
   img6.src = "TP CP PICS/Banana.jpg"; // New image path
   txt6.textContent = "Banana";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber1.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/sweetcorn.jpg"; // New image path
   txt4.textContent = "Sweet Corn";

  img5.src = "TP CP PICS/pineapple.jpg"; // New image path
  txt5.textContent = "Pineapple";
    
  img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
  txt6.textContent = "Jackfruit";
  }

}else if( Soil == -8){
  if(SS==152){
   img3.src = "TP CP PICS/turmaric3.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/AERACANUT.jpg"; // New image path
   txt4.textContent = "Arecanut";

   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";

  }
  if(SS==107){
   img3.src = "TP CP PICS/ginger.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/papaya (2).jpg"; // New image path
   txt4.textContent = "Papaya";

   img5.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/turmaric3.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
   txt4.textContent = "Tomato";

  img5.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt5.textContent = "Rubber";
    
  img6.src = "TP CP PICS/guava (2).jpg"; // New image path
  txt6.textContent = "Guava";
  }

}



}else if(SD === "Bihar"){

  if( Soil == -1){  //ALLUVIAL SOIL
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice";
     
     img4.src = "TP CP PICS/Maize.jpg"; // New image path
     txt4.textContent = "Maize";

     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/turmaric3.jpg"; // New image path
      txt6.textContent = "Turmeric";

    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/lychee.jpg"; // New image path
     txt4.textContent = "Lychee";

     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/banana.jpg"; // New image path
     txt6.textContent = "Banana";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon.jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
     txt4.textContent = "Okra";

    img5.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt5.textContent = "Pineapple";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }

  }else if( Soil == -2){  // BLACK SOIL
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "cotton";
    
    img4.src = "TP CP PICS/Papaya.jpg"; // New image path
    txt4.textContent = "Papaya";

    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt6.textContent = "Pineapple";
   }
   if(SS==107){
    img3.src = "TP CP PICS/Pineapple.jpg"; // New image path
    txt3.textContent = "pineapple";
    
    img4.src = "TP CP PICS/carrot1.jpg"; // New image path
    txt4.textContent = "carrot";

    img5.src = "TP CP PICS/coriander.jpg"; // New image path
    txt5.textContent = "Coriander";
    
    img6.src = "TP CP PICS/onion1.jpg"; // New image path
    txt6.textContent = "Onion";
   }
   if(SS==161){
    img3.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt3.textContent = "Tomato";
    
    img4.src = "TP CP PICS/beans1.jpg"; // New image path
    txt4.textContent = "Beans";

    img5.src = "TP CP PICS/groundnut.jpg"; // New image path
    txt5.textContent = "Groundnut";
    
    img6.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt6.textContent = "Watermelon";
   }

 }else if( Soil == -3){  // RED SOIL
  if(SS==152){
   img3.src = "TP CP PICS/groundnut.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango.jpg"; // New image path
   txt4.textContent = "Mango";

   img5.src = "TP CP PICS/blackpepper (2).jpg"; // New image path
    txt5.textContent = "Blackpepper";
    
    img6.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
    txt6.textContent = "Millets";

  }
  if(SS==107){
   img3.src = "TP CP PICS/lentils.jpg"; // New image path
   txt3.textContent = "Lentils";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";

   img5.src = "TP CP PICS/radish1.jpg"; // New image path
   txt5.textContent = "Radish";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";

  img5.src = "TP CP PICS/mango.jpg"; // New image path
  txt5.textContent = "Mango";
    
  img6.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt6.textContent = "Sesame";
  }

}else if( Soil == -4){  // LATERITE SOIL
  if(SS==152){
   img3.src = "TP CP PICS/pine1.jpg"; // New image path
   txt3.textContent = "Pineapple";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";

   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/orange (2).jpg"; // New image path
    txt6.textContent = "Orange";

  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";

   img5.src = "TP CP PICS/chrysanthemum (2).jpg"; // New image path
   txt5.textContent = "Chrysanthemum";
    
   img6.src = "TP CP PICS/ginger.jpg"; // New image path
   txt6.textContent = "Ginger";
  }
  if(SS==161){
   img3.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt3.textContent = "Brinjal";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";

  img5.src = "TP CP PICS/papaya (2).jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/ridge gourd1.jpg"; // New image path
  txt6.textContent = "Ridge gourd";
  }

}else if( Soil == -5){  //MOUNTAIN SOIL
  if(SS==152){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/lemon (2).jpg"; // New image path
   txt4.textContent = "Lemon";

   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";

  }
  if(SS==107){
   img3.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt3.textContent = "Barley";
   
   img4.src = "TP CP PICS/pear.jpg"; // New image path
   txt4.textContent = "Pear";

   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/peas1.jpg"; // New image path
   txt6.textContent = "Peas";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";

  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/Kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }

}else if( Soil == -6){  // ARID, DESERT SOIL
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";

   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/cluster beans1.jpg"; // New image path
    txt6.textContent = "Cluster Beans";

  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";

   img5.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt5.textContent = "Mustard";
    
   img6.src = "TP CP PICS/ajwain.jpg"; // New image path
   txt6.textContent = "Ajwain";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";

  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig (2).jpg"; // New image path
  txt6.textContent = "Fig";
  }

}else if( Soil == -7){     // YELLOW  SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";

   img5.src = "TP CP PICS/AERACANUT.jpg"; // New image path
  txt5.textContent = "Arecanut";
    
  img6.src = "TP CP PICS/Tea1.jpg"; // New image path
  txt6.textContent = "Tea";

  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/lentils.jpg"; // New image path
    txt6.textContent = "Lentils";

   img5.src = "TP CP PICS/turmaric3.jpg"; // New image path
   txt5.textContent = "Turmeric";
    
   img6.src = "TP CP PICS/Banana.jpg"; // New image path
   txt6.textContent = "Banana";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
   txt4.textContent = "Okra";

  img5.src = "TP CP PICS/pineapple.jpg"; // New image path
  txt5.textContent = "Pineapple";
    
  img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
  txt6.textContent = "Jackfruit";
  }

}else if( Soil == -8){ //FOREST SOIL
  if(SS==152){
   img3.src = "TP CP PICS/turmaric3.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";

   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";

  }
  if(SS==107){
   img3.src = "TP CP PICS/ginger.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/papaya (2).jpg"; // New image path
   txt4.textContent = "Papaya";

   img5.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/turmaric3.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt4.textContent = "Pumpkin";

  img5.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt5.textContent = "Rubber";
    
  img6.src = "TP CP PICS/guava (2).jpg"; // New image path
  txt6.textContent = "Guava";
  }

}




}else if(SD === "Chhattisgarh"){

  if( Soil == -1){ //ALLUVIAL SOIL  
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice";
     
     img4.src = "TP CP PICS/sugercane.jpg"; // New image path
     txt4.textContent = "Sugarcane";

     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/banana.jpg"; // New image path
      txt6.textContent = "Banana";

    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";

     img5.src = "TP CP PICS/Tomato.jpg"; // New image path
     txt5.textContent = "Tomato";
      
     img6.src = "TP CP PICS/turmaric3.jpg"; // New image path
     txt6.textContent = "Turmeric";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon.jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
     txt4.textContent = "Okra";

    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }

  }else if( Soil == -2){  //BLACK SOIL
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";

    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya (2).jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/peas1.jpg"; // New image path
    txt3.textContent = "Chickpea";
    
    img4.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt4.textContent = "Sunflower";

    img5.src = "TP CP PICS/garlic.jpg"; // New image path
    txt5.textContent = "Garlic";
    
    img6.src = "TP CP PICS/onion1.jpg"; // New image path
    txt6.textContent = "Onion";
   }
   if(SS==161){
    img3.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt3.textContent = "Tomato";
    
    img4.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt4.textContent = "Sesame";

    img5.src = "TP CP PICS/groundnut.jpg"; // New image path
    txt5.textContent = "Groundnut";
    
    img6.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt6.textContent = "Watermelon";
   }

 }else if( Soil == -3){  //RED SOIL
  if(SS==152){
   img3.src = "TP CP PICS/groundnut.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango.jpg"; // New image path
   txt4.textContent = "Mango";

   img5.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
    txt5.textContent = "Brinjal";
    
    img6.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
    txt6.textContent = "Millets";

  }
  if(SS==107){
   img3.src = "TP CP PICS/lentils.jpg"; // New image path
   txt3.textContent = "Lentils";
   
   img4.src = "TP CP PICS/marigold.jpg"; // New image path
   txt4.textContent = "Marigold";

   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/rose.jpg"; // New image path
   txt6.textContent = "Rose";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";

  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/guava (2).jpg"; // New image path
  txt6.textContent = "Guava";
  }

}else if( Soil == -4){ // LATERITE SOIL
  if(SS==152){
   img3.src = "TP CP PICS/pine1.jpg"; // New image path
   txt3.textContent = "Pineapple";
   
   img4.src = "TP CP PICS/cashew.jpg"; // New image path
   txt4.textContent = "Cashew";

   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/mango.jpg"; // New image path
    txt6.textContent = "Mango";

  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";

   img5.src = "TP CP PICS/marigold.jpg"; // New image path
   txt5.textContent = "Marigold";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "BitterGourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";

  img5.src = "TP CP PICS/pine1.jpg"; // New image path
  txt5.textContent = "Pineapple";
    
  img6.src = "TP CP PICS/ridge gourd1.jpg"; // New image path
  txt6.textContent = "Ridge gourd";
  }

}else if( Soil == -5){ //MOUNTAIN SOIL
  if(SS==152){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/lemon (2).jpg"; // New image path
   txt4.textContent = "Lemon";

   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";

  }
  if(SS==107){
   img3.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt3.textContent = "Barley";
   
   img4.src = "TP CP PICS/pear.jpg"; // New image path
   txt4.textContent = "Pear";

   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";

  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/Kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }

}else if( Soil == -6){ //ARID, DESERT SOIL
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";

   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottlegourd";

  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";

   img5.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt5.textContent = "Mustard";
    
   img6.src = "TP CP PICS/fennel.jpg"; // New image path
   txt6.textContent = "Fennel";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";

  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig (2).jpg"; // New image path
  txt6.textContent = "Fig";
  }

}else if( Soil == -7){     // YELLOW SOIL
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/sugercane.jpg"; // New image path
   txt4.textContent = "Sugarcane";

   img5.src = "TP CP PICS/AERACANUT.jpg"; // New image path
  txt5.textContent = "Arecanut";
    
  img6.src = "TP CP PICS/tamarind.jpg"; // New image path
  txt6.textContent = "Tamarind";

  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";

   img5.src = "TP CP PICS/sesame1.jpg"; // New image path
   txt5.textContent = "Sesame";
    
   img6.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt6.textContent = "Spinach";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber1.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/watermelon.jpg"; // New image path
   txt4.textContent = "Watermelon";

  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/bottle gourd1.jpg"; // New image path
  txt6.textContent = "BottleGourd";
  }

}else if( Soil == -8){ // FOREST SOIL
  if(SS==152){
   img3.src = "TP CP PICS/turmaric3.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";

   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";

  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";

   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/turmaric3.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt4.textContent = "Pumpkin";

  img5.src = "TP CP PICS/cashew.jpg"; // New image path
  txt5.textContent = "Cashew";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
}
}else if(SD === "Goa"){
 if( Soil == -1){ // ALLUVIAL SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
    txt3.textContent = "Rice/Paddy";
    
    img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
    txt4.textContent = "Turmeric";

    img5.src = "TP CP PICS/mango5.jpg"; // New image path
     txt5.textContent = "Mango";
     
     img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt6.textContent = "Turmeric";

   }
   if(SS==107){
    img3.src = "TP CP PICS/corn4.jpg"; // New image path
    txt3.textContent = "Maize";
    
    img4.src = "TP CP PICS/banana.jpg"; // New image path
    txt4.textContent = "Banana";

    img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
    txt5.textContent = "Cauliflower";
     
    img6.src = "TP CP PICS/rose1.jpg"; // New image path
    txt6.textContent = "Rose";
   }
   if(SS==161){
    img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
    txt3.textContent = "Watermelon";
    
    img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
    txt4.textContent = "Okra";

   img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt5.textContent = "Cucumber";
     
   img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt6.textContent = "Groundnut";
   }

 }else if( Soil == -2){ // BLACK SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt3.textContent = "Cotton";
   
   img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
   txt4.textContent = "Chillies";

   img5.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt5.textContent = "Cotton";
   
   img6.src = "TP CP PICS/chillis1.jpg"; // New image path
   txt6.textContent = "Red Chilli";
  }
  if(SS==107){
   img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
   txt3.textContent = "Sunflower";
   
   img4.src = "TP CP PICS/coriander.jpg"; // New image path
   txt4.textContent = "Coriander";

   img5.src = "TP CP PICS/onion3.jpg"; // New image path
   txt5.textContent = "Onion";
   
   img6.src = "TP CP PICS/custard.jpg"; // New image path
   txt6.textContent = "Custard Apple";
  }
  if(SS==161){
   img3.src = "TP CP PICS/sesame1.jpg"; // New image path
   txt3.textContent = "Sesame";
   
   img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
   txt4.textContent = "Tomato";

   img5.src = "TP CP PICS/watermelon.jpg"; // New image path
   txt5.textContent = "Watermelon";
   
   img6.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt6.textContent = "Marigold";
  }

}else if( Soil == -3){  //RED SOIL 
 if(SS==152){
  img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
  txt3.textContent = "Groundnut";
  
  img4.src = "TP CP PICS/mango5.jpg"; // New image path
  txt4.textContent = "Mango";

  img5.src = "TP CP PICS/mango5.jpg"; // New image path
   txt5.textContent = "Beans";
   
   img6.src = "TP CP PICS/pine.jpg"; // New image path
   txt6.textContent = "Pineapple";

 }
 if(SS==107){
  img3.src = "TP CP PICS/jowar.jpg"; // New image path
  txt3.textContent = "Sorghum/Jowar";
  
  img4.src = "TP CP PICS/marigold1.jpg"; // New image path
  txt4.textContent = "Marigold";

  img5.src = "TP CP PICS/gin.jpg"; // New image path
  txt5.textContent = "Ginger";
   
  img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
  txt6.textContent = "Snapdragon";
 }
 if(SS==161){
  img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
  txt3.textContent = "Cucumber";
  
  img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
  txt4.textContent = "Brinjal";

 img5.src = "TP CP PICS/papaya.jpg"; // New image path
 txt5.textContent = "Papaya";
   
 img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
 txt6.textContent = "Groundnut";
 }

}else if( Soil == -4){ // LATERITE SOIL 
 if(SS==152){
  img3.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt3.textContent = "Cashew";
  
  img4.src = "TP CP PICS/pine.jpg"; // New image path
  txt4.textContent = "Pineapple";

  img5.src = "TP CP PICS/mango5.jpg"; // New image path
   txt5.textContent = "Mango";
   
   img6.src = "TP CP PICS/Coffee.png"; // New image path
   txt6.textContent = "Coffee";

 }
 if(SS==107){
  img3.src = "TP CP PICS/longpepper.jpg"; // New image path
  txt3.textContent = "Pepper";
  
  img4.src = "TP CP PICS/papaya.jpg"; // New image path
  txt4.textContent = "Papaya";

  img5.src = "TP CP PICS/cloves.jpg"; // New image path
  txt5.textContent = "Clove";
   
  img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
  txt6.textContent = "Jasmine";
 }
 if(SS==161){
  img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
  txt3.textContent = "Bitter Gourd";
  
  img4.src = "TP CP PICS/beans3.jpg"; // New image path
  txt4.textContent = "Beans";

 img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
 txt5.textContent = "Ridge Gourd";
   
 img6.src = "TP CP PICS/cashew10.jpg"; // New image path
 txt6.textContent = "Cashew";
 }

}else if( Soil == -5){ // MOUNTAIN SOIL 
 if(SS==152){
  img3.src = "TP CP PICS/wheat.jpg"; // New image path
  txt3.textContent = "wheat";
  
  img4.src = "TP CP PICS/applebyme.jpg"; // New image path
  txt4.textContent = "Apple";

  img5.src = "TP CP PICS/applebyme.jpg"; // New image path
   txt5.textContent = "Apple";
   
   img6.src = "TP CP PICS/peas1.jpg"; // New image path
   txt6.textContent = "Peas";

 }
 if(SS==107){
  img3.src = "TP CP PICS/plum.jpg"; // New image path
  txt3.textContent = "Plum";
  
  img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
  txt4.textContent = "Barley";

  img5.src = "TP CP PICS/cardamom.jpg"; // New image path
  txt5.textContent = "Cardamom";
   
  img6.src = "TP CP PICS/lily.jpg"; // New image path
  txt6.textContent = "Lily";
 }
 if(SS==161){
  img3.src = "TP CP PICS/radish3.jpg"; // New image path
  txt3.textContent = "Radish";
  
  img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
  txt4.textContent = "Cabbage";

 img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
 txt5.textContent = "Pumpkin";
   
 img6.src = "TP CP PICS/grapes.jpg"; // New image path
 txt6.textContent = "Grapes";
 }

}else if( Soil == -6){ // ARID, DESERT SOIL 
 if(SS==152){
  img3.src = "TP CP PICS/bajra.jpg"; // New image path
  txt3.textContent = "Bajra";
  
  img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
  txt4.textContent = "Date Palm";

  img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt5.textContent = "Date Palm";
   
   img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
   txt6.textContent = "Bottle Gourd";

 }
 if(SS==107){
  img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
  txt3.textContent = "Mustard";
  
  img4.src = "TP CP PICS/GUAR.jpg"; // New image path
  txt4.textContent = "Guar";

  img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
  txt5.textContent = "Ajwain";
   
  img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
  txt6.textContent = "Mustard";
 }
 if(SS==161){
  img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
  txt3.textContent = "Watermelon";
  
  img4.src = "TP CP PICS/musk.jpg"; // New image path
  txt4.textContent = "Muskmelon";

 img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
 txt5.textContent = "Rice/Paddy";
   
 img6.src = "TP CP PICS/rose1.jpg"; // New image path
 txt6.textContent = "Rose";
 }

}else if( Soil == -7){   // YELLOW SOIL 
 if(SS==152){
  img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt3.textContent = "Rice/Paddy";
  
  img4.src = "TP CP PICS/cotton1.jpg"; // New image path
  txt4.textContent = "Cotton";

  img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
 txt5.textContent = "Chillies";
   
 img6.src = "TP CP PICS/papaya.jpg"; // New image path
 txt6.textContent = "Papaya";

 }
 if(SS==107){
   img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt5.textContent = "Groundnut";
     
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";

  img5.src = "TP CP PICS/marigold1.jpg"; // New image path
  txt5.textContent = "Marigold";
   
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
 }
 if(SS==161){
  img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
  txt3.textContent = "Watermelon";
  
  img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
  txt4.textContent = "Cucumber";

 img5.src = "TP CP PICS/musk.jpg"; // New image path
 txt5.textContent = "Muskmelon";
   
 img6.src = "TP CP PICS/ash gourd3.jpg"; // New image path
 txt6.textContent = "Ash Gourd";
 }

}else if( Soil == -8){ // FOREST SOIL 
 if(SS==152){
  img3.src = "TP CP PICS/Coffee.png"; // New image path
  txt3.textContent = "Coffee";
  
  img4.src = "TP CP PICS/gin.jpg"; // New image path
  txt4.textContent = "Ginger";

  img5.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt5.textContent = "Tea";
   
   img6.src = "TP CP PICS/banana.jpg"; // New image path
   txt6.textContent = "Banana";

 }
 if(SS==107){
  img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt3.textContent = "Turmeric";
  
  img4.src = "TP CP PICS/banana.jpg"; // New image path
  txt4.textContent = "Banana";

  img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
  txt5.textContent = "Dahlia";
   
  img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt6.textContent = "Turmeric";
 }
 if(SS==161){
  img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt3.textContent = "Pumpkin";
  
  img4.src = "TP CP PICS/spinach3.jpg"; // New image path
  txt4.textContent = "Spinach";

 img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
 txt5.textContent = "Ridge Gourd";
   
 img6.src = "TP CP PICS/papaya.jpg"; // New image path
 txt6.textContent = "Papaya";
 }

}
}
else if(SD === "Gujarat"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/cotton.jpg"; // New image path
     txt3.textContent = "Cotton";
     
     img4.src = "TP CP PICS/groundnut2.jpg"; // New image path
     txt4.textContent = "Groundnut";
 
     img5.src = "TP CP PICS/cotton.jpg"; // New image path
      txt5.textContent = "Cotton";
      
      img6.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
      txt6.textContent = "Brinjal";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/cumin1 (2).jpg"; // New image path
     txt4.textContent = "Cumin";
 
     img5.src = "TP CP PICS/banana.jpg"; // New image path
     txt5.textContent = "Banana";
      
     img6.src = "TP CP PICS/garlic.jpg"; // New image path
     txt6.textContent = "Garlic";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/sesame1.jpg"; // New image path
     txt4.textContent = "Sesame";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt4.textContent = "Chickpea";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
    txt6.textContent = "Turmeric";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/mango5.jpg"; // New image path
   txt3.textContent = "Mango";
   
   img4.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt4.textContent = "Groundnut";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/jowar.jpg"; // New image path
   txt3.textContent = "Sorghum/Jowar";
   
   img4.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt4.textContent = "Marigold";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/guava.jpg"; // New image path
   txt6.textContent = "Guava";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango5.jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/cashew10.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
  txt5.textContent = "Bitter Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "wheat";
   
   img4.src = "TP CP PICS/applebyme.jpg"; // New image path
   txt4.textContent = "Apple";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/fennel.jpg"; // New image path
   txt5.textContent = "Fennel";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
      
    img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
    txt6.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/papaya.jpg"; // New image path
   txt5.textContent = "Papaya";
    
   img6.src = "TP CP PICS/onion1.jpg"; // New image path
   txt6.textContent = "Onion";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/watermelon.jpg"; // New image path
  txt6.textContent = "Watermelon";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/mango.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/rubber2.jpg"; // New image path
    txt5.textContent = "Rubber";
    
    img6.src = "TP CP PICS/jack.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/Coffee.png"; // New image path
  txt5.textContent = "Coffee";
    
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
  }
 
 }
 }
 else if(SD === "Haryana"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/sugercane.jpg"; // New image path
     txt4.textContent = "Sugarcane";
 
     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Mango";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt4.textContent = "Mustard";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/rose1.jpg"; // New image path
     txt6.textContent = "Rose";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
    txt4.textContent = "Chillies";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/coriander.jpg"; // New image path
    txt4.textContent = "Coriander";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/custard.jpg"; // New image path
    txt6.textContent = "Custard Apple";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/jowar.jpg"; // New image path
   txt3.textContent = "Sorghum/Jowar";
   
   img4.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt4.textContent = "Marigold";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
   txt6.textContent = "Snapdragon";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
  txt6.textContent = "Groundnut";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "wheat";
   
   img4.src = "TP CP PICS/applebyme.jpg"; // New image path
   txt4.textContent = "Apple";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
   txt4.textContent = "Bottle Gourd";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/bajra.jpg"; // New image path
   txt4.textContent = "Bajra";
 
   img5.src = "TP CP PICS/cotton.jpg"; // New image path
  txt5.textContent = "Cotton";
    
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt6.textContent = "Mustard";
 
   img5.src = "TP CP PICS/carrot1.jpg"; // New image path
   txt5.textContent = "Carrot";
    
   img6.src = "TP CP PICS/cauliflower3.jpg"; // New image path
   txt6.textContent = "Cauliflower";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
   txt4.textContent = "Okra";
 
  img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
  txt5.textContent = "Cucumber";
    
  img6.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt6.textContent = "Tomato";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }
 else if(SD === "Himachal Pradesh"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/maize.jpg"; // New image path
     txt4.textContent = "Maize";
 
     img5.src = "TP CP PICS/par1.jpg"; // New image path
      txt5.textContent = "Par";
      
      img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
      txt6.textContent = "Cabbage";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/barley2.jpg"; // New image path
     txt4.textContent = "Barley";
 
     img5.src = "TP CP PICS/wheat.jpg"; // New image path
     txt5.textContent = "Wheat";
      
     img6.src = "TP CP PICS/garlic.jpg"; // New image path
     txt6.textContent = "Garlic";
    }
    if(SS==161){
     img3.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
     txt3.textContent = "Capsicum";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/plum.jpg"; // New image path
    txt6.textContent = "Plum";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt3.textContent = "Soyabean";
    
    img4.src = "TP CP PICS/potato3.jpg"; // New image path
    txt4.textContent = "Potato";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
    txt6.textContent = "Brinjal";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/lentils.jpg"; // New image path
    txt4.textContent = "Lentils";
 
    img5.src = "TP CP PICS/coriander.jpg"; // New image path
    txt5.textContent = "Coriander";
    
    img6.src = "TP CP PICS/marigold.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
   if(SS==161){
    img3.src = "TP CP PICS/carrot1.jpg"; // New image path
    txt3.textContent = "Carrot";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/apple.jpg"; // New image path
   txt3.textContent = "Apple";
   
   img4.src = "TP CP PICS/peach1.jpg"; // New image path
   txt4.textContent = "Peach";
 
   img5.src = "TP CP PICS/peach1.jpg"; // New image path
    txt5.textContent = "Peach";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/peas1.jpg"; // New image path
   txt4.textContent = "Pea";
 
   img5.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt5.textContent = "Turmeric";
    
   img6.src = "TP CP PICS/CHRYSANTHEMUM.jpg"; // New image path
   txt6.textContent = "Chrysanthemum";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cauliflower3.jpg"; // New image path
   txt3.textContent = "Cauliflower";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/mango.jpg"; // New image path
  txt5.textContent = "Mango";
    
  img6.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt6.textContent = "Sesame";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/ginger.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/lychee.jpg"; // New image path
    txt5.textContent = "Lychee";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/potato3.jpg"; // New image path
   txt4.textContent = "Potato";
 
   img5.src = "TP CP PICS/ginger.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/pineapple.jpg"; // New image path
  txt6.textContent = "Pineapple";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt4.textContent = "Tea";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/cherry.jpg"; // New image path
    txt6.textContent = "Cherry";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/peas1.jpg"; // New image path
   txt4.textContent = "Pea";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/cloves.jpg"; // New image path
   txt6.textContent = "Clove";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/barley2.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/fennel.jpg"; // New image path
   txt5.textContent = "Fennel";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/fig.jpg"; // New image path
  txt5.textContent = "Fig";
    
  img6.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt6.textContent = "Sesame";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";
 
   img5.src = "TP CP PICS/apple.jpg"; // New image path
  txt5.textContent = "Apple";
    
  img6.src = "TP CP PICS/plum.jpg"; // New image path
  txt6.textContent = "Plum";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/barley2.jpg"; // New image path
    txt6.textContent = "Barley";
 
   img5.src = "TP CP PICS/peas1.jpg"; // New image path
   txt5.textContent = "Peas";
    
   img6.src = "TP CP PICS/potato1.jpg"; // New image path
   txt6.textContent = "Potato";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt3.textContent = "Tomato";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/strawberry.jpg"; // New image path
  txt5.textContent = "Strawberry";
    
  img6.src = "TP CP PICS/cherry.jpg"; // New image path
  txt6.textContent = "Cherry";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/apple.jpg"; // New image path
   txt3.textContent = "Apple";
   
   img4.src = "TP CP PICS/plum.jpg"; // New image path
   txt4.textContent = "Plum";
 
   img5.src = "TP CP PICS/apple.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/barley2.jpg"; // New image path
   txt3.textContent = "Barley";
   
   img4.src = "TP CP PICS/peas1.jpg"; // New image path
   txt4.textContent = "Pea";
 
   img5.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt5.textContent = "Jasmine";
    
   img6.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt6.textContent = "Spinach";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt3.textContent = "Cabbage";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/guava.jpg"; // New image path
  txt5.textContent = "Guava";
    
  img6.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt6.textContent = "Rubber";
  }
 
 }
 }
 else if(SD === "Jharkhand"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/sugercane.jpg"; // New image path
     txt4.textContent = "Sugarcane";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
      txt6.textContent = "Okra";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/potato1.jpg"; // New image path
     txt4.textContent = "Potato";
 
     img5.src = "TP CP PICS/turmaric3.jpg"; // New image path
     txt5.textContent = "Turmeric";
      
     img6.src = "TP CP PICS/guava.jpg"; // New image path
     txt6.textContent = "Guava";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt4.textContent = "Chickpea";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/lentils.jpg"; // New image path
   txt3.textContent = "Lentils";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango.jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/cashew10.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt3.textContent = "Brinjal";
   
   img4.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt4.textContent = "Pumpkin";
 
  img5.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
  txt5.textContent = "Bitter Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/Coffee.png"; // New image path
   txt4.textContent = "Coffee";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/lentils.jpg"; // New image path
   txt4.textContent = "Lentils";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/sesame1.jpg"; // New image path
   txt4.textContent = "Sesame";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/cluster beans1.jpg"; // New image path
    txt6.textContent = "Cluster Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt4.textContent = "Ridge Gourd";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/pigeon pea.png"; // New image path
   txt4.textContent = "Pigeon Pea";
 
   img5.src = "TP CP PICS/jackfruit.jpg"; // New image path
  txt5.textContent = "Jackfruit";
    
  img6.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt6.textContent = "Tomato";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt6.textContent = "Mustard";
 
   img5.src = "TP CP PICS/potato1.jpg"; // New image path
   txt5.textContent = "Potato";
    
   img6.src = "TP CP PICS/peas1.jpg"; // New image path
   txt6.textContent = "Green Peas";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
  txt6.textContent = "Okra";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt5.textContent = "Rubber";
    
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
  }
 
 }
 }
 else if(SD === "Karnataka"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/sugercane.jpg"; // New image path
     txt4.textContent = "Sugarcane";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
      txt6.textContent = "Brinjal";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/RAGI.jpg"; // New image path
     txt4.textContent = "Ragi";
 
     img5.src = "TP CP PICS/guava.jpg"; // New image path
     txt5.textContent = "Guava";
      
     img6.src = "TP CP PICS/coriander.jpg"; // New image path
     txt6.textContent = "Coriander";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
     txt4.textContent = "Brinjal";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt4.textContent = "Chickpea";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/lentils.jpg"; // New image path
   txt3.textContent = "Lentils";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt4.textContent = "Pumpkin";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/cashew10.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/Coffee.png"; // New image path
   txt4.textContent = "Coffee";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/lentils.jpg"; // New image path
   txt4.textContent = "Lentils";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/lettuce.jpg"; // New image path
   txt4.textContent = "Lettuce";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/cluster beans1.jpg"; // New image path
    txt6.textContent = "Cluster beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengarm.jpg"; // New image path
   txt4.textContent = "Green Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/RAGI.jpg"; // New image path
   txt4.textContent = "Ragi";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
  txt5.textContent = "Coffee";
    
  img6.src = "TP CP PICS/longpepper.jpg"; // New image path
  txt6.textContent = "Pepper";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt6.textContent = "Sorghum";
 
   img5.src = "TP CP PICS/AERACANUT.jpg"; // New image path
   txt5.textContent = "Arecanut";
    
   img6.src = "TP CP PICS/chillis.jpg"; // New image path
   txt6.textContent = "Chillies";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt4.textContent = "Tomato";
 
  img5.src = "TP CP PICS/banana.jpg"; // New image path
  txt5.textContent = "Banana";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt3.textContent = "Brinjal";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt5.textContent = "Rubber";
    
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
  }
 
 }
 }
 else if(SD === "Kerala"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
      txt6.textContent = "Bitter Gourd";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt3.textContent = "Turmeric";
     
     img4.src = "TP CP PICS/gin.jpg"; // New image path
     txt4.textContent = "Ginger";
 
     img5.src = "TP CP PICS/banana.jpg"; // New image path
     txt5.textContent = "Banana";
      
     img6.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt6.textContent = "Cardamom";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/coconut.jpg"; // New image path
    txt3.textContent = "Coconut";
    
    img4.src = "TP CP PICS/Tapioca.jpg"; // New image path
    txt4.textContent = "Tapioca";
 
    img5.src = "TP CP PICS/coconut.jpg"; // New image path
    txt5.textContent = "Coconut";
    
    img6.src = "TP CP PICS/mango5.jpg"; // New image path
    txt6.textContent = "Mango";
   }
   if(SS==107){
    img3.src = "TP CP PICS/longpepper.jpg"; // New image path
    txt3.textContent = "Pepper";
    
    img4.src = "TP CP PICS/Coffee.png"; // New image path
    txt4.textContent = "Coffee";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/gin.jpg"; // New image path
    txt6.textContent = "Ginger";
   }
   if(SS==161){
    img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
    txt3.textContent = "Bitter Gourd";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/AERACANUT.jpg"; // New image path
   txt3.textContent = "Arecanut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/Tapioca.jpg"; // New image path
   txt5.textContent = "Tapioca";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/cashew.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/guava.jpg"; // New image path
   txt5.textContent = "Guava";
    
   img6.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt6.textContent = "Pepper";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/beans1.jpg"; // New image path
   txt4.textContent = "French Beans";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/pine.jpg"; // New image path
  txt6.textContent = "Pineapple";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/lychee.jpg"; // New image path
    txt5.textContent = "Lychee";
    
    img6.src = "TP CP PICS/spinach3.jpg"; // New image path
    txt6.textContent = "Spinach";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt5.textContent = "Turmeric";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
  txt6.textContent = "Jackfruit";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/Coffee.png"; // New image path
   txt4.textContent = "Coffee";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt4.textContent = "Cardamom";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Coconut";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
  txt5.textContent = "Cardamom";
    
  img6.src = "TP CP PICS/banana.jpg"; // New image path
  txt6.textContent = "Banana";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/pumpkin3.jpg"; // New image path
    txt6.textContent = "Pumpkin";
 
   img5.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt5.textContent = "Pepper";
    
   img6.src = "TP CP PICS/vanilla.png"; // New image path
   txt6.textContent = "Vanilla";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/pineapple.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
  img5.src = "TP CP PICS/mango5.jpg"; // New image path
  txt5.textContent = "Mango";
    
  img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
  txt6.textContent = "Jackfruit";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt3.textContent = "Cardamom";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt3.textContent = "Tomato";
   
   img4.src = "TP CP PICS/lettuce.jpg"; // New image path
   txt4.textContent = "Lettuce";
 
  img5.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt5.textContent = "Rubber";
    
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
  }
 
 }
 }
 else if(SD === "Madhya Pradesh"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt4.textContent = "Turmeric";
 
     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Mango";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/corn4.jpg"; // New image path
     txt3.textContent = "Maize";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/rose1.jpg"; // New image path
     txt6.textContent = "Rose";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
     txt4.textContent = "Okra";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
    txt4.textContent = "Chillies";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/coriander.jpg"; // New image path
    txt4.textContent = "Coriander";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/custard.jpg"; // New image path
    txt6.textContent = "Custard Apple";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/jowar.jpg"; // New image path
   txt3.textContent = "Sorghum/Jowar";
   
   img4.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt4.textContent = "Marigold";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
   txt6.textContent = "Snapdragon";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
  txt6.textContent = "Groundnut";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "wheat";
   
   img4.src = "TP CP PICS/applebyme.jpg"; // New image path
   txt4.textContent = "Apple";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
      
    img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
    txt6.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt5.textContent = "Marigold";
    
   img6.src = "TP CP PICS/guava.jpg"; // New image path
   txt6.textContent = "Guava";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/ash gourd3.jpg"; // New image path
  txt6.textContent = "Ash Gourd";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }
 else if(SD === "Maharashtra"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/sugercane.jpg"; // New image path
     txt4.textContent = "Sugarcane";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
      txt6.textContent = "Bitter Gourd";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt4.textContent = "Turmeric";
 
     img5.src = "TP CP PICS/guava.jpg"; // New image path
     txt5.textContent = "Guava";
      
     img6.src = "TP CP PICS/coriander.jpg"; // New image path
     txt6.textContent = "Coriander";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/Tomato.jpg"; // New image path
     txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt3.textContent = "Chickpea";
    
    img4.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt4.textContent = "Sunflower";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/lentils.jpg"; // New image path
   txt3.textContent = "Lentils";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt4.textContent = "Bitter Gourd";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/coconut1.jpg"; // New image path
   txt4.textContent = "Coconut";
 
   img5.src = "TP CP PICS/cashew10.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt3.textContent = "Brinjal";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "wheat";
   
   img4.src = "TP CP PICS/applebyme.jpg"; // New image path
   txt4.textContent = "Apple";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/clov3.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/beans3.jpg"; // New image path
    txt6.textContent = "Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig (2).jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/sugercane.jpg"; // New image path
   txt3.textContent = "Sugarcane";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/banana.jpg"; // New image path
  txt5.textContent = "Banana";
    
  img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt6.textContent = "Turmeric";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/jowar.jpg"; // New image path
    txt6.textContent = "Jowar";
 
   img5.src = "TP CP PICS/onion3.jpg"; // New image path
   txt5.textContent = "Onion";
    
   img6.src = "TP CP PICS/chillis.jpg"; // New image path
   txt6.textContent = "Chillies";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "ginger";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/JASMINE.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt5.textContent = "Rubber";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Guava";
  }
 
 }
 }
 else if(SD === "Manipur"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/gin.jpg"; // New image path
     txt4.textContent = "Ginger";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
      txt6.textContent = "Okra";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt3.textContent = "Mustard";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";
 
     img5.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt5.textContent = "Turmeric";
      
     img6.src = "TP CP PICS/guava.jpg"; // New image path
     txt6.textContent = "Guava";
    }
    if(SS==161){
     img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt3.textContent = "Cucumber";
     
     img4.src = "TP CP PICS/Tomato.jpg"; // New image path
     txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
    txt4.textContent = "Chillies";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya (2).jpg"; // New image path
    txt6.textContent = "papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/coriander.jpg"; // New image path
    txt4.textContent = "Coriander";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/pineapple.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/soyabean.jpg"; // New image path
   txt3.textContent = "Soyabean";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt4.textContent = "Pumpkin";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/cashew10.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt4.textContent = "Tea";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/cluster beans3.jpg"; // New image path
    txt6.textContent = "Cluster Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/soyabean.jpg"; // New image path
   txt4.textContent = "Soyabean";
 
   img5.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt5.textContent = "Turmeric";
    
  img6.src = "TP CP PICS/banana.jpg"; // New image path
  txt6.textContent = "Banana";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt5.textContent = "Mustard";
      
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Pea";
 
   img5.src = "TP CP PICS/potato3.jpg"; // New image path
   txt5.textContent = "Potato";
    
   img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt6.textContent = "Cabbage";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/chillis.jpg"; // New image path
  txt5.textContent = "Chilli";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt3.textContent = "Cardamom";
   
   img4.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt4.textContent = "Kiwi";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt4.textContent = "Tomato";
 
  img5.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt5.textContent = "Rubber";
    
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
  }
 
 }
 }
 else if(SD === "Meghalaya"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/AERACANUT.jpg"; // New image path
     txt4.textContent = "Arecanut";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
      txt6.textContent = "Brinjal";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/mustard seeds1.jpg"; // New image path
     txt3.textContent = "Mustard";
     
     img4.src = "TP CP PICS/gin.jpg"; // New image path
     txt4.textContent = "Ginger";
 
     img5.src = "TP CP PICS/orange.jpg"; // New image path
     txt5.textContent = "Orange";
      
     img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt6.textContent = "Turmeric";
    }
    if(SS==161){
     img3.src = "TP CP PICS/Tomato.jpg"; // New image path
     txt3.textContent = "Tomato";
     
     img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
     txt4.textContent = "Brinjal";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
    txt4.textContent = "Chillies";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/coriander.jpg"; // New image path
    txt4.textContent = "Coriander";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/pineapple.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/soyabean.jpg"; // New image path
   txt3.textContent = "Soyabean";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/cashew.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt4.textContent = "kiwi";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt3.textContent = "Capsicum";
   
   img4.src = "TP CP PICS/radish3.jpg"; // New image path
   txt4.textContent = "Radish";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/beans3.jpg"; // New image path
    txt6.textContent = "Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/soyabean.jpg"; // New image path
   txt4.textContent = "Soyabean";
 
   img5.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt5.textContent = "Turmeric";
    
  img6.src = "TP CP PICS/banana.jpg"; // New image path
  txt6.textContent = "Banana";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt5.textContent = "Mustard";
      
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Pea";
 
   img5.src = "TP CP PICS/potato3.jpg"; // New image path
   txt5.textContent = "Potato";
    
   img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt6.textContent = "Cabbage";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/ mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/JASMINE.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }

 else if(SD === "Mizoram"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
     img5.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt5.textContent = "Turmeric";
      
      img6.src = "TP CP PICS/mango5.jpg"; // New image path
      txt6.textContent = "Mango";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/gin.jpg"; // New image path
     txt3.textContent = "Ginger";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/rose1.jpg"; // New image path
     txt6.textContent = "Rose";
    }
    if(SS==161){
     img3.src = "TP CP PICS/maize.jpg"; // New image path
     txt3.textContent = "Maize";
     
     img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
     txt4.textContent = "Pumpkin";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/papaya.jpg"; // New image path
    txt4.textContent = "Papaya";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/onion3.jpg"; // New image path
    txt3.textContent = "Onion";
    
    img4.src = "TP CP PICS/garlic.jpg"; // New image path
    txt4.textContent = "Garlic";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/custard.jpg"; // New image path
    txt6.textContent = "Custard Apple";
   }
   if(SS==161){
    img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt3.textContent = "Groundnut";
    
    img4.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt4.textContent = "Watermelon";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/sorghum.jpg"; // New image path
   txt3.textContent = "Sorghum";
   
   img4.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt4.textContent = "Tomato";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin2.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt4.textContent = "Marigold";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
   txt6.textContent = "Snapdragon";
  }
  if(SS==161){
   img3.src = "TP CP PICS/sesame1.jpg"; // New image path
   txt3.textContent = "Sesame";
   
   img4.src = "TP CP PICS/mango1 (2).jpg"; // New image path
   txt4.textContent = "Mango";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
  txt6.textContent = "Groundnut";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/rose.jpg"; // New image path
   txt3.textContent = "Rose";
   
   img4.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt4.textContent = "Cardamom";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/applebyme.jpg"; // New image path
   txt4.textContent = "Apple";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/cloves.jpg"; // New image path
   txt3.textContent = "Clove";
   
   img4.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt4.textContent = "Dahlia";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt4.textContent = "Kiwi";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cluster beans3.jpg"; // New image path
   txt3.textContent = "Cluster Beans";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt4.textContent = "Ajwain";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/sesame1.jpg"; // New image path
   txt3.textContent = "Sesame";
   
   img4.src = "TP CP PICS/fig.jpg"; // New image path
   txt4.textContent = "Fig";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/soyabean.jpg"; // New image path
   txt4.textContent = "Soyabean";
 
   img5.src = "TP CP PICS/bamboo.jpg"; // New image path
  txt5.textContent = "Bamboo";
    
  img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt6.textContent = "Turmeric";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt5.textContent = "Mustard";
      
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Pea";
 
   img5.src = "TP CP PICS/orange.jpg"; // New image path
   txt5.textContent = "Orange";
    
   img6.src = "TP CP PICS/potato3.jpg"; // New image path
   txt6.textContent = "Potato";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/banana.jpg"; // New image path
  txt5.textContent = "Banana";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/jackfruit.jpg"; // New image path
   txt4.textContent = "Jackfruit";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/JASMINE.jpg"; // New image path
   txt4.textContent = "Jasmine";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/rubber2.jpg"; // New image path
   txt3.textContent = "Rubber";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }


 else if(SD === "Nagaland"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/gin.jpg"; // New image path
     txt4.textContent = "Ginger";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/brinjal1.jpg"; // New image path
      txt6.textContent = "Brinjal";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt3.textContent = "Mustard";
     
     img4.src = "TP CP PICS/wheat.jpg"; // New image path
     txt4.textContent = "Wheat";
 
     img5.src = "TP CP PICS/banana.jpg"; // New image path
     txt5.textContent = "Banana";
      
     img6.src = "TP CP PICS/gin.jpg"; // New image path
     txt6.textContent = "Ginger";
    }
    if(SS==161){
     img3.src = "TP CP PICS/Tomato.jpg"; // New image path
     txt3.textContent = "Tomato";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt3.textContent = "Chickpea";
    
    img4.src = "TP CP PICS/lentils.jpg"; // New image path
    txt4.textContent = "Lentils";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
    txt3.textContent = "Bitter Gourd";
    
    img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
    txt4.textContent = "Pumpkin";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/soyabean.jpg"; // New image path
   txt3.textContent = "Soyabean";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/beans3.jpg"; // New image path
   txt3.textContent = "French Beans";
   
   img4.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt4.textContent = "Ridge Gourd";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/AERACANUT.jpg"; // New image path
   txt4.textContent = "Arecanut";
 
   img5.src = "TP CP PICS/cashew10.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt4.textContent = "Kiwi";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/cluster beans3.jpg"; // New image path
    txt6.textContent = "Cluster Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengram.jpg"; // New image path
   txt4.textContent = "Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/fwdcashcropstypes/kodo millet2.jpg"; // New image path
   txt4.textContent = "Millets";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
  txt5.textContent = "Ginger";
    
  img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt6.textContent = "Turmeric";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/peas1.jpg"; // New image path
    txt5.textContent = "Pea";
      
    img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt6.textContent = "Mustard";
 
   img5.src = "TP CP PICS/potato3.jpg"; // New image path
   txt5.textContent = "Potato";
    
   img6.src = "TP CP PICS/carrot3.jpg"; // New image path
   txt6.textContent = "Carrot";
  }
  if(SS==161){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/banana.jpg"; // New image path
  txt5.textContent = "Banana";
    
  img6.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt6.textContent = "Tomato";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt3.textContent = "Cardamom";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
    txt5.textContent = "Cardamom";
    
    img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
    txt6.textContent = "Turmeric";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/pineapple.jpg"; // New image path
   txt5.textContent = "Pineapple";
    
   img6.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt6.textContent = "Brinjal";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }
 else if(SD === "Odisha"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/sugercane.jpg"; // New image path
     txt4.textContent = "Sugarcane";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
      txt6.textContent = "Okra";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/lentils.jpg"; // New image path
     txt4.textContent = "Lentils";
 
     img5.src = "TP CP PICS/orange.jpg"; // New image path
     txt5.textContent = "Orange";
      
     img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt6.textContent = "Turmeric";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt4.textContent = "Chickpea";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/guava.jpg"; // New image path
   txt3.textContent = "Guava";
   
   img4.src = "TP CP PICS/lentils.jpg"; // New image path
   txt4.textContent = "Lentils";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt4.textContent = "Ridge Gourd";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt4.textContent = "Pumpkin";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/lentils.jpg"; // New image path
   txt3.textContent = "Lentils";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/cluster beans1.jpg"; // New image path
    txt6.textContent = "Cluster Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengarm.jpg"; // New image path
   txt4.textContent = "Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt4.textContent = "Groundnut";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/cashew.jpg"; // New image path
  txt6.textContent = "Cashew";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt6.textContent = "Mustard";
 
   img5.src = "TP CP PICS/potato3.jpg"; // New image path
   txt5.textContent = "Potato";
    
   img6.src = "TP CP PICS/greengram.jpg"; // New image path
   txt6.textContent = "Green Gram";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt4.textContent = "Tomato";
 
  img5.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt5.textContent = "Rubber";
    
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
  }
 
 }
 }
 else if(SD === "Punjab"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/cotton.jpg"; // New image path
     txt4.textContent = "Cotton";
 
     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Mango";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/barley2.jpg"; // New image path
     txt4.textContent = "Barley";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/rose1.jpg"; // New image path
     txt6.textContent = "Rose";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/lentils.jpg"; // New image path
    txt4.textContent = "Lentils ";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/custard.jpg"; // New image path
    txt6.textContent = "Custard Apple";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/chickpeas.jpg"; // New image path
   txt3.textContent = "Chickpea";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
   txt6.textContent = "Snapdragon";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt4.textContent = "Ridge Gourd";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
  txt6.textContent = "Groundnut";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/AERACANUT.jpg"; // New image path
   txt4.textContent = "Arecanut";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/lentils.jpg"; // New image path
   txt4.textContent = "Lentils";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengarm.jpg"; // New image path
   txt4.textContent = "Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/maize.jpg"; // New image path
  txt5.textContent = "Maize";
    
  img6.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt6.textContent = "Rice/Paddy";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt6.textContent = "Mustard";
 
   img5.src = "TP CP PICS/potato3.jpg"; // New image path
   txt5.textContent =  "Potato";
    
   img6.src = "TP CP PICS/barley2.jpg"; // New image path
   txt6.textContent = "Barley";
  }
  if(SS==161){
   img3.src = "TP CP PICS/musk.jpg"; // New image path
   txt3.textContent = "Muskmelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
  txt6.textContent = "Watermelon";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/guava.jpg"; // New image path
   txt3.textContent = "Guava";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }
 else if(SD === "Rajasthan"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/maize.jpg"; // New image path
     txt4.textContent = "Maize";
 
     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Mango";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt4.textContent = "Mustard";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/rose1.jpg"; // New image path
     txt6.textContent = "Rose";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/greengarm.jpg"; // New image path
    txt3.textContent = "Green Gram";
    
    img4.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt4.textContent = "Sunflower";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/custard.jpg"; // New image path
    txt6.textContent = "Custard Apple";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/guava.jpg"; // New image path
   txt3.textContent = "Guava";
   
   img4.src = "TP CP PICS/lentils.jpg"; // New image path
   txt4.textContent = "Lentils";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
   txt6.textContent = "Snapdragon";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt4.textContent = "Pumpkin";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
  txt6.textContent = "Groundnut";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/AERACANUT.jpg"; // New image path
   txt4.textContent = "Arecanut";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/barley2.jpg"; // New image path
   txt3.textContent = "Barley";
   
   img4.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt4.textContent = "Tea";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/lentils.jpg"; // New image path
   txt4.textContent = "Lentils";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengram.jpg"; // New image path
   txt4.textContent = "Green Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt4.textContent = "Groundnut";
 
   img5.src = "TP CP PICS/GUAR.jpg"; // New image path
  txt5.textContent = "Guar";
    
  img6.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt6.textContent = "Sesame";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt6.textContent = "Mustard";
 
   img5.src = "TP CP PICS/barley2.jpg"; // New image path
   txt5.textContent = "Barley";
    
   img6.src = "TP CP PICS/cumin.jpg"; // New image path
   txt6.textContent = "Cumin";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/banana.jpg"; // New image path
  txt5.textContent = "Banana";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt4.textContent = "Tomato";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }
 else if(SD === "Sikkim"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/gin.jpg"; // New image path
     txt4.textContent = "Ginger";
 
     img5.src = "TP CP PICS/cumin.jpg"; // New image path
      txt5.textContent = "Cumin";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt4.textContent = "Mustard";
 
     img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
     txt5.textContent = "Date Palm";
      
     img6.src = "TP CP PICS/rose1.jpg"; // New image path
     txt6.textContent = "Rose";
    }
    if(SS==161){
     img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt3.textContent = "Cucumber";
     
     img4.src = "TP CP PICS/Tomato.jpg"; // New image path
     txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt5.textContent = "Pineapple";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt3.textContent = "Soyabean";
    
    img4.src = "TP CP PICS/maize.jpg"; // New image path
    txt4.textContent = "Maize";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt3.textContent = "Chickpea";
    
    img4.src = "TP CP PICS/lentils.jpg"; // New image path
    txt4.textContent = "Lentils";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
    txt6.textContent = "Mango";
   }
   if(SS==161){
    img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
    txt3.textContent = "Bitter Gourd";
    
    img4.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
    txt4.textContent = "Ridge Gourd";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
    txt6.textContent = "Ridge Gourd";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt4.textContent = "Cardamom";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/guava.jpg"; // New image path
   txt3.textContent = "Guava";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
   txt5.textContent = "Beans";
    
   img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
   txt6.textContent = "Snapdragon";
  }
  if(SS==161){
   img3.src = "TP CP PICS/beans3.jpg"; // New image path
   txt3.textContent = "French Beans";
   
   img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt4.textContent = "Pumpkin";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
  txt6.textContent = "Groundnut";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/pine.jpg"; // New image path
    txt5.textContent = "Pineapple";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/barley2.jpg"; // New image path
   txt3.textContent = "Barley";
   
   img4.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt4.textContent = "Tea";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt4.textContent = "Kiwi";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/sesame1.jpg"; // New image path
   txt4.textContent = "Sesame";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengram.jpg"; // New image path
   txt4.textContent = "Green Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
  txt5.textContent = "Cardamom";
    
  img6.src = "TP CP PICS/gin.jpg"; // New image path
  txt6.textContent = "Ginger";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/barley2.jpg"; // New image path
    txt5.textContent = "Barley";
      
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Pea";
 
   img5.src = "TP CP PICS/potato3.jpg"; // New image path
   txt5.textContent = "Potato";
    
   img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt6.textContent = "Cabbage";
  }
  if(SS==161){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/banana.jpg"; // New image path
  txt6.textContent = "Banana";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt3.textContent = "Cardamom";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt3.textContent = "Tomato";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }
 else if(SD === "Tamil Nadu"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/sugercane.jpg"; // New image path
     txt4.textContent = "Sugarcane";
 
     img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
      txt5.textContent = "Date Palm";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/fwdcashcrops/kodo millet1.jpg"; // New image path
     txt3.textContent = "Millets";
     
     img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt4.textContent = "Turmeric";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
     txt6.textContent = "Cabbage";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
     txt4.textContent = "Pumpkin";
 
    img5.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
    txt5.textContent = "Brinjal";
      
    img6.src = "TP CP PICS/red chilli1.jpg"; // New image path
    txt6.textContent = "Chillies";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt6.textContent = "Chickpeas";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt4.textContent = "Chickpea";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/custard.jpg"; // New image path
    txt6.textContent = "Custard Apple";
   }
   if(SS==161){
    img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
    txt3.textContent = "Bitter Gourd";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
    txt5.textContent = "Capsicum";
    
    img6.src = "TP CP PICS/marigold.jpg"; // New image path
    txt6.textContent = "Marigold";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/guava.jpg"; // New image path
   txt3.textContent = "Guava";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
   txt6.textContent = "Snapdragon";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "French Beans";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/gin.jpg"; // New image path
  txt6.textContent = "Ginger";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/coconut1.jpg"; // New image path
   txt4.textContent = "Coconut";
 
   img5.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt5.textContent = "Pineapple";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/wheat.jpg"; // New image path
   txt6.textContent = "Wheat";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
  txt5.textContent = "Bitter Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/barley2.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt6.textContent = "Watermelon";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt3.textContent = "Kiwi";
   
   img4.src = "TP CP PICS/lentils.jpg"; // New image path
   txt4.textContent = "Lentils";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengram.jpg"; // New image path
   txt4.textContent = "Green Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/sugercane.jpg"; // New image path
   txt4.textContent = "Sugarcane";
 
   img5.src = "TP CP PICS/banana.jpg"; // New image path
  txt5.textContent = "Banana";
    
  img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt6.textContent = "Turmeric";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
      
    img6.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt6.textContent = "Sunflower";
 
   img5.src = "TP CP PICS/chillis1.jpg"; // New image path
   txt5.textContent = "Chilli";
    
   img6.src = "TP CP PICS/potato3.jpg"; // New image path
   txt6.textContent = "Potato";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/beans3.jpg"; // New image path
    txt6.textContent = "Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/clov3.jpg"; // New image path
   txt6.textContent = "Cloves";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt4.textContent = "Tomato";
 
  img5.src = "TP CP PICS/pineapple.jpg"; // New image path
  txt5.textContent = "Pineapple";
    
  img6.src = "TP CP PICS/cucumber3.jpg"; // New image path
  txt6.textContent = "Cucumber";
  }
 
 }
 }
 else if(SD === "Telangana"){
  if( Soil == -1){ // ALLUVIAL SOIL image attachment left
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/maize.jpg"; // New image path
     txt4.textContent = "Maize";
 
     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Mango";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/greengram.jpg"; // New image path
     txt4.textContent = "Green Gram";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/potato3.jpg"; // New image path
     txt6.textContent = "Potato";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/Tomato.jpg"; // New image path
     txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/spinach3.jpg"; // New image path
    txt6.textContent = "Spinach";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt4.textContent = "Chickpea";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
    txt4.textContent = "Bitter Gourd";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/lentils.jpg"; // New image path
   txt3.textContent = "Lentils";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt6.textContent = "Cucumber";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt4.textContent = "Pumpkin";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/lentils.jpg"; // New image path
  txt6.textContent = "Lentils";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "pea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt6.textContent = "Spinach";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/beans3.jpg"; // New image path
  txt6.textContent = "Beans";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";
 
   img5.src = "TP CP PICS/cotton.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/lentils.jpg"; // New image path
   txt4.textContent = "Lentils";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pineapple.jpg"; // New image path
  txt5.textContent = "Pineapple";
    
  img6.src = "TP CP PICS/cucumber3.jpg"; // New image path
  txt6.textContent = "Cucumber";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengram.jpg"; // New image path
   txt4.textContent = "Green Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/carrot3.jpg"; // New image path
   txt6.textContent = "Carrot";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt6.textContent = "Turmeric";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt6.textContent = "Turmeric";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/maize.jpg"; // New image path
    txt5.textContent = "Maize";
      
    img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt6.textContent = "Mustard";
 
   img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt5.textContent = "Groundnut";
    
   img6.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
   txt6.textContent = "Sunflower";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/banana.jpg"; // New image path
  txt6.textContent = "Banana";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
    txt5.textContent = "Capsicum";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/lemon.jpg"; // New image path
  txt5.textContent = "Lemon";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }
 else if(SD === "Tripura"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/gin.jpg"; // New image path
     txt4.textContent = "Ginger";
 
     img5.src = "TP CP PICS/carrot3.jpg"; // New image path
      txt5.textContent = "Carrot";
      
      img6.src = "TP CP PICS/cardamom.jpg"; // New image path
      txt6.textContent = "Cardamom";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt4.textContent = "Mustard";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/gin.jpg"; // New image path
     txt6.textContent = "Ginger";
    }
    if(SS==161){
     img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt3.textContent = "Cucumber";
     
     img4.src = "TP CP PICS/Tomato.jpg"; // New image path
     txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt5.textContent = "Pineapple";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/AERACANUT.jpg"; // New image path
    txt5.textContent = "Arecanut";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/lentils.jpg"; // New image path
    txt3.textContent = "Lentils";
    
    img4.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt4.textContent = "Chickpeas";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
    txt6.textContent = "Bitter Gourd";
   }
   if(SS==161){
    img3.src = "TP CP PICS/pumpkin3.jpg"; // New image path
    txt3.textContent = "Pumpkin";
    
    img4.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
    txt4.textContent = "Ridge Gourd";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/maize.jpg"; // New image path
   txt3.textContent = "Maize";
   
   img4.src = "TP CP PICS/pineapple.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
    txt6.textContent = "Mango";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/guava.jpg"; // New image path
   txt3.textContent = "Guava";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "French Beans";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/beetroot1.jpg"; // New image path
  txt6.textContent = "Beetroot";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/AERACANUT.jpg"; // New image path
   txt4.textContent = "Arecanut";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/greengram1.jpg"; // New image path
    txt6.textContent = "Green Gram";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/wheat.jpg"; // New image path
   txt6.textContent = "Wheat";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt4.textContent = "Ridge Gourd";
 
  img5.src = "TP CP PICS/tamarind.jpg"; // New image path
  txt5.textContent = "Tamarind";
    
  img6.src = "TP CP PICS/Coffee.png"; // New image path
  txt6.textContent = "Coffee";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/barley2.jpg"; // New image path
   txt3.textContent = "Barley";
   
   img4.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt4.textContent = "Kiwi";
 
   img5.src = "TP CP PICS/pine.jpg"; // New image path
    txt5.textContent = "Pineapple";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/wheat.jpg"; // New image path
   txt4.textContent = "Wheat";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/lemon.jpg"; // New image path
    txt5.textContent = "Lemon";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/red gram.jpg"; // New image path
   txt4.textContent = "Red Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/lily.jpg"; // New image path
  txt6.textContent = "Lily";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/pineapple.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
  txt5.textContent = "Ginger";
    
  img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
  txt6.textContent = "Turmeric";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/peas1.jpg"; // New image path
    txt5.textContent = "Pea";
      
    img6.src = "TP CP PICS/potato3.jpg"; // New image path
    txt6.textContent = "Potato";
 
   img5.src = "TP CP PICS/cauliflower1.jpg"; // New image path
   txt5.textContent = "Cauliflower";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/pumpkin3.jpg"; // New image path
  txt6.textContent = "Pumpkin";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt3.textContent = "Cardamom";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/potato3.jpg"; // New image path
    txt5.textContent = "Potato";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/Coffee.png"; // New image path
   txt4.textContent = "Coffee";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt3.textContent = "Tomato";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/carrot1.jpg"; // New image path
  txt5.textContent = "Carrot";
    
  img6.src = "TP CP PICS/beetroot1.jpg"; // New image path
  txt6.textContent = "Beetroot";
  }
 
 }
 }
 else if(SD === "Uttar Pradesh"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/sugercane.jpg"; // New image path
     txt4.textContent = "Sugarcane";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
      txt6.textContent = "Okra";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt4.textContent = "Mustard";
 
     img5.src = "TP CP PICS/lemon.jpg"; // New image path
     txt5.textContent = "Lemon";
      
     img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt6.textContent = "Turmeric";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/Tomato.jpg"; // New image path
     txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/greengram.jpg"; // New image path
    txt4.textContent = "Green Gram";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
    txt4.textContent = "Bitter Gourd";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/chickpeas.jpg"; // New image path
   txt3.textContent = "Chickpea";
   
   img4.src = "TP CP PICS/lentils.jpg"; // New image path
   txt4.textContent = "Lentils";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/coconut1.jpg"; // New image path
   txt4.textContent = "Coconut";
 
   img5.src = "TP CP PICS/cashew10.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt4.textContent = "Ridge Gourd";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/barley2.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt4.textContent = "Kiwi";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/beans3.jpg"; // New image path
    txt6.textContent = "Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengram1.jpg"; // New image path
   txt4.textContent = "Green Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/sugercane.jpg"; // New image path
   txt4.textContent = "Sugarcane";
 
   img5.src = "TP CP PICS/maize.jpg"; // New image path
  txt5.textContent = "Maize";
    
  img6.src = "TP CP PICS/banana.jpg"; // New image path
  txt6.textContent = "Banana";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt6.textContent = "Mustard";
 
   img5.src = "TP CP PICS/potato3.jpg"; // New image path
   txt5.textContent = "Potato";
    
   img6.src = "TP CP PICS/coriander.jpg"; // New image path
   txt6.textContent = "Coriander";
  }
  if(SS==161){
   img3.src = "TP CP PICS/musk.jpg"; // New image path
   txt3.textContent = "Muskmelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/watermelon.jpg"; // New image path
  txt6.textContent = "Watermelon";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
    txt5.textContent = "Spinach";
    
    img6.src = "TP CP PICS/JASMINE.jpg"; // New image path
    txt6.textContent = "Jasmine";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/rubber2.jpg"; // New image path
   txt5.textContent = "Rubber";
    
   img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
   txt6.textContent = "Jackfruit";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt3.textContent = "Tomato";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/spinach3.jpg"; // New image path
  txt5.textContent = "Spinach";
    
  img6.src = "TP CP PICS/JASMINE.jpg"; // New image path
  txt6.textContent = "Jasmine";
  }
 
 }
 }
 else if(SD === "Uttarakhand"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/maize.jpg"; // New image path
     txt4.textContent = "Maize";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
      txt6.textContent = "Okra";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt4.textContent = "Mustard";
 
     img5.src = "TP CP PICS/apple.jpg"; // New image path
     txt5.textContent = "Apple";
      
     img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt6.textContent = "Turmeric";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt3.textContent = "Chickpea";
    
    img4.src = "TP CP PICS/lentils.jpg"; // New image path
    txt4.textContent = "Lentils";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/lentils.jpg"; // New image path
   txt3.textContent = "Lentils";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt4.textContent = "Pumpkin";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/turmeric.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cashew.jpg"; // New image path
   txt5.textContent = "Cashew";
    
   img6.src = "TP CP PICS/pineapple.jpg"; // New image path
   txt6.textContent = "Pineapple";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/rose.jpg"; // New image path
  txt5.textContent = "Rose";
    
  img6.src = "TP CP PICS/cardamom.jpg"; // New image path
  txt6.textContent = "Cardamom";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/barley2.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt3.textContent = "Kiwi";
   
   img4.src = "TP CP PICS/wheat.jpg"; // New image path
   txt4.textContent = "Wheat";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/beans3.jpg"; // New image path
    txt6.textContent = "Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengram.jpg"; // New image path
   txt4.textContent = "Green Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
  txt5.textContent = "Cardamom";
    
  img6.src = "TP CP PICS/gin.jpg"; // New image path
  txt6.textContent = "Ginger";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/barley2.jpg"; // New image path
    txt5.textContent = "Barley";
      
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
   img5.src = "TP CP PICS/potato3.jpg"; // New image path
   txt5.textContent = "Potato";
    
   img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt6.textContent = "Cabbage";
  }
  if(SS==161){
   img3.src = "TP CP PICS/musk.jpg"; // New image path
   txt3.textContent = "Muskmelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
  txt6.textContent = "Capsicum";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt4.textContent = "Cardamom";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt4.textContent = "Tomato";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }

 else if(SD === "West Bengal"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/jute.jpg"; // New image path
     txt4.textContent = "Jute";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
      txt6.textContent = "Okra";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt4.textContent = "Mustard";
 
     img5.src = "TP CP PICS/mango1 (2).jpg"; // New image path
     txt5.textContent = "Mango";
      
     img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt6.textContent = "Turmeric";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt4.textContent = "Chickpeas";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/lentils.jpg"; // New image path
   txt3.textContent = "Lentils";
   
   img4.src = "TP CP PICS/guava.jpg"; // New image path
   txt4.textContent = "Guava";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt4.textContent = "Ridge Gourd";
 
  img5.src = "TP CP PICS/sesame3.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/AERACANUT.jpg"; // New image path
   txt4.textContent = "Arecanut";
 
   img5.src = "TP CP PICS/cashew.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/barley2.jpg"; // New image path
   txt3.textContent = "Barley";
   
   img4.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt4.textContent = "Tea";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt4.textContent = "Kiwi";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/beans3.jpg"; // New image path
    txt6.textContent = "Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengram1.jpg"; // New image path
   txt4.textContent = "Green Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/jute.jpg"; // New image path
   txt4.textContent = "Jute";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
      
    img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt6.textContent = "Mustard";
 
   img5.src = "TP CP PICS/banana.jpg"; // New image path
   txt5.textContent = "Banana";
    
   img6.src = "TP CP PICS/coconut10.jpg"; // New image path
   txt6.textContent = "Coconut";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/potato3.jpg"; // New image path
  txt5.textContent = "Potato";
    
  img6.src = "TP CP PICS/coriander.jpg"; // New image path
  txt6.textContent = "Coriander";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt4.textContent = "Cardamom";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt4.textContent = "Tomato";
 
  img5.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt5.textContent = "Rubber";
    
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
  }
 
 }
 }
 else if(SD === "Andaman and Nicobar Islands"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/maize.jpg"; // New image path
     txt4.textContent = "Maize";
 
     img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
      txt5.textContent = "Rice";
      
      img6.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
      txt6.textContent = "Okra";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt3.textContent = "Mustard";
     
     img4.src = "TP CP PICS/Tomato.jpg"; // New image path
     txt4.textContent = "Tomato";
 
     img5.src = "TP CP PICS/papaya.jpg"; // New image path
     txt5.textContent = "Papaya";
      
     img6.src = "TP CP PICS/WHITE PEPPER.jpg"; // New image path
     txt6.textContent = "Pepper";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
    txt6.textContent = "Mango";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt4.textContent = "Chickpea";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
    txt3.textContent = "Bitter Gourd";
    
    img4.src = "TP CP PICS/ridge gourd3.jpg.jpg"; // New image path
    txt4.textContent = "Ridge Gourd";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/coconut.jpg"; // New image path
   txt3.textContent = "Coconut";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/guava.jpg"; // New image path
   txt3.textContent = "Guava";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "French Beans";
 
  img5.src = "TP CP PICS/sesame3.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/cashew.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/rose.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt3.textContent = "Tomato";
   
   img4.src = "TP CP PICS/pumpkin3.jpg"; // New image path
   txt4.textContent = "Pumpkin";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt3.textContent = "Tea";
   
   img4.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt4.textContent = "Kiwi";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "Wheat";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/sesame1.jpg"; // New image path
   txt4.textContent = "Sesame";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/beans3.jpg"; // New image path
    txt6.textContent = "Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/greengram1.jpg"; // New image path
   txt4.textContent = "Green Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
   txt3.textContent = "Ridge Gourd";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/fig.jpg"; // New image path
  txt6.textContent = "Fig";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/coconut10.jpg"; // New image path
   txt4.textContent = "Coconut";
 
   img5.src = "TP CP PICS/banana.jpg"; // New image path
  txt5.textContent = "Banana";
    
  img6.src = "TP CP PICS/AERACANUT.jpg"; // New image path
  txt6.textContent = "Arecanut";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/barley2.jpg"; // New image path
    txt5.textContent = "Barley";
      
    img6.src = "TP CP PICS/peas3.jpg"; // New image path
    txt6.textContent = "Peas";
 
   img5.src = "TP CP PICS/barley2.jpg"; // New image path
   txt5.textContent = "Barley";
    
   img6.src = "TP CP PICS/guava.jpg"; // New image path
   txt6.textContent = "Guava";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/Tomato.jpg"; // New image path
  txt5.textContent = "Tomato";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt4.textContent = "Cardamom";
 
   img5.src = "TP CP PICS/Coffee.png"; // New image path
    txt5.textContent = "Coffee";
    
    img6.src = "TP CP PICS/jackfruit.jpg"; // New image path
    txt6.textContent = "Jackfruit";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/WHITE PEPPER.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt5.textContent = "Spinach";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt3.textContent = "Tomato";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt6.textContent = "Rubber";
  }
 
 }
 }
 else if(SD === "Chandigarh"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/sugercane.jpg"; // New image path
     txt4.textContent = "Sugarcane";
 
     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Mango";
      
      img6.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
      txt6.textContent = "Okra";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt4.textContent = "Mustard";
 
     img5.src = "TP CP PICS/orange.jpg"; // New image path
     txt5.textContent = "Orange";
      
     img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt6.textContent = "Turmeric";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
     txt4.textContent = "Cucumber";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/maize.jpg"; // New image path
    txt6.textContent = "Maize";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/soyabean.jpg"; // New image path
    txt4.textContent = "Soyabean";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/chickpeas.jpg"; // New image path
    txt3.textContent = "Chickpeas";
    
    img4.src = "TP CP PICS/lentils.jpg"; // New image path
    txt4.textContent = "Lentils";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/garlic.jpg"; // New image path
    txt6.textContent = "Garlic";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
    txt4.textContent = "Bitter Gourd";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/maize.jpg"; // New image path
   txt4.textContent = "Maize";
 
   img5.src = "TP CP PICS/sorghum.jpg"; // New image path
    txt5.textContent = "Sorghum";
    
    img6.src = "TP CP PICS/Tomato.jpg"; // New image path
    txt6.textContent = "Tomato";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/guava.jpg"; // New image path
   txt3.textContent = "Guava";
   
   img4.src = "TP CP PICS/lentils.jpg"; // New image path
   txt4.textContent = "Lentils";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/marigold.jpg"; // New image path
   txt6.textContent = "Marigold";
  }
  if(SS==161){
   img3.src = "TP CP PICS/sesame1.jpg"; // New image path
   txt3.textContent = "Sesame";
   
   img4.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt4.textContent = "Bitter Gourd";
 
  img5.src = "TP CP PICS/sesame1.jpg"; // New image path
  txt5.textContent = "Sesame";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/cashew10.jpg"; // New image path
    txt5.textContent = "Cashew";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/rose1.jpg"; // New image path
   txt5.textContent = "Rose";
    
   img6.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt6.textContent = "Cardamom";
  }
  if(SS==161){
   img3.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt3.textContent = "Spinach";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/barley2.jpg"; // New image path
   txt3.textContent = "Barley";
   
   img4.src = "TP CP PICS/Tea1.jpg"; // New image path
   txt4.textContent = "Tea";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/kiwi.jpg"; // New image path
   txt3.textContent = "Kiwi";
   
   img4.src = "TP CP PICS/wheatabc.jpg"; // New image path
   txt4.textContent = "Wheat";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
   txt4.textContent = "Capsicum";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/kiwi.jpg"; // New image path
  txt6.textContent = "Kiwi";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/beans3.jpg"; // New image path
    txt6.textContent = "Beans";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/redgram3.jpg"; // New image path
   txt4.textContent = "Red Gram";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt3.textContent = "Tomato";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/beans3.jpg"; // New image path
  txt6.textContent = "Beans";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
      
    img6.src = "TP CP PICS/peas3.jpg"; // New image path
    txt6.textContent = "Peas";
 
   img5.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt5.textContent = "Marigold";
    
   img6.src = "TP CP PICS/guava.jpg"; // New image path
   txt6.textContent = "Guava";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cocoa.jpg"; // New image path
   txt4.textContent = "Cocoa";
 
  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/ash gourd3.jpg"; // New image path
  txt6.textContent = "Ash Gourd";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/turmaric3.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
    txt6.textContent = "Mango";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/gin.jpg"; // New image path
   txt3.textContent = "Ginger";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/papaya.jpg"; // New image path
   txt6.textContent = "Papaya";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt3.textContent = "Tomato";
   
   img4.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt4.textContent = "Bitter Gourd";
 
  img5.src = "TP CP PICS/guava.jpg"; // New image path
  txt5.textContent = "Guava";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }
 else if(SD === "Dadra and Nagar Haveli and Daman and Diu"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt4.textContent = "Turmeric";
 
     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Mango";
      
      img6.src = "TP CP PICS/gin.jpg"; // New image path
      txt6.textContent = "Ginger";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/corn4.jpg"; // New image path
     txt3.textContent = "Maize";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
     txt6.textContent = "Cabbage";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
     txt4.textContent = "Okra";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
    txt6.textContent = "Capsicum";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
    txt4.textContent = "Chillies";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
    txt6.textContent = "Mango";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/coriander.jpg"; // New image path
    txt4.textContent = "Coriander";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/peas3.jpg"; // New image path
    txt6.textContent = "Peas";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt6.textContent = "Pineapple";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/wheat.jpg"; // New image path
    txt6.textContent = "Wheat";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/jowar.jpg"; // New image path
   txt3.textContent = "Sorghum/Jowar";
   
   img4.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt4.textContent = "Marigold";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt6.textContent = "Cabbage";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/gin.jpg"; // New image path
  txt6.textContent = "Ginger";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "wheat";
   
   img4.src = "TP CP PICS/applebyme.jpg"; // New image path
   txt4.textContent = "Apple";
 
   img5.src = "TP CP PICS/plum.jpg"; // New image path
    txt5.textContent = "Plum";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/cloves.jpg"; // New image path
   txt6.textContent = "Clove";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bitter Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/gin.jpg"; // New image path
  txt6.textContent = "Ginger";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
      
    img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
    txt6.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt5.textContent = "Marigold";
    
   img6.src = "TP CP PICS/guava.jpg"; // New image path
   txt6.textContent = "Guava";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/ash gourd3.jpg"; // New image path
  txt6.textContent = "Ash Gourd";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/rubber2.jpg"; // New image path
  txt5.textContent = "Rubber";
    
  img6.src = "TP CP PICS/guava.jpg"; // New image path
  txt6.textContent = "Guava";
  }
 
 }
 }

 else if(SD === "Delhi"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/cloves.jpg"; // New image path
     txt4.textContent = "Cloves";
 
     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Mango";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/corn4.jpg"; // New image path
     txt3.textContent = "Maize";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
     txt6.textContent = "Cabbage";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
     txt4.textContent = "Okra";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
    txt4.textContent = "Chillies";
 
    img5.src = "TP CP PICS/pine.jpg"; // New image path
    txt5.textContent = "Pineapple";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/coriander.jpg"; // New image path
    txt4.textContent = "Coriander";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/guava.jpg"; // New image path
    txt6.textContent = "Guava";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt6.textContent = "Sunflower";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/jowar.jpg"; // New image path
   txt3.textContent = "Sorghum/Jowar";
   
   img4.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt4.textContent = "Marigold";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
   txt6.textContent = "Snapdragon";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
  txt6.textContent = "Groundnut";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "wheat";
   
   img4.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt4.textContent = "Bitter Gourd";
 
   img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
    txt5.textContent = "Ridge Gourd";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
      
    img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
    txt6.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt5.textContent = "Marigold";
    
   img6.src = "TP CP PICS/guava.jpg"; // New image path
   txt6.textContent = "Guava";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/ash gourd3.jpg"; // New image path
  txt6.textContent = "Ash Gourd";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }

 else if(SD === "Jammu and Kashmir"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/kodo millet3.jpg"; // New image path
     txt3.textContent = "Millets";
     
     img4.src = "TP CP PICS/maize1.jpg"; // New image path
     txt4.textContent = "Corn";
 
     img5.src = "TP CP PICS/apple.jpg"; // New image path
      txt5.textContent = "Apple";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/apple.jpg"; // New image path
     txt3.textContent = "Apple";
     
     img4.src = "TP CP PICS/tobbaco1.jpeg"; // New image path
     txt4.textContent = "Tobacco";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/rose1.jpg"; // New image path
     txt6.textContent = "Rose";
    }
    if(SS==161){
     img3.src = "TP CP PICS/apple.jpg"; // New image path
     txt3.textContent = "Apple";
     
     img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
     txt4.textContent = "Okra";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/tobbaco1.jpeg"; // New image path
    txt4.textContent = "Tobacco";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/tobbaco1.jpeg"; // New image path
    txt4.textContent = "Tobacco";
 
    img5.src = "TP CP PICS/wheat.jpg"; // New image path
    txt5.textContent = "Wheat";
    
    img6.src = "TP CP PICS/custard.jpg"; // New image path
    txt6.textContent = "Custard Apple";
   }
   if(SS==161){
    img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
    txt3.textContent = "Mustard";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/tobbaco1.jpeg"; // New image path
    txt5.textContent = "Tobacco";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/jowar.jpg"; // New image path
   txt3.textContent = "Sorghum/Jowar";
   
   img4.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt4.textContent = "Marigold";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
   txt6.textContent = "Snapdragon";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
  txt6.textContent = "Groundnut";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/rose.jpg"; // New image path
   txt6.textContent = "Rose";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "wheat";
   
   img4.src = "TP CP PICS/applebyme.jpg"; // New image path
   txt4.textContent = "Apple";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
      
    img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
    txt6.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt5.textContent = "Marigold";
    
   img6.src = "TP CP PICS/guava.jpg"; // New image path
   txt6.textContent = "Guava";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/ash gourd3.jpg"; // New image path
  txt6.textContent = "Ash Gourd";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/wheat.jpg"; // New image path
  txt5.textContent = "Wheat";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }

 else if(SD === "Ladakh"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt4.textContent = "Turmeric";
 
     img5.src = "TP CP PICS/mango5.jpg"; // New image path
      txt5.textContent = "Mango";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/corn4.jpg"; // New image path
     txt3.textContent = "Maize";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/rose1.jpg"; // New image path
     txt6.textContent = "Rose";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
     txt4.textContent = "Okra";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
    txt4.textContent = "Chillies";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/chillis1.jpg"; // New image path
    txt6.textContent = "Red Chilli";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/coriander.jpg"; // New image path
    txt4.textContent = "Coriander";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/custard.jpg"; // New image path
    txt6.textContent = "Custard Apple";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/jowar.jpg"; // New image path
   txt3.textContent = "Sorghum/Jowar";
   
   img4.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt4.textContent = "Marigold";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/snapdragon.jpg"; // New image path
   txt6.textContent = "Snapdragon";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
  txt6.textContent = "Groundnut";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Coffee.png"; // New image path
    txt6.textContent = "Coffee";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "wheat";
   
   img4.src = "TP CP PICS/applebyme.jpg"; // New image path
   txt4.textContent = "Apple";
 
   img5.src = "TP CP PICS/applebyme.jpg"; // New image path
    txt5.textContent = "Apple";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/ricepaddy.jpg"; // New image path
  txt5.textContent = "Rice/Paddy";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
      
    img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
    txt6.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt5.textContent = "Marigold";
    
   img6.src = "TP CP PICS/guava.jpg"; // New image path
   txt6.textContent = "Guava";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/ash gourd3.jpg"; // New image path
  txt6.textContent = "Ash Gourd";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }
 }

 else if(SD === "Lakshadweep"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
     txt3.textContent = "Rice/Paddy";
     
     img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
     txt4.textContent = "Okra";
 
     img5.src = "TP CP PICS/wheat.jpg"; // New image path
      txt5.textContent = "Wheat";
      
      img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
      txt6.textContent = "Turmeric";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/corn4.jpg"; // New image path
     txt3.textContent = "Maize";
     
     img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
     txt4.textContent = "Cabbage";
 
     img5.src = "TP CP PICS/cauliflower3.jpg"; // New image path
     txt5.textContent = "Cauliflower";
      
     img6.src = "TP CP PICS/rose1.jpg"; // New image path
     txt6.textContent = "Rose";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
     txt4.textContent = "Okra";
 
    img5.src = "TP CP PICS/cabbage3.jpg"; // New image path
    txt5.textContent = "Cabbage";
      
    img6.src = "TP CP PICS/peas3.jpg"; // New image path
    txt6.textContent = "Peas";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
    txt4.textContent = "Chillies";
 
    img5.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt5.textContent = "Cotton";
    
    img6.src = "TP CP PICS/lentils.jpg"; // New image path
    txt6.textContent = "Lentils";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/coriander.jpg"; // New image path
    txt4.textContent = "Coriander";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/pineapple.jpg"; // New image path
    txt6.textContent = "Pineapple";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/fwdvegetables/capsicum1.jpg"; // New image path
    txt5.textContent = "Capsicum";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/marigold.jpg"; // New image path
   txt4.textContent = "Marigold";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/longpepper.jpg"; // New image path
    txt6.textContent = "Pepper";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/jowar.jpg"; // New image path
   txt3.textContent = "Jowar";
   
   img4.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt4.textContent = "Marigold";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/mango1 (2).jpg"; // New image path
  txt6.textContent = "Mango";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/peas3.jpg"; // New image path
    txt5.textContent = "Peas";
    
    img6.src = "TP CP PICS/carrot3.jpg"; // New image path
    txt6.textContent = "Carrot";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt6.textContent = "Spinach";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/cashew10.jpg"; // New image path
  txt6.textContent = "Cashew";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "wheat";
   
   img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt4.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/lily.jpg"; // New image path
   txt6.textContent = "Lily";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/datepalm10.jpg"; // New image path
   txt4.textContent = "Date Palm";
 
   img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
    txt5.textContent = "Ridge Gourd";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/strawberry.jpg"; // New image path
  txt5.textContent = "Strawberry";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/soyabean2.jpg"; // New image path
   txt3.textContent = "Soyabean";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
      
    img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
    txt6.textContent = "Turmeric";
 
   img5.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt5.textContent = "Marigold";
    
   img6.src = "TP CP PICS/guava.jpg"; // New image path
   txt6.textContent = "Guava";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/ash gourd3.jpg"; // New image path
  txt6.textContent = "Ash Gourd";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/pumpkin1.jpg"; // New image path
   txt3.textContent = "Pumpkin";
   
   img4.src = "TP CP PICS/soyabean.jpg"; // New image path
   txt4.textContent = "Soyabean";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/snake gourd3.jpg"; // New image path
  txt6.textContent = "Snake Gourd";
  }
 
 }
 }


 else if(SD === "Puducherry"){
  if( Soil == -1){ // ALLUVIAL SOIL 
    if(SS==152){
     img3.src = "TP CP PICS/wheat.jpg"; // New image path
     txt3.textContent = "Wheat";
     
     img4.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt4.textContent = "Turmeric";
 
     img5.src = "TP CP PICS/watermelon.jpg"; // New image path
      txt5.textContent = "Watermelon";
      
      img6.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
      txt6.textContent = "Okra";
 
    }
    if(SS==107){
     img3.src = "TP CP PICS/corn4.jpg"; // New image path
     txt3.textContent = "Maize";
     
     img4.src = "TP CP PICS/banana.jpg"; // New image path
     txt4.textContent = "Banana";
 
     img5.src = "TP CP PICS/cinnamon.jpg"; // New image path
     txt5.textContent = "Cinnamon";
      
     img6.src = "TP CP PICS/cabbage3.jpg"; // New image path
     txt6.textContent = "Cabbage";
    }
    if(SS==161){
     img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
     txt3.textContent = "Watermelon";
     
     img4.src = "TP CP PICS/fwdvegetables/ladiesfinger1.jpg"; // New image path
     txt4.textContent = "Okra";
 
    img5.src = "TP CP PICS/cucumber3.jpg"; // New image path
    txt5.textContent = "Cucumber";
      
    img6.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt6.textContent = "Groundnut";
    }
 
  }else if( Soil == -2){ // BLACK SOIL 
   if(SS==152){
    img3.src = "TP CP PICS/cotton1.jpg"; // New image path
    txt3.textContent = "Cotton";
    
    img4.src = "TP CP PICS/green chilli3.jpg"; // New image path
    txt4.textContent = "Chillies";
 
    img5.src = "TP CP PICS/snake gourd3.jpg"; // New image path
    txt5.textContent = "Snake Gourd";
    
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
   }
   if(SS==107){
    img3.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
    txt3.textContent = "Sunflower";
    
    img4.src = "TP CP PICS/coriander.jpg"; // New image path
    txt4.textContent = "Coriander";
 
    img5.src = "TP CP PICS/onion3.jpg"; // New image path
    txt5.textContent = "Onion";
    
    img6.src = "TP CP PICS/custard.jpg"; // New image path
    txt6.textContent = "Custard Apple";
   }
   if(SS==161){
    img3.src = "TP CP PICS/sesame1.jpg"; // New image path
    txt3.textContent = "Sesame";
    
    img4.src = "TP CP PICS/fwdvegetables/tomato1.jpg"; // New image path
    txt4.textContent = "Tomato";
 
    img5.src = "TP CP PICS/watermelon.jpg"; // New image path
    txt5.textContent = "Watermelon";
    
    img6.src = "TP CP PICS/marigold1.jpg"; // New image path
    txt6.textContent = "Marigold";
   }
 
 }else if( Soil == -3){  //RED SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/groundnut2.jpg"; // New image path
   txt3.textContent = "Groundnut";
   
   img4.src = "TP CP PICS/mango5.jpg"; // New image path
   txt4.textContent = "Mango";
 
   img5.src = "TP CP PICS/beans3.jpg"; // New image path
    txt5.textContent = "Beans";
    
    img6.src = "TP CP PICS/pine.jpg"; // New image path
    txt6.textContent = "Pineapple";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/jowar.jpg"; // New image path
   txt3.textContent = "Jowar";
   
   img4.src = "TP CP PICS/lily.jpg"; // New image path
   txt4.textContent = "Lily";
 
   img5.src = "TP CP PICS/gin.jpg"; // New image path
   txt5.textContent = "Ginger";
    
   img6.src = "TP CP PICS/pineapple.jpg"; // New image path
   txt6.textContent = "Pineapple";
  }
  if(SS==161){
   img3.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt3.textContent = "Cucumber";
   
   img4.src = "TP CP PICS/fwdvegetables/brinjal1.jpg"; // New image path
   txt4.textContent = "Brinjal";
 
  img5.src = "TP CP PICS/papaya.jpg"; // New image path
  txt5.textContent = "Papaya";
    
  img6.src = "TP CP PICS/ZINNIA.jpg"; // New image path
  txt6.textContent = "Zinnia";
  }
 
 }else if( Soil == -4){ // LATERITE SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/cashew10.jpg"; // New image path
   txt3.textContent = "Cashew";
   
   img4.src = "TP CP PICS/pine.jpg"; // New image path
   txt4.textContent = "Pineapple";
 
   img5.src = "TP CP PICS/mango5.jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt6.textContent = "Tea";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/longpepper.jpg"; // New image path
   txt3.textContent = "Pepper";
   
   img4.src = "TP CP PICS/papaya.jpg"; // New image path
   txt4.textContent = "Papaya";
 
   img5.src = "TP CP PICS/cloves.jpg"; // New image path
   txt5.textContent = "Clove";
    
   img6.src = "TP CP PICS/dahlia.jpg"; // New image path
   txt6.textContent = "Dahlia";
  }
  if(SS==161){
   img3.src = "TP CP PICS/bitter gourd3.jpg"; // New image path
   txt3.textContent = "Bitter Gourd";
   
   img4.src = "TP CP PICS/beans3.jpg"; // New image path
   txt4.textContent = "Beans";
 
  img5.src = "TP CP PICS/ridge gourd3.jpg"; // New image path
  txt5.textContent = "Ridge Gourd";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
  }
 
 }else if( Soil == -5){ // MOUNTAIN SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/wheat.jpg"; // New image path
   txt3.textContent = "wheat";
   
   img4.src = "TP CP PICS/applebyme.jpg"; // New image path
   txt4.textContent = "Apple";
 
   img5.src = "TP CP PICS/mango1 (2).jpg"; // New image path
    txt5.textContent = "Mango";
    
    img6.src = "TP CP PICS/peas1.jpg"; // New image path
    txt6.textContent = "Peas";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/plum.jpg"; // New image path
   txt3.textContent = "Plum";
   
   img4.src = "TP CP PICS/fwdcashcrops/barley1.jpg"; // New image path
   txt4.textContent = "Barley";
 
   img5.src = "TP CP PICS/cardamom.jpg"; // New image path
   txt5.textContent = "Cardamom";
    
   img6.src = "TP CP PICS/jasmine1.jpg"; // New image path
   txt6.textContent = "Jasmine";
  }
  if(SS==161){
   img3.src = "TP CP PICS/radish3.jpg"; // New image path
   txt3.textContent = "Radish";
   
   img4.src = "TP CP PICS/cabbage3.jpg"; // New image path
   txt4.textContent = "Cabbage";
 
  img5.src = "TP CP PICS/pumpkin1.jpg"; // New image path
  txt5.textContent = "Pumpkin";
    
  img6.src = "TP CP PICS/rose.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -6){ // ARID, DESERT SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/bajra.jpg"; // New image path
   txt3.textContent = "Bajra";
   
   img4.src = "TP CP PICS/sesame1.jpg"; // New image path
   txt4.textContent = "Sesame";
 
   img5.src = "TP CP PICS/datepalm10.jpg"; // New image path
    txt5.textContent = "Date Palm";
    
    img6.src = "TP CP PICS/bottle gourd3.jpg"; // New image path
    txt6.textContent = "Bottle Gourd";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt3.textContent = "Mustard";
   
   img4.src = "TP CP PICS/GUAR.jpg"; // New image path
   txt4.textContent = "Guar";
 
   img5.src = "TP CP PICS/ajwainseeds1.jpg"; // New image path
   txt5.textContent = "Ajwain";
    
   img6.src = "TP CP PICS/mustard seeds.jpg"; // New image path
   txt6.textContent = "Mustard";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/musk.jpg"; // New image path
   txt4.textContent = "Muskmelon";
 
  img5.src = "TP CP PICS/lentils.jpg"; // New image path
  txt5.textContent = "Lentils";
    
  img6.src = "TP CP PICS/rose1.jpg"; // New image path
  txt6.textContent = "Rose";
  }
 
 }else if( Soil == -7){   // YELLOW SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/ricepaddy.jpg"; // New image path
   txt3.textContent = "Rice/Paddy";
   
   img4.src = "TP CP PICS/cotton1.jpg"; // New image path
   txt4.textContent = "Cotton";
 
   img5.src = "TP CP PICS/green chilli3.jpg"; // New image path
  txt5.textContent = "Chillies";
    
  img6.src = "TP CP PICS/papaya.jpg"; // New image path
  txt6.textContent = "Papaya";
 
  }
  if(SS==107){
    img5.src = "TP CP PICS/groundnut2.jpg"; // New image path
    txt5.textContent = "Groundnut";
      
    img6.src = "TP CP PICS/papaya.jpg"; // New image path
    txt6.textContent = "Papaya";
 
   img5.src = "TP CP PICS/marigold1.jpg"; // New image path
   txt5.textContent = "Marigold";
    
   img6.src = "TP CP PICS/rubber2.jpg"; // New image path
   txt6.textContent = "Rubber";
  }
  if(SS==161){
   img3.src = "TP CP PICS/watermelon1 (2).jpg"; // New image path
   txt3.textContent = "Watermelon";
   
   img4.src = "TP CP PICS/cucumber3.jpg"; // New image path
   txt4.textContent = "Cucumber";
 
  img5.src = "TP CP PICS/musk.jpg"; // New image path
  txt5.textContent = "Muskmelon";
    
  img6.src = "TP CP PICS/ash gourd3.jpg"; // New image path
  txt6.textContent = "Ash Gourd";
  }
 
 }else if( Soil == -8){ // FOREST SOIL 
  if(SS==152){
   img3.src = "TP CP PICS/Coffee.png"; // New image path
   txt3.textContent = "Coffee";
   
   img4.src = "TP CP PICS/gin.jpg"; // New image path
   txt4.textContent = "Ginger";
 
   img5.src = "TP CP PICS/Tea1.jpg"; // New image path
    txt5.textContent = "Tea";
    
    img6.src = "TP CP PICS/banana.jpg"; // New image path
    txt6.textContent = "Banana";
 
  }
  if(SS==107){
   img3.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt3.textContent = "Turmeric";
   
   img4.src = "TP CP PICS/banana.jpg"; // New image path
   txt4.textContent = "Banana";
 
   img5.src = "TP CP PICS/DEHLIAS2.jpg"; // New image path
   txt5.textContent = "Dahlia";
    
   img6.src = "TP CP PICS/Turmeric1.jpg"; // New image path
   txt6.textContent = "Turmeric";
  }
  if(SS==161){
   img3.src = "TP CP PICS/Tomato.jpg"; // New image path
   txt3.textContent = "Tomato";
   
   img4.src = "TP CP PICS/spinach3.jpg"; // New image path
   txt4.textContent = "Spinach";
 
  img5.src = "TP CP PICS/guava.jpg"; // New image path
  txt5.textContent = "Guava";
    
  img6.src = "TP CP PICS/grapes.jpg"; // New image path
  txt6.textContent = "Grapes";
  }
 
 }
 }


     /********************************************************************************/
    //Asif's Soil fertility Code

 if(CN==152){  // crop 1

    if(Soil==-2){
     img1.src = "TP CP PICS/pigeon pea.png"; // New image path
     txt1.textContent = "Pigeon Pea";
  
     img2.src = "TP CP PICS/tamarind2.jpg"; // New image path
     txt2.textContent = "Tamarind";
    }else if(Soil==-1){
     img1.src = "TP CP PICS/greengram1.jpg"; // New image path
     txt1.textContent = "Green Gram";
  
     img2.src = "TP CP PICS/Cowpea.jpg"; // New image path
     txt2.textContent = "Cow Pea";
    }
    else if(Soil==-6){
     img1.src = "TP CP PICS/greengram1.jpg"; // New image path
     txt1.textContent = "Green Gram";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
    }
    else if(Soil==-8){
     img1.src = "TP CP PICS/Coffee.png"; // New image path
     txt1.textContent = "Coffee";
  
     img2.src = "TP CP PICS/pine.jpg"; // New image path
     txt2.textContent = "Pine Apple";
    }
    else if(Soil==-4){
     img1.src = "TP CP PICS/cashew10.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-5){
     img1.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt1.textContent = "Tea";
  
     img2.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt2.textContent = "Kiwi";
    }
    else if(Soil==-3){
     img1.src = "TP CP PICS/sesame1.jpg"; // New image path
     txt1.textContent = "Sesame";
  
     img2.src = "TP CP PICS/jowar.jpg"; // New image path
     txt2.textContent = "Sorghum";
    }
    else if(Soil==-7){
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt2.textContent = "Sunflower";
    }
    
  
  }
  if(CN==107){  // crop 2
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fenugreek.jpg"; // New image path
     txt1.textContent = "Fenugreek";
  
     img2.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt2.textContent = "Lentils";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/barley2.jpg"; // New image path
     txt1.textContent = "Barley";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Mung Beans";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom ";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmeric";
  
     img2.src = "TP CP PICS/fwdvegetables/sweetpotato3.jpeg"; // New image path
     txt2.textContent = "Sweet Potato";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/clov.jpg"; // New image path
     txt1.textContent = "Cloves";
  
     img2.src = "TP CP PICS/saffron.jpg"; // New image path
     txt2.textContent = "Saffron";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/jowar.jpg"; // New image path
     txt2.textContent = "Sorghum";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/fwdcashcrops/perilla2.jpg"; // New image path
     txt2.textContent = "Linseed";
    }
  }
  if(CN==161){ // crop 3
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/beans1.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/greengram.jpg"; // New image path
     txt2.textContent = "Green Gram";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/Quinoa.jpg"; // New image path
     txt1.textContent = "Quinoa";
  
     img2.src = "TP CP PICS/cluster beans1.jpg"; // New image path
     txt2.textContent = "Cluster Beans";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Coffee.png"; // New image path
     txt1.textContent = "Coffee";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmeric";
  
     img2.src = "TP CP PICS/fwdvegetables/sweetpotato3.jpeg"; // New image path
     txt2.textContent = "Sweet Potato";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/saffron.jpg"; // New image path
     txt2.textContent = "Saffron";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/jowar.jpg"; // New image path
     txt2.textContent = "Sorghum";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame1.jpg"; // New image path
     txt2.textContent = "Sesame";
    }
  }
  if(CN==47){ // crop 4
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/banana.jpg"; // New image path
     txt1.textContent = "Banana";
  
     img2.src = "TP CP PICS/guava (2).jpg"; // New image path
     txt2.textContent = "Guava";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/pomegranate1 (2).jpg"; // New image path
     txt1.textContent = "Pomegranate";
  
     img2.src = "TP CP PICS/fig (2).jpg"; // New image path
     txt2.textContent = "Fig";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Coffee.png"; // New image path
     txt1.textContent = "Coffee";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/jowar.jpg"; // New image path
     txt2.textContent = "Sorghum";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt2.textContent = "Sunflower";
    }
  }
  if(CN==5){ // crop 5
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/sugercane2.jpg"; // New image path
     txt1.textContent = "Sugarcane";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmaric";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/pomegranate1 (2).jpg"; // New image path
     txt1.textContent = "Pomegranate";
  
     img2.src = "TP CP PICS/fig (2).jpg"; // New image path
     txt2.textContent = "Fig";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Coffee.png"; // New image path
     txt1.textContent = "Coffee";
  
     img2.src = "TP CP PICS/pine.jpg"; // New image path
     txt2.textContent = "Pine Apple";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet3.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame1.jpg"; // New image path
     txt2.textContent = "Sesame";
    }
  }
  if(CN==167){ // crop 6
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt2.textContent = "Sunflower";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/fen.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/cluster beans1.jpg"; // New image path
     txt2.textContent = "Cluster Beans";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmeric";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet3.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt2.textContent = "Lentils";
    }
  }
  if(CN==124){ // crop 7
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt1.textContent = "Spinach";
  
     img2.src = "TP CP PICS/fen.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/barley2.jpg"; // New image path
     txt1.textContent = "Barley";
  
     img2.src = "TP CP PICS/cluster beans1.jpg"; // New image path
     txt2.textContent = "Cluster Beans";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmeric";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet3.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==120){ // crop 8
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt1.textContent = "Spinach";
  
     img2.src = "TP CP PICS/fen.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/cluster beans1.jpg"; // New image path
     txt2.textContent = "Cluster Beans";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmeric";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet3.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==127){ // crop 8
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt1.textContent = "Spinach";
  
     img2.src = "TP CP PICS/fen.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/cluster beans1.jpg"; // New image path
     txt2.textContent = "Cluster Beans";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmeric";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet3.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==137){ // crop 9
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt1.textContent = "Spinach";
  
     img2.src = "TP CP PICS/fen.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmeric";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/jowar.jpg"; // New image path
     txt2.textContent = "Sorghum";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==140){ // crop 10
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt1.textContent = "Spinach";
  
     img2.src = "TP CP PICS/fen.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmeric";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/jowar.jpg"; // New image path
     txt2.textContent = "Sorghum";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==142){ // crop 11
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt1.textContent = "Spinach";
  
     img2.src = "TP CP PICS/fen.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmeric";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==135){ // crop 12
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt1.textContent = "Spinach";
  
     img2.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt2.textContent = "Lentils";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmeric";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==128){ // crop 13
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt1.textContent = "Spinach";
  
     img2.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt2.textContent = "Lentils";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmeric";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==133){ // crop 14
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt1.textContent = "Spinach";
  
     img2.src = "TP CP PICS/fenugreek.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt2.textContent = "Pepper";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==134){ // crop 15
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt1.textContent = "Spinach";
  
     img2.src = "TP CP PICS/fenugreek.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/cashew.jpg"; // New image path
     txt1.textContent = "Cashew";
  
     img2.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt2.textContent = "Turmaric";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/jowar.jpg"; // New image path
     txt2.textContent = "Sorghum";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==147){ // crop 16
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/fenugreek.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/cardamom.jpg"; // New image path
     txt1.textContent = "Cardamom";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==139){ // crop 17
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/fenugreek.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==144){ // crop 18
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/fenugreek.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==121){ // crop 19
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/fenugreek.jpg"; // New image path
     txt2.textContent = "Fenugreek";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==61){ // crop 20
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==170){ // crop 21
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt2.textContent = "Cotton";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==143){ // crop 22
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sunflower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==67){ // crop 23
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==132){ // crop 24
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==83){ // crop 25
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==131){ // crop 26
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/SUNFLOWER.jpg"; // New image path
     txt1.textContent = "Sun flower";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==18){ // crop 27
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }if(CN==168){ // crop 28
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }if(CN==145){ // crop 29
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==151){ // crop 30
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==146){ // crop 31
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==50){ // crop 32
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==169){ // crop 33
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==77){ // crop 34
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/jowar-grain-sorghum-crop-farm-260nw-278662079"; // New image path
     txt2.textContent = "Sorghum";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/chickpeas2.jpg"; // New image path
     txt1.textContent = "Chick Pea";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==119){ // crop 35
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==123){ // crop 36
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==12){ // crop 37
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }if(CN==125){ // crop 38
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==141){ // crop 39
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }
  if(CN==82){ // crop 40
   if(Soil==-2){ // black soil
     img1.src = "TP CP PICS/cotton1.jpg"; // New image path
     txt1.textContent = "Cotton";
  
     img2.src = "TP CP PICS/gdnut.jpg"; // New image path
     txt2.textContent = "Ground Nut";
   }else if(Soil==-1){  // alluvial soil
     img1.src = "TP CP PICS/fwdcashcropstypes/lentils1.jpg"; // New image path
     txt1.textContent = "Lentils";
  
     img2.src = "TP CP PICS/spinach1.jpg"; // New image path
     txt2.textContent = "Spinach";
   }
   else if(Soil==-6){ //desert soil
     img1.src = "TP CP PICS/mungbeans.jpg"; // New image path
     txt1.textContent = "Mung Beans";
  
     img2.src = "TP CP PICS/barley2.jpg"; // New image path
     txt2.textContent = "Barley";
    }
    else if(Soil==-8){ // forest soil
     img1.src = "TP CP PICS/Turmeric1.jpg"; // New image path
     txt1.textContent = "Turmaric";
  
     img2.src = "TP CP PICS/gin.jpg"; // New image path
     txt2.textContent = "Ginger";
    }
    else if(Soil==-4){ // lateriate soil
     img1.src = "TP CP PICS/bell pepper2.jpg"; // New image path
     txt1.textContent = "Pepper";
  
     img2.src = "TP CP PICS/cashew.jpg"; // New image path
     txt2.textContent = "Cashew";
    }
    else if(Soil==-5){ // mountain soil
     img1.src = "TP CP PICS/kiwi.jpg"; // New image path
     txt1.textContent = "Kiwi";
  
     img2.src = "TP CP PICS/Tea1.jpg"; // New image path
     txt2.textContent = "Tea";
    }
    else if(Soil==-3){ // red soil
     img1.src = "TP CP PICS/chickpeas.jpg"; // New image path
     txt1.textContent = "Chickpea ";
  
     img2.src = "TP CP PICS/fwdcashcrops/pearl millet2.jpg"; // New image path
     txt2.textContent = "Millet";
    }
    else if(Soil==-7){ // yellow soil
     img1.src = "TP CP PICS/mustard seeds.jpg"; // New image path
     txt1.textContent = "Mustard";
  
     img2.src = "TP CP PICS/sesame3.jpg"; // New image path
     txt2.textContent = "sesame";
    }
  }


// Select all elements with class 'imgs'
const images = document.getElementsByClassName("imgs");
// Loop through the HTMLCollection to set opacity
for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = "1"; // Set desired opacity value (e.g., 0.5 for 50%)
}
 document.getElementById("sc1").style.display = "inline-block";
 document.getElementById("sc").style.display = "none";
 
} 