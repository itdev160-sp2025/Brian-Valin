var data = [
    {
        name: 'Trailing Spaces',
        description: "What’s in a name? Well, the Trailing Spaces extension does pretty much exactly what the title describes—it enables you to highlight trailing spaces and remove them quickly. This extension is a port of the popular Sublime Text plugin Trailing Spaces, and offers quick deletion of trailing spaces, trim on save, and more.",
        author: 'Shardul Mahadik',
        url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
        downloads: 2649689,
        stars: 59,
        price: 'Free',
        selector: 'p1'
    },
    {
        name: 'Guides',
        description: "The Guides Visual Studio Code extension adds additional indentation guides to your editor. It’s different from the built-in indentation guides by adding stack and active indentation guides, indentation backgrounds, and you can color and style those customizations.",
        author: 'spywhere',
        url: 'https://marketplace.visualstudio.com/items?itemName=spywhere.guides',
        downloads: 770289,
        stars: 44,
        price: 'Free',
        selector: 'p2'
    }
];


function Package(data)
{
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function() 
    {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function()
    {
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function()
{
    var today = new Date();
    return today.toDateString();
}

var getEl = function(id) 
{
    return document.getElementById(id);
}

var writePackageInfo = function(package)
{
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
}

var init = function()
{
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var spaces = new Package(data[0]);
    writePackageInfo(spaces);

    var guides = new Package(data[1]);
    writePackageInfo(guides);
}

init();