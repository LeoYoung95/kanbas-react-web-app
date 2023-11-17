function KanbasNavigation(active) {

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
<div id="kanbas-sidebar-container">

    <nav id="kanbas-sidebar" class="bg-black">
        <ul class="list-unstyled components">
            ${links.map(link => `
            <li>
                <a class="${link.name === active ? "active" : ""}" href="${link.href}"><span>
                <i class="${link.icon}"></i></span>
                <span>${link.name}</span></a></li>
            `).join('')}
        </ul>
    </nav>

</div>
`;
}

export default KanbasNavigation;
