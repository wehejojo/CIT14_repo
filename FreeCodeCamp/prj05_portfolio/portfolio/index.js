const openLink = (url, target) => window.open(url, target);

$(".logo")
    .css({
            "padding": "0px",
            "cursor": "pointer"
        })
    .click(() => {    
        window.location.hash = "#";
    });

$("button").click((e) => {
    let id = $(e.currentTarget).attr("id");
    if (id === "visit_prj1"){
        openLink('https://wehejojo.github.io/prj01_SurveyForm/', '_blank');
    } else if (id === "visit_prj2"){
        openLink('https://wehejojo.github.io/prj02_TributePage/', '_blank');
    } else if (id === "visit_prj3"){
        openLink('https://wehejojo.github.io/prj03_TechnicalDocument/', '_blank');
    } else if (id === "visit_prj4"){
        openLink('https://wehejojo.github.io/prj04_ProductLanding/', '_blank');
    } else if (id === "visit_css"){
        openLink('https://wehejojo.github.io/CSS-Exercies/', '_blank');
    } else if (id === "continue") {
        window.location.hash = "#";
        window.location.hash = "#projects";
    }
});