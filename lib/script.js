document.addEventListener('DOMContentLoaded', () => {
  let $softwareContainer = $('#software-container');
  let $skillsBtn = $('#skills');
  let $aboutBtn = $('#about-btn');
  let $sectionContainer = $('#section-container');
  let $aboutSection = $('#about-me2');
  let $aboutDivider = $('#about');
  let $midDivider1 = $('#mid1')
  let $aboutTitle = $('#about-title')

  let $skillsSection = $('#skills-new');
  let $skillsDivider = $('#section-divider2');
  let $skillsTitle = $('#skills-title')
  let $midDivider2 = $('#mid2');


  let $projectDivider = $('#section-divider3');
  let $projects = $('#projects');
  let $projectsBtn = $('.last');
  let $projTitle = $('#proj-title');
  let $midDivider3 = $('#mid3');


  setTimeout(() => {
    $softwareContainer.fadeOut("slow");
  }, 4000)

  setTimeout(() => {
    $sectionContainer.fadeIn("slow")
  }, 4500)

  $aboutBtn.on('click', e => {
    $midDivider1.fadeIn("slow");
    $aboutTitle.fadeIn("slow");
    $aboutDivider.fadeIn("slow");
    $aboutSection.fadeIn("slow");
 })

  $skillsBtn.on('click', e => {
    $midDivider1.fadeIn("slow");
    $aboutTitle.fadeIn("slow");
    $aboutDivider.fadeIn("slow");
    $aboutSection.fadeIn("slow");
    $midDivider2.fadeIn("slow");
    $skillsTitle.fadeIn("slow");
    $skillsDivider.fadeIn("slow");
    $skillsSection.fadeIn("slow");
  })

  $projectsBtn.on('click', e => {
    $midDivider1.fadeIn("slow");
    $aboutTitle.fadeIn("slow");
    $aboutDivider.fadeIn("slow");
    $aboutSection.fadeIn("slow");
    $midDivider2.fadeIn("slow");
    $skillsTitle.fadeIn("slow");
    $skillsDivider.fadeIn("slow");
    $skillsSection.fadeIn("slow");
    $midDivider3.fadeIn("slow");
    $projTitle.fadeIn("slow");
    $projectDivider.fadeIn("slow");
    $projects.fadeIn("slow");
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $midDivider1.fadeIn("slow");
      $aboutTitle.fadeIn("slow");
      $aboutDivider.fadeIn("slow");
      $aboutSection.fadeIn("slow");
      $midDivider2.fadeIn("slow");
      $skillsTitle.fadeIn("slow");
      $skillsDivider.fadeIn("slow");
      $skillsSection.fadeIn("slow");
      $midDivider3.fadeIn("slow");
      $projTitle.fadeIn("slow");
      $projectDivider.fadeIn("slow");
      $projects.fadeIn("slow");
    } else {
      window.location = '#';
      $midDivider1.fadeOut("slow");
      $aboutTitle.fadeOut("slow");
      $aboutDivider.fadeOut("slow");
      $aboutSection.fadeOut("slow");
      $midDivider2.fadeOut("slow");
      $skillsTitle.fadeOut("slow");
      $skillsDivider.fadeOut("slow");
      $skillsSection.fadeOut("slow");
      $midDivider3.fadeOut("slow");
      $projTitle.fadeOut("slow");
      $projectDivider.fadeOut("slow");
      $projects.fadeOut("slow");
    }
  })

})
