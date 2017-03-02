function getDataExtTemp(viewPath, dataPath, templateContainer){
  var rawTemplate;
  var templateRequest = new XMLHttpRequest();
  var dataRequest = new XMLHttpRequest();

  templateRequest.open('GET', viewPath, true);
  templateRequest.onload = function(){
    rawTeplate = templateRequest.responseText;
    dataRequest.open('GET', dataPath, true);
    dataRequest.onload = function(){
      var data = JSON.parse(dataRequest.responseText);
      createHtml(data, templateContainer);
    }
    dataRequest.send();
  }
  templateRequest.send();

  function createHtml(data,templateContainer){
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedHtml = compiledTemplate(data);
    var container = document.getElementById(templateContainer);
    container.innerHTML = generatedHtml;
  }
}
