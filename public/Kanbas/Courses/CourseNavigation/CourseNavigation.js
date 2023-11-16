function CourseNavigation(active) {
    const links = [
        { name: 'Home', href: '/Kanbas/Courses/Home/screen.html' },
        { name: 'Modules', href: '/Kanbas/Courses/Modules/screen.html' },
        { name: 'Piazza', href: '#' },
        { name: 'Zoom Meetings', href: '#' },
        { name: 'Assignments', href: '/Kanbas/Courses/Assignments/Assignment.html' },
        { name: 'Quizzes', href: '#' },
        { name: 'Grades', href: '/Kanbas/Courses/Grades/Grades.html' },
        { name: 'People', href: '#' },
        { name: 'Panopto Video', href: '#' },
        { name: 'Discussions', href: '#' },
        { name: 'Announcements', href: '#' },
        { name: 'Pages', href: '#' },
        { name: 'Files', href: '#' },
        { name: 'Rubrics', href: '#' },
        { name: 'Outcomes', href: '#' },
        { name: 'Collaborations', href: '#' },
        { name: 'Syllabus', href: '#' },
        { name: 'Settings', href: '/Kanbas/Courses/Settings/CourseDetails.html' }
    ];

    return `
      <div class="nav-container">
        <div class="second-sidebar-container">
          <nav class="second-sidebar">
            <ul class="list-unstyled">
              ${links.map(link => `
                <li>
                  <a class="${link.name === active ? "active" : ""}" href="${link.href}">${link.name}</a>
                </li>
              `).join('')}
            </ul>
          </nav>
        </div>
      </div>
    `;
}

export default CourseNavigation;
