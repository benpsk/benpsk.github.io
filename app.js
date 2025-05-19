const projects = [
  {
    title: "Install PHP",
    description: "Effortlessly set up and launch your PHP tech stack on UBUNTU with a single command.",
    url: "https://github.com/benpsk/install-php"
  },
  {
    title: "Laravel Docker",
    description: "Docker setup for laravel project. It's a bit messy but works perfectly fine like cron and supervisor (queue worker). Check it out, maybe you don't wanna use it. LOL",
    url: "https://github.com/benpsk/laravel-docker"
  },
  {
    title: "Hello BKK",
    description: "The landing page for immigrants who want to migrate to Bangkok. Guide blog for visa process, visa extension and the most trusted Bangkok Agencies.",
    url: "https://hellobkk.live"
  },
  {
    title: "Blog | Hello BKK",
    description: "A Gatsby blog project for Myanmar who wanna migrate to Thailand. MDX file-based project, no backend, no database, just md file. I love it.",
    url: "https://blog.hellobkk.live/"
  },
  {
    title: "BKK Agencies",
    description: "The most trusted agencies for Bangkok immigrants. Built with PHP Laravel, Inertia, React and Postgres. I love working with Laravel Inertia, so productive.",
    url: "http://agencies.hellobkk.live/"
  },
];

const container = document.querySelector('#projects');
projects.forEach(project => {
  const projectElement = document.createElement('a');
  projectElement.href = project.url;
  projectElement.className = 'project-item';
  projectElement.target = '_blank'; // Opens the link in a new window

  const title = document.createElement('p');
  title.className = 'project-title';
  title.textContent = project.title;

  const description = document.createElement('p');
  description.className = 'project-description';
  description.textContent = project.description;

  projectElement.appendChild(title);
  projectElement.appendChild(description);
  container.appendChild(projectElement);
});
