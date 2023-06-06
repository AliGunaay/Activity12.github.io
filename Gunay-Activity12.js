$(document).ready(function () {
    $("#nav_list a").click(function (event) {
        event.preventDefault(); // Prevent the default link behavior

        var jsonFile = "json_files/" + $(this).attr("title") + ".json"; // Build the JSON file path
        var mainContent = $("main"); // Reference to the main element

        // Clear the main element
        mainContent.empty();

        // Retrieve JSON data
        $.getJSON(jsonFile, function (data) {
            var speakers = data.speakers; // Array of speakers in the JSON data

            // Loop through each speaker and create HTML elements
            for (var i = 0; i < speakers.length; i++) {
                var speaker = speakers[i];

                // Create HTML elements for the speaker data
                var speakerHtml =
                    '<h1>' + speaker.title + '</h1>' +
                    '<img src="' + speaker.image + '">' +
                    '<h2>' + speaker.month + '<br>' + speaker.speaker + '</h2>' +
                    '<p>' + speaker.text + '</p>';

                // Create a container div for each speaker
                var speakerContainer = $('<div>').addClass('speaker-container').html(speakerHtml);

                // Append the speaker container to the main element
                mainContent.append(speakerContainer);
            }
        });
    });
});
