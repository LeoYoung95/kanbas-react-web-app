function CourseNavigation() {
    const links = [
        { name: 'Home', href: '/Kanbas/Courses/Home/screen.html', icon: 'fas fa-home' },
        { name: 'Modules', href: '/Kanbas/Courses/Modules/screen.html', icon: 'fas fa-book' },
        { name: 'Piazza', href: '#', icon: 'fas fa-comments' },
        { name: 'Zoom Meetings', href: '#', icon: 'fas fa-video' },
        { name: 'Assignments', href: '/Kanbas/Courses/Assignments/Assignment.html', icon: 'fas fa-tasks' },
        { name: 'Quizzes', href: '#', icon: 'fas fa-file-alt' },
        { name: 'Grades', href: '/Kanbas/Courses/Grades/Grades.html', icon: 'fas fa-graduation-cap' },
        { name: 'People', href: '#', icon: 'fas fa-users' },
        { name: 'Panopto Video', href: '#', icon: 'fas fa-video' },
        { name: 'Discussions', href: '#', icon: 'fas fa-comments' },
        { name: 'Announcements', href: '#', icon: 'fas fa-bullhorn' },
        { name: 'Pages', href: '#', icon: 'fas fa-file' },
        { name: 'Files', href: '#', icon: 'fas fa-folder' },
        { name: 'Rubrics', href: '#', icon: 'fas fa-clipboard' },
        { name: 'Outcomes', href: '#', icon: 'fas fa-chart-bar' },
        { name: 'Collaborations', href: '#', icon: 'fas fa-handshake' },
        { name: 'Syllabus', href: '#', icon: 'fas fa-file-alt' },
        { name: 'Settings', href: '/Kanbas/Courses/Settings/course_details.html', icon: 'fas fa-cog' }
    ];

    return `
      <div class="nav-container">
        <div>
          <nav class="second-sidebar">
            <ul class="list-unstyled">
              ${links.map(link => `
                <li>
                  <a  href="${link.href}">
                    <i class="${link.icon}"></i> ${link.name}
                  </a>
                </li>
              `).join('')}
            </ul>
          </nav>
        </div>
      </div>
    `;
}

export default CourseNavigation;
