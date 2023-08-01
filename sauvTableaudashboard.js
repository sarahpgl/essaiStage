// INDEX JRM


indexjrm =0;
for ( i =0; i<data.series[0].fields[0].values.buffer.length; i++){
  if(data.series[0].fields[0].values.buffer[i]== "fiber_paper"){
    indexjrm=i;
    break;
  }
}
totaljrm =data.series[0].fields[2].values.buffer[indexjrm]+data.series[0].fields[4].values.buffer[indexjrm]+data.series[0].fields[6].values.buffer[indexjrm]+data.series[0].fields[8].values.buffer[indexjrm]+data.series[0].fields[10].values.buffer[indexjrm];



// INDEX EMR


indexcartonbrun =0;
for ( i =0; i<data.series[0].fields[0].values.buffer.length; i++){
  if(data.series[0].fields[0].values.buffer[i]== "corrugated_cardboard"){
    indexcartonbrun=i;
   
    break;
  }
}
totalcartonbrun =data.series[0].fields[2].values.buffer[indexcartonbrun]+data.series[0].fields[4].values.buffer[indexcartonbrun]+data.series[0].fields[6].values.buffer[indexcartonbrun]+data.series[0].fields[8].values.buffer[indexcartonbrun]+data.series[0].fields[10].values.buffer[indexcartonbrun];

indexcartonnettes =0;
for ( i =0; i<data.series[0].fields[0].values.buffer.length; i++){
  if(data.series[0].fields[0].values.buffer[i]== "fiber_boxboard"){
    indexcartonnettes=i;
   
    break;
  }
}
totalcartonnettes =data.series[0].fields[2].values.buffer[indexcartonnettes]+data.series[0].fields[4].values.buffer[indexcartonnettes]+data.series[0].fields[6].values.buffer[indexcartonnettes]+data.series[0].fields[8].values.buffer[indexcartonnettes]+data.series[0].fields[10].values.buffer[indexcartonnettes];



// INDEX REFUS / FILM


indexrefus =[0,0,0,0];
for ( i =0; i<data.series[0].fields[0].values.buffer.length; i++){
  if(data.series[0].fields[0].values.buffer[i]== "miscellaneous"){
    indexrefus[0]=i;
  }
  if(data.series[0].fields[0].values.buffer[i]== "plastic_black"){
    indexrefus[1]=i;
  }
  if(data.series[0].fields[0].values.buffer[i]== "organic"){
    indexrefus[2]=i;
  }
  if(data.series[0].fields[0].values.buffer[i]== "glass_container"){
    indexrefus[3]=i;
  }
 
}


totalrefus=0
for (i=0; i<indexrefus.length; i++){
    var1 =data.series[0].fields[2].values.buffer[indexrefus[i]]
    var2=data.series[0].fields[4].values.buffer[indexrefus[i]]
    var3=data.series[0].fields[6].values.buffer[indexrefus[i]]
    var4=data.series[0].fields[8].values.buffer[indexrefus[i]]
    var5=data.series[0].fields[10].values.buffer[indexrefus[i]]
     if (isNaN(var1) ){
        var1=0
     }
     if (isNaN(var2) ){
        var2=0
     }
     if (isNaN(var3) ){
        var3=0
     }
     if (isNaN(var4) ){
        var4=0
     }
     if (isNaN(var5) ){
        var5=0
     }
  totalrefus +=var1+var2+var3+var4+var5;
}


indexfilm =[0,0];
for ( i =0; i<data.series[0].fields[0].values.buffer.length; i++){
  if(data.series[0].fields[0].values.buffer[i]== "snack_packaging" ){
    indexfilm[0]=i;
     
  }
  if(data.series[0].fields[0].values.buffer[i]== "thin_film" ){
    indexfilm[1]=i;
     
  }
 
}

totalfilm=0
for (i=0; i<indexfilm.length; i++){
   totalfilm +=data.series[0].fields[2].values.buffer[indexfilm[i]]+data.series[0].fields[4].values.buffer[indexfilm[i]]+data.series[0].fields[6].values.buffer[indexfilm[i]]+data.series[0].fields[8].values.buffer[indexfilm[i]]+data.series[0].fields[10].values.buffer[indexfilm[i]];

}



