$(".logo").click(() => {
    window.location.hash = "#";
});
$("#refButton").click(() => {
    window.open(
        'https://primusr.notion.site/primusr/CIT14-Web-Technologies-a86813371bae40019476be62f88a3ca0', 
        '_blank'
    );
});
$("#continue").click(() => {
    window.location.hash = "#";
    window.location.hash = "#box";
});
$("#boxButton").click(() => {
    window.open(
        'pages/BoxModel.html',
        '_blank'
    )
});
$("#centerButton").click(() => {
    window.open(
        'pages/CenterElem.html',
        '_blank'
    )
});
$("#cardButton").click(() => {
    window.open(
        'pages/Card.html',
        '_blank'
    )
});