function generateTitleBar(items, iconConfig, buttonConfig, placeholderId, leftButtonUrl, rightButtonUrl) {
    const container = document.getElementById(placeholderId) || document.createElement('div');
    container.className = 'floating-title-bar';

    let iconDiv = null;


    const updateUI = () => {
        const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

        // Clear the container
        container.innerHTML = '';

        if (isSmallScreen) {
            const titleBar = document.createElement('div');
            titleBar.style.backgroundColor = 'black';
            titleBar.style.color = 'white';
            titleBar.style.padding = '10px';
            titleBar.style.height = '60px';
            titleBar.style.display = 'flex';
            titleBar.style.alignItems = 'center';
            titleBar.style.justifyContent = 'space-between';
            titleBar.style.margin = '0';

            // Left button
            const leftButton = document.createElement('a');
            leftButton.href = leftButtonUrl || '#';
            leftButton.style.color = 'white';


            const leftIcon = document.createElement('i');
            leftIcon.className = 'fas fa-bars';
            leftButton.appendChild(leftIcon);
            titleBar.appendChild(leftButton);

            // Titles (from breadcrumb items)
            const titlesDiv = document.createElement('div');
            titlesDiv.style.display = 'flex';
            titlesDiv.style.flexDirection = 'column';
            titlesDiv.style.alignItems = 'center';
            items.forEach(item => {
                const title = document.createElement('span');
                title.textContent = item.label;
                title.style.fontSize = '12px';
                title.style.lineHeight = '1';
                titlesDiv.appendChild(title);
            });
            titleBar.appendChild(titlesDiv);

            // Right buttons
            const rightButtonsDiv = document.createElement('div');
            rightButtonsDiv.style.display = 'flex';
            rightButtonsDiv.style.alignItems = 'center';

            // Original button without text
            const origButton = document.createElement('a');
            origButton.href = buttonConfig.href || '#';
            origButton.style.color = 'white';
            const origIcon = document.createElement('i');
            origIcon.className = 'fas ' + buttonConfig.icon;
            origButton.appendChild(origIcon);
            rightButtonsDiv.appendChild(origButton);

            // New right button
            const rightButton = document.createElement('a');
            rightButton.href = rightButtonUrl || '#';
            rightButton.style.color = 'white';
            const rightIcon = document.createElement('i');
            rightIcon.className = 'fas fa-chevron-down';
            rightButton.appendChild(rightIcon);
            rightButtonsDiv.appendChild(rightButton);

            titleBar.appendChild(rightButtonsDiv);
            container.appendChild(titleBar);

            if (iconDiv) iconDiv.style.display = 'none';
        } else {
            const row = document.createElement('div');
            row.className = 'row align-items-center';

            // Add the fixed photo to the top left corner
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('col-auto');
            imgDiv.style.backgroundColor = 'black';

            const imgElem = document.createElement('img');
            imgElem.src = "/images/NU-icon.png";
            imgElem.alt = 'Description';
            imgElem.style.width = '65px';
            imgElem.style.height = '60px';
            imgElem.style.padding = '10px';
            imgElem.style.border = '0';

            imgDiv.appendChild(imgElem);
            row.appendChild(imgDiv);

            // Add the hamburger button next to the image for large screens
            const hamburgerDiv = document.createElement('div');
            hamburgerDiv.classList.add('col-auto');

            const hamburgerLink = document.createElement('a');
            hamburgerLink.href = '#';
            hamburgerLink.id = 'hamburger-btn-large';

            const hamburgerIcon = document.createElement('i');
            hamburgerIcon.className = 'fas fa-bars';
            hamburgerLink.appendChild(hamburgerIcon);

            hamburgerDiv.appendChild(hamburgerLink);
            row.appendChild(hamburgerDiv);

            // Handle the icon
            if (iconConfig && iconConfig.show) {
                if (!iconDiv) {
                    iconDiv = document.createElement('div');
                    iconDiv.classList.add('icon-container');

                    const iconLink = document.createElement('a');
                    iconLink.href = iconConfig.href || '#';

                    const iconElem = document.createElement('i');
                    iconElem.classList.add('fas', 'fa-bars', 'icon');
                    iconLink.appendChild(iconElem);

                    iconDiv.appendChild(iconLink);
                    document.body.appendChild(iconDiv);
                } else {
                    iconDiv.style.display = 'block';
                }
            }

            // Handle the breadcrumb
            const breadcrumbCol = document.createElement('div');
            breadcrumbCol.className = 'col';

            const breadcrumbNav = document.createElement('nav');
            breadcrumbNav.setAttribute('aria-label', 'breadcrumb');

            const breadcrumbList = document.createElement('ol');
            breadcrumbList.className = 'breadcrumb mb-0';

            items.forEach((item, index) => {
                const li = document.createElement('li');
                li.classList.add('breadcrumb-item');

                if (index === items.length - 1) {
                    li.classList.add('active');
                    li.setAttribute('aria-current', 'page');
                    li.textContent = item.label;
                } else {
                    const a = document.createElement('a');
                    a.href = item.href;
                    a.textContent = item.label;
                    li.appendChild(a);
                }

                breadcrumbList.appendChild(li);
            });

            breadcrumbNav.appendChild(breadcrumbList);
            breadcrumbCol.appendChild(breadcrumbNav);
            row.appendChild(breadcrumbCol);

            // Handle the button
            if (buttonConfig && buttonConfig.show) {
                const buttonDiv = document.createElement('div');
                buttonDiv.classList.add('col-auto', 'col-md-3', 'ml-auto');

                const buttonElem = document.createElement('a');
                buttonElem.classList.add('btn', 'btn-light');
                buttonElem.href = buttonConfig.href || '#';

                if (buttonConfig.icon) {
                    const iconElem = document.createElement('i');
                    iconElem.classList.add('fas', buttonConfig.icon, 'gray-icon');
                    buttonElem.appendChild(iconElem);
                    buttonElem.appendChild(document.createTextNode(' '));
                }

                buttonElem.appendChild(document.createTextNode(buttonConfig.label));
                buttonDiv.appendChild(buttonElem);
                row.appendChild(buttonDiv);
            }

            container.appendChild(row);
        }
    };

    // Update the UI when the function is called
    updateUI();

    // Update the UI when the window is resized
    window.addEventListener('resize', updateUI);


}



