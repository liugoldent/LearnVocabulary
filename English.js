    var New_Voc=[];
    var New_Chi=[];

//function  HideMe
function HideMe(){
var hide_me = document.getElementById("hideme");
var OriChi = document.getElementsByClassName("OriChi_Text");
    for(var i=0;i<OriChi.length;i++){
    OriChi[i].style.color="white";
    }
};
////////////////////////////////////



//function  RanVoca
function RanVoca(){ 
    
    var OriVoc=document.getElementsByClassName("OriVoc_Text");
    var OriChi=document.getElementsByClassName("OriChi_Text");
    
    
    var Arr_OriVoc_Length=OriVoc.length;
    var Arr_OriChi_Length=OriChi.length;
    //get原始英文單字與單字翻譯 陣列 與 陣列長度
 
        for (var i=0;i<Arr_OriVoc_Length;i++){
            if (OriVoc[i].value==""){
                alert("Please Input 10 Vocabulary");
                OriVoc[i].style.backgroundColor="red";
                OriVoc[i].style.opacity=0.5;
                return false;

            }else{
                OriVoc[i].style.backgroundColor="White";
            }
        }

    var RandomNumberArr=getRandomNumberArray(Arr_OriVoc_Length,Arr_OriVoc_Length);
    //得到亂數陣列（不重複的）
                    console.log(RandomNumberArr);
    

    
    
        for(var j=0;j<OriVoc.length;j++){
                    console.log(OriVoc[j].value);
        }
        //純粹看原本陣列
    
        for (var i=0;i<OriVoc.length;i++){
        var random_num=RandomNumberArr[i];
        New_Voc[i]=OriVoc[random_num];
        }
        //修改後的英文單字陣列
        
        for (var i=0;i<OriChi.length;i++){
        var random_num=RandomNumberArr[i];
        New_Chi[i]=OriChi[random_num];
        }
        //修改後的翻譯陣列
    
        for(var k=0;k<OriVoc.length;k++){
                    console.log(New_Voc[k].value);
        }
        //顯示修改後的單字陣列
    
        for(var k=0;k<OriChi.length;k++){
                    console.log(New_Chi[k].value);
        }
        //顯示修改後的單字陣列
        
        var RanVoc_Text=document.getElementsByClassName("RanVoc_Text");
        for(var k=0;k<OriVoc.length;k++){
        RanVoc_Text[k].value=New_Voc[k].value;
        }
};
////////////////////////////////////
    


function check(){
//console.log(New_Chi[0].value);(看陣列內的值)
    var UsrAnswer_Text=document.getElementsByClassName("UsrAnswer_Text");
    var Bingo=document.getElementsByClassName("Bingo");
    var Wrong=document.getElementsByClassName("Wrong");
    
    for(var i=0;i<UsrAnswer_Text.length;i++){
        if (UsrAnswer_Text[i].value==New_Chi[i].value){
        Bingo[i].style.color="Green";
        Wrong[i].style.color="White";
        }else{
        Bingo[i].style.color="White";
        Wrong[i].style.color="Red";
        }
    }
 
};




















//function  getRandomNumberArray(產生數據Demo)
function getRandomNumberArray(length,max){
            var num_arr=[];
    for(var i=0;i<length;i++){
      do {
          var exist=false;
          var num=Math.floor(Math.random()*max);
            if(num_arr.indexOf(num)==(-1)){
              num_arr[i]=num;
              break;
            }else{exist=true;}
          } while(exist);
    }
  return(num_arr);
  };
//以上是產生一個亂數的矩陣（而且不重複）
////////////////////////////////////


//function  getRandomIndexArray(產生數據Demo)
  function getRandomIndexArray(OriArray,max,length){
        var NewArray=[];
        var num_arr=[];
    
    for(var i=0;i<length;i++){
      do {
          var exist=false;
          var num=Math.floor(Math.random()*max);
            if(num_arr.indexOf(num)==(-1)){
              num_arr[i]=num;
              break;
            }else{exist=true;}
          } while(exist);
    }
    //產生random array
      
    for(var j=0;j<length;j++){
        console.log(OriArray[j].value);
      }
        for (var i=0;i<length;i++){
        var random_num=num_arr[i];
        NewArray[i]=OriArray[random_num];
        }
      
      console.log(NewArray);
  return(NewArray);
      
  };
////////////////////////////////////