//INDEX PET CLAIR / PEPP


indexpppe =[0,0,0,0,0,0,0,0,0];
for ( i =0; i<data.series[0].fields[0].values.buffer.length; i++){
  if(data.series[0].fields[0].values.buffer[i]== "plastic_lids" ){
    indexpppe[0]=i;
     
  }
  if(data.series[0].fields[0].values.buffer[i]== "plastic_caps" ){
    indexpppe[1]=i;
     
  }
  if(data.series[0].fields[0].values.buffer[i]== "plastic_cup_clear" ){
    indexpppe[2]=i;
    
  }
  if(data.series[0].fields[0].values.buffer[i]== "blue_pet" ){
    indexpppe[3]=i;
    
  }
  if(data.series[0].fields[0].values.buffer[i]== "natural_hdpe" ){
    indexpppe[4]=i;
    
  }
  if(data.series[0].fields[0].values.buffer[i]== "colored_hdpe" ){
    indexpppe[5]=i;
    
  }

  if(data.series[0].fields[0].values.buffer[i]== "plastic_pp_bottle" ){
    indexpppe[6]=i;
    
  }

  if(data.series[0].fields[0].values.buffer[i]== "plastic_pp_pod" ){
    indexpppe[7]=i;
    
  }
  if(data.series[0].fields[0].values.buffer[i]== "plastic_cups" ){
    indexpppe[8]=i;
    
  }
}
totalpppe =0
for (i=0; i<indexpppe.length; i++){
    var2 =  data.series[0].fields[2].values.buffer[indexpppe[i]];
    var4 =  data.series[0].fields[4].values.buffer[indexpppe[i]];
    var6 =  data.series[0].fields[6].values.buffer[indexpppe[i]];
    var8 =  data.series[0].fields[8].values.buffer[indexpppe[i]];
    var10 =  data.series[0].fields[10].values.buffer[indexpppe[i]];
    if (isNaN(var2) )
    {
        var2=0
    }
    if (isNaN(var4) )
    {
        var4=0
    }
    if (isNaN(var6) )
    {
        var6=0
    }
    if (isNaN(var8) )
    {
        var8=0
    }
    if (isNaN(var10) )
    {
        var10=0
    }
    totalpppe += var2+var4+var6+var8+var10;
     
  
  
}




//INDEX PET FONCE /F.DEV / PCC
indexfonce =[0,0,0,0,0,0,0,0];
for ( i =0; i<data.series[0].fields[0].values.buffer.length; i++){
  if(data.series[0].fields[0].values.buffer[i]== "opaque_pet" ){
    indexfonce[0]=i;
     
  }
  if(data.series[0].fields[0].values.buffer[i]== "colored_pet" ){
    indexfonce[1]=i;
     
  }
  if(data.series[0].fields[0].values.buffer[i]== "brown_pet" ){
    indexfonce[2]=i;
    
  }
  if(data.series[0].fields[0].values.buffer[i]== "green_pet" ){
    indexfonce[3]=i;
    
  }
  if(data.series[0].fields[0].values.buffer[i]== "plastic_clamshell" ){
    indexfonce[4]=i;
    
  }
  if(data.series[0].fields[0].values.buffer[i]== "plastic_ps_foam" ){
    indexfonce[5]=i;
    
  }

  if(data.series[0].fields[0].values.buffer[i]== "plastic_ps_rigid" ){
    indexfonce[6]=i;
    
  }

  if(data.series[0].fields[0].values.buffer[i]== "carton" ){
    indexfonce[7]=i;
    
  }
 
}






totalfonce =0
for (i=0; i<indexpppe.length; i++){
    var2 =  data.series[0].fields[2].values.buffer[indexfonce[i]];
    var4 =  data.series[0].fields[4].values.buffer[indexfonce[i]];
    var6 =  data.series[0].fields[6].values.buffer[indexfonce[i]];
    var8 =  data.series[0].fields[8].values.buffer[indexfonce[i]];
    var10 =  data.series[0].fields[10].values.buffer[indexfonce[i]];
    if (isNaN(var2) )
    {
        var2=0
    }
    if (isNaN(var4) )
    {
        var4=0
    }
    if (isNaN(var6) )
    {
        var6=0
    }
    if (isNaN(var8) )
    {
        var8=0
    }
    if (isNaN(var10) )
    {
        var10=0
    }
    totalfonce += var2+var4+var6+var8+var10;
     
  
  
}






