//generates different salutations

function sals(a,b,c,d,e,id)
{
    var sal = document.getElementsByClassName(id);
    sal[0].style.top=a;
    sal[0].style.left=b;
    sal[0].style.color=c;
    sal[0].style.fontsize=d;
    sal[0].style.zindex=e;
}

 sals("5%","50%","yellow","250px","20","GB");
 sals('1%','10%','black','150px','19',"ES");
 sals('15%','30%','red','100px','18',"FR");
 sals('35%','60%','white','170px','17',"IT");
 sals('54%','20%','grey','170px','16',"GE");
 sals('54%','35%','blue','100px','15',"JP");
 sals('10%','55%','lime','80px','14',"RU");
 sals('27%','21%','pink','650px','13',"KO");
