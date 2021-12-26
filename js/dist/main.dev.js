"use strict";

var date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
var navToggle = document.querySelector('.nav-toggle');
var linksContainer = document.querySelector('.links-container');
var links = document.querySelector('.links');
/** Navbar **/

navToggle.addEventListener('click', function () {
  // linksContainer.classList.toggle('show-links');
  var containerHeight = linksContainer.getBoundingClientRect().height;
  var linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = "".concat(linksHeight, "px");
  } else {
    linksContainer.style.height = 0;
  }
});
var navbar = document.getElementById('nav');
var topLink = document.querySelector('.top-link');
/**fixed navbar **/

window.addEventListener('scroll', function () {
  var scrollHeight = window.pageYOffset;
  var navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
/**smooth scroll **/

var scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var id = e.currentTarget.getAttribute('href').slice(1);
    var element = document.getElementById(id);
    var navHeight = navbar.getBoundingClientRect().height;
    var containerHeight = linksContainer.getBoundingClientRect().height;
    var fixedNav = navbar.classList.contains('fixed-nav');
    var position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position
    });
    linksContainer.style.height = 0;
  });
});