// TOTAUX NOMBRES DE DECHETS PAR MACHINE
total163 =0
for (i = 0; i< data.series[0].fields[2].values.buffer.length; i++)
{
  if (data.series[0].fields[2].values.buffer[i] != null){
       total163 +=data.series[0].fields[2].values.buffer[i]

  }
}


 total164 =0
  for (i = 0; i< data.series[0].fields[6].values.buffer.length; i++)
  {
    if (data.series[0].fields[6].values.buffer[i] != null){
         total164 +=data.series[0].fields[6].values.buffer[i]

    }
  }

 total165 =0
  for (i = 0; i< data.series[0].fields[8].values.buffer.length; i++)
  {
    if (isNaN(data.series[0].fields[8].values.buffer[i])==0){
         total165 +=data.series[0].fields[8].values.buffer[i]

    }
  }

 total166 =0
  for (i = 0; i< data.series[0].fields[10].values.buffer.length; i++)
  {
    if (isNaN(data.series[0].fields[10].values.buffer[i]) ==0){
         total166 +=data.series[0].fields[10].values.buffer[i]

    }
  }
   total167 =0
  for (i = 0; i< data.series[0].fields[4].values.buffer.length; i++)
  {
    if (isNaN(data.series[0].fields[4].values.buffer[i] )==0){
         total167 +=data.series[0].fields[4].values.buffer[i]
 
    }
  }


// MATIERE PRODUITE
//JRM
 htmlgraphicsValue = htmlNode.getElementById('jrm');

if (htmlgraphicsValue) {
value =0
  value =data.series[0].fields[13].values.left.buffer[indexjrm]*data.series[0].fields[13].values.right.buffer[indexjrm];

    htmlgraphicsValue.textContent = (value).toPrecision(3) /1000;
 
}

//EMR
htmlgraphicsValue = htmlNode.getElementById('emr');

if (htmlgraphicsValue) {
   value =0
   value2=0
    value =data.series[0].fields[14].values.left.buffer[indexcartonbrun]*data.series[0].fields[14].values.right.buffer[indexcartonbrun];
    value2 =data.series[0].fields[14].values.left.buffer[indexcartonnettes]*data.series[0].fields[14].values.right.buffer[indexcartonnettes];

    htmlgraphicsValue.textContent = (value+value2).toPrecision(3) /1000;
 
}

//PET
htmlgraphicsValue = htmlNode.getElementById('pet');

if (htmlgraphicsValue) {
 value = 0
    for ( j = 0; j< indexpppe.length; j++){
        value+=data.series[0].fields[16].values.left.buffer[indexpppe[j]]*data.series[0].fields[16].values.right.buffer[indexpppe[j]];
    }
    

    htmlgraphicsValue.textContent = (value).toPrecision(3)/1000;
}  
   

// REFUS
 htmlgraphicsValue = htmlNode.getElementById('refus');

if (htmlgraphicsValue) {
 value = 0
    for ( j = 0; j< indexrefus.length; j++){
        value+=data.series[0].fields[15].values.left.buffer[indexrefus[j]]*data.series[0].fields[15].values.right.buffer[indexrefus[j]];
    }
    for ( j = 0; j< indexfilm.length; j++){
        value+=data.series[0].fields[15].values.left.buffer[indexfilm[j]]*data.series[0].fields[15].values.right.buffer[indexfilm[j]];
    }

    htmlgraphicsValue.textContent = (value).toPrecision(3)/1000 ;
  
   
}

//PET FONCE ET AUTRES
htmlgraphicsValue = htmlNode.getElementById('fonce');

if (htmlgraphicsValue) {
 value = 0
    for ( j = 0; j< indexfonce.length; j++){
        value+=data.series[0].fields[17].values.left.buffer[indexfonce[j]]*data.series[0].fields[17].values.right.buffer[indexfonce[j]];
    }
    

    htmlgraphicsValue.textContent = (value).toPrecision(3)/1000;
}  
   

