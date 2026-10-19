    const checkboxes = document.querySelectorAll(
        '.switch input[type="checkbox"]'
    );

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const checkedBoxes = [...checkboxes].filter(
                (item) => item.checked
            );

            if (checkedBoxes.length > 2) {
                const otherBoxes = checkedBoxes.filter(
                    (item) => item !== checkbox
                );

                const randomIndex = Math.floor(
                    Math.random() * otherBoxes.length
                );

                otherBoxes[randomIndex].checked = false;
            }
        });
    });

    
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked &&
            checkbox.closest('.carddiv').querySelector('.hfont').textContent.trim() === 'Reacpect') {
            alert('You have ?? 😂');
        }
    });
});
