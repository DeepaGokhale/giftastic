var stories = ["Donald duck", "Tom and Jerry", "Lion King", "Cinderella", "The Jungle Book", "Aristocats", "Lilo and Stitch", "Alladin", "Pocahontas"];

function renderbuttons(){           
    let x = 0;
    var divId = "div" + x;
    var lineId = "div" + x;
    var newDiv;
    var lineDiv;     
    for(i=0; i<stories.length; i++)
    {
        var thisRow = i - (x * 4);                
        var name = stories[i].split(" ")[0];
        var button;
        //console.log("This row is: " + thisRow);
        if(thisRow == 0 || thisRow == 5){
            //create the new div to hold buttons                    
            x++;                    
            if (x%2 == 0)
            {
                button = $("<button class='stories btn-default'>");               
            }
            else
            {
                button = $("<button class='stories btn-primary'>");
            } 
            button.attr("id", name);
            button.text(stories[i]);    
            button.css("margin", "0px");
            newDiv = $("<div class= 'row " + divId + "' >");
            lineDiv = $("<div class= 'col-md-3 " + lineId + "'>"); 
            lineDiv.css("margin-bottom", "15px");
            lineDiv.append(button);
            newDiv.append(lineDiv);
            $("#buttons-list").append(newDiv);                             
        }
        else if(thisRow < 5)
        {               
            // console.log("x is: " + x);
            if (x%2 == 0)
            {
                button = $("<button class='stories btn-default'>");
            }
            else
            {
                button = $("<button class='stories btn-primary'>");
            } 
            button.attr("id", name);
            button.text(stories[i]);   
            lineDiv = $("<div class= 'col-sm-3 " + lineId + "'>"); 
            lineDiv.css("margin-bottom", "15px");
            lineDiv.append(button);
            newDiv.append(lineDiv);
            $("#buttons-list").append(newDiv); 
        }
        // console.log(button);                
    }
}