// QUALITE
//JRM
 htmlgraphicsValue = htmlNode.getElementById('jrmq');

if (htmlgraphicsValue) {
  value = 0
  value =data.series[0].fields[2].values.buffer[indexjrm];
  
  htmlgraphicsValue.textContent = (value/total163).toPrecision(3) * 100;
 
}

//EMR
 htmlgraphicsValue = htmlNode.getElementById('emrq');
 if (htmlgraphicsValue) {
value = 0
value2=0
  value =data.series[0].fields[6].values.buffer[indexcartonbrun];
  value2 =data.series[0].fields[6].values.buffer[indexcartonnettes];
  


    htmlgraphicsValue.textContent = ((value+value2)/total164).toPrecision(3) * 100;

}
//PET
htmlgraphicsValue = htmlNode.getElementById('petq');

if (htmlgraphicsValue) {
    value =0
    for ( j = 0; j< indexpppe.length; j++){
        value += data.series[0].fields[10].values.buffer[indexpppe[j]];
    }
    
    htmlgraphicsValue.textContent = ((value)/total166).toPrecision(3) *100;
  
}


//REFUS
 htmlgraphicsValue = htmlNode.getElementById('refusq');

if (htmlgraphicsValue) {
    value =0
    for ( j = 0; j< indexrefus.length; j++){
        value += data.series[0].fields[8].values.buffer[indexrefus[j]];
    }
    for ( j = 0; j< indexfilm.length; j++){
        value += data.series[0].fields[8].values.buffer[indexfilm[j]];
    } 
 
 

    htmlgraphicsValue.textContent = ((value)/total165).toPrecision(3)*100;
  
}


//PET FONCE ET AUTRES
htmlgraphicsValue = htmlNode.getElementById('fonceq');

if (htmlgraphicsValue) {
    value =0
    for ( j = 0; j< indexfonce.length; j++){
        value += data.series[0].fields[4].values.buffer[indexfonce[j]];
    }
    
    htmlgraphicsValue.textContent = ((value)/total167).toPrecision(3)*100;
  
}

//TAUX DE CAPTATION
//JRM
 htmlgraphicsValue = htmlNode.getElementById('jrmt');

if (htmlgraphicsValue) {
    value =0
    for ( j = 0; j< indexrefus.length; j++){
       vari = data.series[0].fields[2].values.buffer[indexrefus[j]];
       if(isNaN(vari)){
         vari=0
       }
       value += vari;
    }  
    capt1 = (total163/(total163+ value))
    htmlgraphicsValue.textContent =capt1.toPrecision(3)*100;

}


//EMR
 htmlgraphicsValue = htmlNode.getElementById('emrt');

if (htmlgraphicsValue) {
   
    value =0
    for ( j = 0; j< indexrefus.length; j++){
        var1 =data.series[0].fields[6].values.buffer[indexrefus[j]];
        if (isNaN(var1)){
        var1=0

        }
        value += var1
        
    }  
    capt2 = (total164/(total164+ value))
    htmlgraphicsValue.textContent =capt2.toPrecision(3)*100;
 
}
//PET


htmlgraphicsValue = htmlNode.getElementById('pett');

if (htmlgraphicsValue) {
  
    value =0
    for ( j = 0; j< indexrefus.length; j++){
      vari = data.series[0].fields[10].values.buffer[indexrefus[j]];
      if(isNaN(vari)){
        vari = 0
      }
      value += vari
    }  
    capt3 =(total166/(total166+ value))
    htmlgraphicsValue.textContent =capt3.toPrecision(3) *100;
}

//REFUS

 htmlgraphicsValue = htmlNode.getElementById('refust');

if (htmlgraphicsValue) {
  
    value =0
    for ( j = 0; j< indexrefus.length; j++){
      vari = data.series[0].fields[8].values.buffer[indexrefus[j]];
      if(isNaN(vari)){
        vari =0
      }
      value += vari;
        
    }  
    capt4 = (total165/(total165+ value))
    htmlgraphicsValue.textContent =capt4.toPrecision(3)*100;
}

//PET FONCE ET AUTRES
htmlgraphicsValue = htmlNode.getElementById('foncet');

