function KanbasNavSmall(active) {

    const links = [
        { name: 'Account', href: '/Kanbas/Account/Profile/Profile.html', icon: 'fas fa-user' },
        { name: 'Dashboard', href: '/Kanbas/Dashboard/Dashboard.html', icon: 'fas fa-tachometer-alt' },
        { name: 'Courses', href: '/Kanbas/Courses/Home/screen.html', icon: 'fas fa-book' },
        { name: 'Calendar', href: '#', icon: 'fas fa-calendar-alt' },
        { name: 'Inbox', href: '#', icon: 'fas fa-envelope' },
        { name: 'History', href: '#', icon: 'fas fa-history' },
        { name: 'Studio', href: '#', icon: 'fas fa-desktop' },
        { name: 'Commons', href: '#', icon: 'fas fa-globe' },
        { name: 'Help', href: '#', icon: 'fas fa-question-circle' },
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

export default KanbasNavSmall;
