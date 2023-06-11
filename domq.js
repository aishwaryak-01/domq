//querySelector
//2nd element bg-color yellow
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
console.log(secondItem);
secondItem.style.backgroundColor="yellow";

//3rd element invisible
var ThirdItem=document.querySelector('.list-group-item:nth-child(3)').style.display='none';
console.log(ThirdItem);

//querySelectorAll
//2nd element font color green
var secondItem=document.querySelectorAll('.list-group-item');
console.log(secondItem);
secondItem[1].style.color="green";

//odd items bg color black
var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
console.log(odd);
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="black";
}