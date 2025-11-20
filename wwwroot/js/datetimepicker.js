window.initializeFlatpickr = (pickerId, dateFormat, hasCallback) => {
    flatpickr(`#${pickerId}`, {
        dateFormat: dateFormat,
        onChange: function (selectedDates, dateStr) {
            if (hasCallback) {
                DotNet.invokeMethodAsync('OwlEdu-Manager', 'OnDateSelected', dateStr);
            }
        },
    });
};