function makeTableFromCountry (countries,about){ 
    table = '<div>';
		for(let i = 0; i<countries.length; i++){
			table+= '<div>'
				table+='<div style="text-align: center; background: silver ">' + "<h1>" + countries[i][0] +" - " +countries[i][1] + "</h1>" + "</div>"
				table +='<table width="75%">';
					for(let k = 2; k < 6; k++){
						table+="<tr>"
							table+="<td>" + about[k] + "</td>"
							table+="<td>" + countries[i][k] + "</td>"
						table+="</tr>";
					}
				table+="</table>";
				table+='<table width="100%">';
					for(let k = 6; k < 7; k++){
						table+="<tr>"
							table+="<td>" + about[k] + "</td>"
							table+="<td>"
								let arr = countries[i][k].map((num, number)=>{
									return "<div>" + (number+1) + ") " + num +"</div>"
								}) 
								arr = arr.join(" ")
							table += arr + "</td>"
						table+="<tr>"
					}
					table+="</table>";
					table +='<table width="100%">';
						for(let k = 7; k < about.length; k++){
							table+="<tr>"
								if (k < about.length-1 ) {
									table+="<td>" + about[k] + "</td>"
									table+="<td>"
										let lit = countries[i][k].map((num, number)=>{
											let p = num.map((n)=>{
												return n
											})
											p = p.join(" ")
											return "<div>" +(number+1)+ ") " + p +"</div>"
										}) 
										lit = lit.join(" ")
									table += lit + "</td>"
								}
								else {
									table+="</table>";
									table+='<div style="text-align: center; font-weight: bold">' + about[k] + "</div>"
									table +='<table width="100%" border="1">';
										table+="<tr>"
											for (var key in countries[i][k]) {
												table+="<td>" + key +":" + countries[i][k][key] + "</td>"
											}
										table+="</tr>";
									table+="</table>";
								}
            				table+="</tr>";
						}
			table+= "</div>"
		}
    table+= "</div>"
	return table;
}
document.write(makeTableFromCountry(countries,about))