if (htmlgraphicsValue) {
  
    value =0
    for ( j = 0; j< indexrefus.length; j++){
      vari = data.series[0].fields[4].values.buffer[indexrefus[j]];
      if (isNaN(vari)){
        vari =0
      }
      value += vari;
    }  
    capt5 =(total167/(total167+ value))
    htmlgraphicsValue.textContent =capt5.toPrecision(3)*100;
}


//DIFFUSION
//JRM
 htmlgraphicsValue = htmlNode.getElementById('jrmd');

if (htmlgraphicsValue) {
  valuejrm1 =data.series[0].fields[2].values.buffer[indexjrm];
  if (isNaN(valuejrm1)){
    valuejrm1 = 0
  }
  
  diffusionjrm1 =((valuejrm1/totaljrm)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionjrm1;

}



 htmlgraphicsValue = htmlNode.getElementById('jrmd2');

if (htmlgraphicsValue) {
   
  valuejrm2 =data.series[0].fields[6].values.buffer[indexjrm];
  if (isNaN(valuejrm2)){
    valuejrm2 = 0
  }
  diffusionjrm2 = (valuejrm2*100/totaljrm).toPrecision(3);
  
    htmlgraphicsValue.textContent = diffusionjrm2;
  
 
}


 htmlgraphicsValue = htmlNode.getElementById('jrmd3');

if (htmlgraphicsValue) {
  
  valuejrm3 =data.series[0].fields[10].values.buffer[indexjrm];
  if (isNaN(valuejrm3)){
    valuejrm3 = 0
  }
  diffusionjrm3 =(valuejrm3*100/totaljrm).toPrecision(3);
 

    htmlgraphicsValue.textContent =diffusionjrm3;

}


 htmlgraphicsValue = htmlNode.getElementById('jrmd4');

if (htmlgraphicsValue) {
  
  valuejrm4 =data.series[0].fields[4].values.buffer[indexjrm];
  if (isNaN(valuejrm4)){
    valuejrm4 = 0
  }
  diffusionjrm4 = (valuejrm4*100/totaljrm).toPrecision(3);
  

    htmlgraphicsValue.textContent =diffusionjrm4;
 
}

 htmlgraphicsValue = htmlNode.getElementById('jrmd5');

if (htmlgraphicsValue) {
  
  valuejrm5 =data.series[0].fields[8].values.buffer[indexjrm];
  if (isNaN(valuejrm5)){
    valuejrm5 = 0
  }
  diffusionjrm5 = (valuejrm5*100/totaljrm).toPrecision(3);

    htmlgraphicsValue.textContent = diffusionjrm5;

}

 htmlgraphicsValue = htmlNode.getElementById('total1');

if (htmlgraphicsValue) {
  
  
    htmlgraphicsValue.textContent = (parseFloat(diffusionjrm1)+parseFloat(diffusionjrm2)+parseFloat(diffusionjrm3)+parseFloat(diffusionjrm4)+parseFloat(diffusionjrm5)).toPrecision(4);
 
}

//EMR
 htmlgraphicsValue = htmlNode.getElementById('emrd');

if (htmlgraphicsValue) {
   
 
  valueemr1 =data.series[0].fields[2].values.buffer[indexcartonbrun];
 
  valueemr1_2 =data.series[0].fields[2].values.buffer[indexcartonnettes];
  if (isNaN(valueemr1)){
    valueemr1 = 0
  }
  if (isNaN(valueemr1_2)){
    valueemr1_2 = 0
  }
  diffusionemr1 =(((valueemr1+valueemr1_2)/(totalcartonbrun+totalcartonnettes))*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionemr1;

}

 htmlgraphicsValue = htmlNode.getElementById('emrd2');

if (htmlgraphicsValue) {

 
  valueemr2 =data.series[0].fields[6].values.buffer[indexcartonbrun];
  valueemr2_2 =data.series[0].fields[6].values.buffer[indexcartonnettes];
  if (isNaN(valueemr2)){
    valueemr2 = 0
  }
  if (isNaN(valueemr2_2)){
    valueemr2_2 = 0
  }
  diffusionemr2 = (((valueemr2+valueemr2_2)/(totalcartonbrun+totalcartonnettes))*100).toPrecision(3)
  
  htmlgraphicsValue.textContent = diffusionemr2;
  
}


 htmlgraphicsValue = htmlNode.getElementById('emrd3');

if (htmlgraphicsValue) {

 
  valueemr3 =data.series[0].fields[10].values.buffer[indexcartonbrun];
  valueemr3_2 =data.series[0].fields[10].values.buffer[indexcartonnettes];
  if (isNaN(valueemr3)){
    valueemr3 = 0
  }
  if (isNaN(valueemr3_2)){
    valueemr3_2 = 0
  }
  diffusionemr3 = (((valueemr3+valueemr3_2)/(totalcartonbrun+totalcartonnettes))*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent = diffusionemr3;
  
}


 htmlgraphicsValue = htmlNode.getElementById('emrd4');

if (htmlgraphicsValue) {

 
  valueemr4 =data.series[0].fields[4].values.buffer[indexcartonbrun];
  valueemr4_2 =data.series[0].fields[4].values.buffer[indexcartonnettes];
  if (isNaN(valueemr4)){
    valueemr4_2 = 0
  }
  if (isNaN(valueemr4_2)){
    valueemr4_2 = 0
  }
  diffusionemr4 = (((valueemr4+valueemr4_2)/(totalcartonbrun+totalcartonnettes))*100).toPrecision(3)
  


  htmlgraphicsValue.textContent = diffusionemr4;

}


 htmlgraphicsValue = htmlNode.getElementById('emrd5');

if (htmlgraphicsValue) {

 
  valueemr5 =data.series[0].fields[8].values.buffer[indexcartonbrun];
  valueemr5_2 =data.series[0].fields[8].values.buffer[indexcartonnettes];
  if (isNaN(valueemr4)){
    valueemr5 = 0
  }
  if (isNaN(valueemr4_2)){
    valueemr5_2 = 0
  }
  diffusionemr5 = (((valueemr5+valueemr5_2)/(totalcartonbrun+totalcartonnettes))*100).toPrecision(3)
  
  
    htmlgraphicsValue.textContent = diffusionemr5;
 
  
}

 htmlgraphicsValue = htmlNode.getElementById('total2');

if (htmlgraphicsValue) {

    htmlgraphicsValue.textContent = (parseFloat(diffusionemr1)+parseFloat(diffusionemr2)+parseFloat(diffusionemr3)+parseFloat(diffusionemr4)+parseFloat(diffusionemr5)).toPrecision(4);
  
}

//PET
htmlgraphicsValue = htmlNode.getElementById('petd');

if (htmlgraphicsValue) {
    valuepet1 =0
  for(i =0; i<indexpppe.length; i++){
    vari  = data.series[0].fields[2].values.buffer[indexpppe[i]]
    if (isNaN(vari)){
      vari = 0
    }
    
    valuepet1 +=vari;
    
  }

  
  diffusionpet1 =((valuepet1/totalpppe)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionpet1;

}



 htmlgraphicsValue = htmlNode.getElementById('petd2');

 if (htmlgraphicsValue) {
    valuepet2 =0
  for(i =0; i<indexpppe.length; i++){
    
    
    vari  = data.series[0].fields[6].values.buffer[indexpppe[i]]
    if (isNaN(vari)){
      vari = 0
    }
    valuepet2 +=vari;
  }
  
  diffusionpet2 =((valuepet2/totalpppe)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionpet2;
 }

 htmlgraphicsValue = htmlNode.getElementById('petd3');

 if (htmlgraphicsValue) {
    valuepet3 =0
  for(i =0; i<indexpppe.length; i++){
    
    vari  =data.series[0].fields[10].values.buffer[indexpppe[i]]
    if (isNaN(vari)){
      vari = 0
    }
    valuepet3+=vari;

  }
  
  diffusionpet3 =((valuepet3/totalpppe)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionpet3;
 }


 htmlgraphicsValue = htmlNode.getElementById('petd4');


if (htmlgraphicsValue) {
    valuepet4 =0
    for(i =0; i<indexpppe.length; i++){
      vari  =data.series[0].fields[4].values.buffer[indexpppe[i]];
    if (isNaN(vari)){
      vari = 0
    }
    valuepet4+=vari;
    
      
    }
    
    diffusionpet4 =((valuepet4/totalpppe)*100).toPrecision(3)
    
    

    htmlgraphicsValue.textContent =diffusionpet4;
    }
    

 htmlgraphicsValue = htmlNode.getElementById('petd5');

 if (htmlgraphicsValue) {
    valuepet5 =0
  for(i =0; i<indexpppe.length; i++){
    vari =data.series[0].fields[8].values.buffer[indexpppe[i]];
    if (isNaN(vari)){
      vari = 0
    }
    valuepet5 +=vari;
    
  }
  
  diffusionpet5 =((valuepet5/totalpppe)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionpet5;
 }


 htmlgraphicsValue = htmlNode.getElementById('total3');

if (htmlgraphicsValue) {
  
  
    htmlgraphicsValue.textContent = (parseFloat(diffusionpet1)+parseFloat(diffusionpet2)+parseFloat(diffusionpet3)+parseFloat(diffusionpet4)+parseFloat(diffusionpet5)).toPrecision(4);
 
}

//PET FONCE ET AUTRES

htmlgraphicsValue = htmlNode.getElementById('fonced');

if (htmlgraphicsValue) {
    valuefonce1 =0
  for(i =0; i<indexfonce.length; i++){
    vari = data.series[0].fields[2].values.buffer[indexfonce[i]];
    if (isNaN(vari)==0){
        valuefonce1 +=vari
    }
    
  }

  
  diffusionfonce1 =((valuefonce1/totalfonce)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionfonce1;

}



 htmlgraphicsValue = htmlNode.getElementById('fonced2');

 if (htmlgraphicsValue) {
    valuefonce2 =0
  for(i =0; i<indexfonce.length; i++){
    vari =data.series[0].fields[6].values.buffer[indexfonce[i]];
    if (isNaN(vari)==0){
        valuefonce2 += vari     
    }
    
  }
  
  diffusionfonce2 =((valuefonce2/totalfonce)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionfonce2;
 }

 htmlgraphicsValue = htmlNode.getElementById('fonced3');

 if (htmlgraphicsValue) {
    valuefonce3=0
  for(i =0; i<indexfonce.length; i++){
    vari =data.series[0].fields[10].values.buffer[indexfonce[i]]
    if (isNaN(vari)==0){
    valuefonce3 += vari;
    }

  }
  
  diffusionfonce3 =((valuefonce3/totalfonce)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionfonce3;
 }


 htmlgraphicsValue = htmlNode.getElementById('fonced4');


if (htmlgraphicsValue) {
    valuefonce4 =0
    for(i =0; i<indexfonce.length; i++){
        vari =data.series[0].fields[4].values.buffer[indexfonce[i]];
        if (isNaN(vari)==0){
            valuefonce4 += vari;
        }
      
    }
    
    diffusionfonce4 =((valuefonce4/totalfonce)*100).toPrecision(3)
    
    

    htmlgraphicsValue.textContent =diffusionfonce4;
    }
    

 htmlgraphicsValue = htmlNode.getElementById('fonced5');

 if (htmlgraphicsValue) {
    valuefonce5 =0
  for(i =0; i<indexfonce.length; i++){
    vari =data.series[0].fields[8].values.buffer[indexfonce[i]];
    if (isNaN(vari)==0){
    valuefonce5 +=vari;
    }
    
  }
  
  diffusionfonce5 =((valuefonce5/totalfonce)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionfonce5;
 }


 htmlgraphicsValue = htmlNode.getElementById('total4');

if (htmlgraphicsValue) {
  
  
    htmlgraphicsValue.textContent = (parseFloat(diffusionfonce1)+parseFloat(diffusionfonce2)+parseFloat(diffusionfonce3)+parseFloat(diffusionfonce4)+parseFloat(diffusionfonce5)).toPrecision(4);
 
}

//FILMS

htmlgraphicsValue = htmlNode.getElementById('filmd');

if (htmlgraphicsValue) {
    valuefilm1 =0
  for(i =0; i<indexfilm.length; i++){
    vari = data.series[0].fields[2].values.buffer[indexfilm[i]];
    
    if (isNaN(vari)==0){
        valuefilm1 +=vari
        
    }
    
  }

  
  diffusionfilm1 =((valuefilm1/totalfilm)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionfilm1;

}



 htmlgraphicsValue = htmlNode.getElementById('filmd2');

 if (htmlgraphicsValue) {
    valuefilm2 =0
  for(i =0; i<indexfilm.length; i++){
    vari =data.series[0].fields[6].values.buffer[indexfilm[i]];
    
    if (isNaN(vari)==0){
        valuefilm2 += vari     
    }
    
  }
  
  diffusionfilm2 =((valuefilm2/totalfilm)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionfilm2;
 }

 htmlgraphicsValue = htmlNode.getElementById('filmd3');

 if (htmlgraphicsValue) {
    valuefilm3=0
  for(i =0; i<indexfilm.length; i++){
    vari =data.series[0].fields[10].values.buffer[indexfilm[i]]
    
    if (isNaN(vari)==0){
    valuefilm3 += vari;
    }

  }
  
  diffusionfilm3 =((valuefilm3/totalfilm)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionfilm3;
 }


 htmlgraphicsValue = htmlNode.getElementById('filmd4');


if (htmlgraphicsValue) {
    valuefilm4 =0
    for(i =0; i<indexfilm.length; i++){
        vari =data.series[0].fields[4].values.buffer[indexfilm[i]];
        
        if (isNaN(vari)==0){
            valuefilm4 += vari;
        }
      
    }
    
    diffusionfilm4 =((valuefilm4/totalfilm)*100).toPrecision(3)
    
    

    htmlgraphicsValue.textContent =diffusionfilm4;
    }
    

 htmlgraphicsValue = htmlNode.getElementById('filmd5');

 if (htmlgraphicsValue) {
    valuefilm5 =0
  for(i =0; i<indexfilm.length; i++){
    vari =data.series[0].fields[8].values.buffer[indexfilm[i]];
    
    if (isNaN(vari)==0){
    valuefilm5 +=vari;
    }
    
  }
  
  diffusionfilm5 =((valuefilm5/totalfilm)*100).toPrecision(3)
  
  

    htmlgraphicsValue.textContent =diffusionfilm5;
 }


 htmlgraphicsValue = htmlNode.getElementById('total5');

if (htmlgraphicsValue) {
  
  
    htmlgraphicsValue.textContent = (parseFloat(diffusionfilm1)+parseFloat(diffusionfilm2)+parseFloat(diffusionfilm3)+parseFloat(diffusionfilm4)+parseFloat(diffusionfilm5)).toPrecision(4);
 
}


htmlgraphicsValue = htmlNode.getElementById('perte1');

if (htmlgraphicsValue) {
  
    perte1 =(1-capt1)
    htmlgraphicsValue.textContent = perte1.toPrecision(2)*100
}

htmlgraphicsValue = htmlNode.getElementById('perte2');

if (htmlgraphicsValue) {
  
  perte2=(1-capt2)
    htmlgraphicsValue.textContent = perte2.toPrecision(2)*100
}

htmlgraphicsValue = htmlNode.getElementById('perte3');

if (htmlgraphicsValue) {
  
  perte3 =(1-capt3)
    htmlgraphicsValue.textContent = perte3.toPrecision(2) *100
}

htmlgraphicsValue = htmlNode.getElementById('perte4');

if (htmlgraphicsValue) {
  
  perte4 =(1-capt4)
    htmlgraphicsValue.textContent = perte4.toPrecision(2) *100
}
htmlgraphicsValue = htmlNode.getElementById('perte5');

if (htmlgraphicsValue) {
  
  perte5=(1-capt5)
    htmlgraphicsValue.textContent =perte5.toPrecision(2) *100
}

htmlgraphicsValue = htmlNode.getElementById('pertetotale');

if (htmlgraphicsValue) {
  
  
    htmlgraphicsValue.textContent = (parseFloat(perte1) + parseFloat(perte2) + parseFloat(perte3) + parseFloat(perte4) +parseFloat(perte5)).toPrecision(4) *100;
}
value =data.series
console.log(value)