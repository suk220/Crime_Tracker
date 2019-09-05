var myData = new Array(500);
var option1 = new Array(12);
var option2 = new Array(12);
let btn;
var choice1,choice2;
let f1,f2;
var timelin = new Array(12);
timelin[0]=2001;
for(let q=1;q<12;q++){
	timelin[q]=timelin[q-1]+1;
}




	let xhr = new XMLHttpRequest;
	xhr.addEventListener('load',function(){
		//json ka data
		let x=JSON.parse(this.responseText);
		let field=x.fields;
		let data=x.data;

		//data cleaning
		let i=0,j=0;
		while(i<data.length)
		{
			if(data[i][0]=="CHHATTISGARH")
			{
				myData[j]=new Array(3);
				myData[j][0]=data[i][1];
				myData[j][1]=data[i][2];
				myData[j][2]=data[i][3];
				j++;
			}

			i++;

		}

		//logging data in console
		//console.log(myData);


	})

	xhr.open('GET','https://data.gov.in/node/87614/datastore/export/json');
	xhr.send();






var z=Highcharts.chart('container', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'murder'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'year'
            },
            yAxis: {
                title: {
                    text: 'murders'
                }
            },
            legend: {
                enabled: true
            },

            series: [{
                name: choice1,
                data: []
            },
            {
                name: choice2,
                data: []
            }]
        });




		function plotGraphs(){

				for(let i=0;i<12;i++){

					z.series[0].addPoint([timelin[i],option1[i]]);
					z.series[1].addPoint([timelin[i],option2[i]]);

			   }
			}




btn=document.getElementById('submit');
btn.addEventListener('click',function(){
	f1=document.getElementById('form1');
	f2=document.getElementById('form2');
	f1=f1.getElementsByTagName('label');
	let i=0,j=0,k=0;
	while(f1[i].getElementsByTagName('input')[0].checked==false)
	{
		i++;
	}
	choice1=f1[i].innerText;

	while(j<12)
	{
		if(myData[k][0]==choice1)
		{
			option1[j]=parseInt(myData[k][2]);
			j++;
		}
		k++;
	}

	f2=f2.getElementsByTagName('label');
	i=0,j=0,k=0;
	while(f2[i].getElementsByTagName('input')[0].checked==false)
	{
		i++;
	}
	choice2=f2[i].innerText;

	while(j<12)
	{
		if(myData[k][0]==choice2)
		{
			option2[j]=parseInt(myData[k][2]);
			j++;
		}
		k++;
	}

	console.log(timelin);
	console.log(option1);
	 console.log(option2);

	 plotGraphs();

})
