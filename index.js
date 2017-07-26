const tab1 = $('.tab1');
const tab2 = $('.tab2');
const tab3 = $('.tab3');
const tab4 = $('.tab4');
const tabsArray = [tab1, tab2, tab3, tab4];

const tab1Content = $('#tab1-content');
const tab2Content = $('#tab2-content');
const tab3Content = $('#tab3-content');
const tab4Content = $('#tab4-content');
const contentArray = [tab1Content, tab2Content, tab3Content, tab4Content]

const tab1Status = $('.tab1-status');
const tab2Status = $('.tab2-status');
const tab3Status = $('.tab3-status');
const tab4Status = $('.tab4-status');
const statusArray = [tab1Status, tab2Status, tab3Status, tab4Status];

const bar = $('.menu-top');
const links = $('.link-container');
const search = $('.search-container');

const toggleTab = (tab, tabs) => {
  tab.addClass('isActive');
  tabs.forEach(item => {
    if (item !== tab) {
      item.removeClass('isActive');
    }
  });
};

const toggleContent= (content, contents) => {
  content.removeClass('hidden');
  contents.forEach(item => {
    if (item !== content) {
      item.addClass('hidden');
    }
  });
};

const toggleStatus = (status, stati) => {
  status.text('-');
  stati.forEach(item => {
    if (item !== status) {
      item.text('+');
    }
  });
};

const toggleShow = (links, search) => {
  if (links.hasClass('show') && search.hasClass('show')) {
    links.removeClass('show');
    links.addClass('hidden');
    search.removeClass('show');
    search.addClass('hidden');
  } else {
    links.removeClass('hidden');
    links.addClass('show');
    search.removeClass('hidden');
    search.addClass('show');
  }
};

bar.on('click', () => {
  toggleShow(links, search);
});

tab1.on('click', () => {
  toggleTab(tab1, tabsArray);
  toggleContent(tab1Content, contentArray);
  toggleStatus(tab1Status, statusArray)
});

tab2.on('click', () => {
  toggleTab(tab2, tabsArray);
  toggleContent(tab2Content, contentArray);
  toggleStatus(tab2Status, statusArray)
});

tab3.on('click', () => {
  toggleTab(tab3, tabsArray);
  toggleContent(tab3Content, contentArray);
  toggleStatus(tab3Status, statusArray)
});

tab4.on('click', () => {
  toggleTab(tab4, tabsArray);
  toggleContent(tab4Content, contentArray);
  toggleStatus(tab4Status, statusArray)
});

