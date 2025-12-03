function generateStory(event) {
   
    event.preventDefault();

    const storyOutputDiv = document.getElementById('story-output');
    
    try {
      
        const sciFiImageUrl = "assets/scifi1.jpg";
        const fantasyImageUrl = "assets/fantasy1.jpg";
        
       
        const adjective1 = document.getElementById('adjective_1').value;
        const liquid1 = document.getElementById('liquid_1').value;
        const number1 = document.getElementById('number_1').value;
        const nounPlural1 = document.getElementById('noun_plural_1').value;
        const adverb1 = document.getElementById('adverb_1').value;
        const verbIng1 = document.getElementById('verb_ing_1').value;
        const terrifyingSound1 = document.getElementById('terrifying_sound_1').value;
        const bodyPartPlural1 = document.getElementById('body_part_plural_1').value;
        const pluralCreature1 = document.getElementById('plural_creature_1').value;
        const adjectiveScale1 = document.getElementById('adjective_scale_1').value;
        const nounSingular1 = document.getElementById('noun_singular_1').value;
        const verbPast1 = document.getElementById('verb_past_1').value;
        const exclamation1 = document.getElementById('exclamation_1').value;
        const place1 = document.getElementById('place_1').value;
        const terrifyingAdjective1 = document.getElementById('terrifying_adjective_1').value;
        const verbPresent1 = document.getElementById('verb_present_1').value;
        
        
        const selectedThemeElement = document.querySelector('input[name="theme_select"]:checked');
        const themeSelect = selectedThemeElement ? selectedThemeElement.value : 'scifi';

        let finalStory = '';
        let storyImageHtml = ''; 
        let storyTitle = '';
        let currentImageUrl = '';

        
        if (themeSelect === 'scifi') {
            
            storyTitle = "The Chronos Anomaly";
            currentImageUrl = sciFiImageUrl;
            
            finalStory = `
> DATA LOG: CHRONOS\_ANOMALY\_REPORT
> MISSION START: ${new Date().toLocaleTimeString()}

The crew of the starship Odyssey had a bad feeling about the planet Xylos-9. After landing near a 
vast crater filled with glowing ${adjective1} ${liquid1}, they knew something was wrong. 
Their primary mission was simple: collect ${number1} ${nounPlural1} for scientific analysis.

Pilot Rex “The Rock” Harding stepped out of the airlock, ${adverb1} ${verbIng1} 
toward the anomaly. Suddenly, he heard a chilling ${terrifyingSound1} emanating from the 
dark shadows of the crater rim. His ${bodyPartPlural1} started trembling.

A swarm of mutated ${pluralCreature1} with ${adjectiveScale1} scales emerged, its jaws snapping 
like a rusty ${nounSingular1}. Rex ${verbPast1} back to the ship, screaming, 
"${exclamation1}!"

They initiated an emergency takeoff, but the creatures quickly followed them all the way to the 
${place1}. Now, the crew must find a way to escape this ${terrifyingAdjective1} threat or be 
forced to ${verbPresent1} forever among the stars.

[END OF LOG]
            `;

        } else {
            
            storyTitle = "The Sunken Citadel";
            currentImageUrl = fantasyImageUrl;
            
            finalStory = `
> ADVENTURE LOG: SUNKEN\_CITADEL\_QUEST
> DATE: The ${number1}th day of the New Moon

The lone warrior, Sir Eldrin, plunged into a vast ocean trench, the dark abyss illuminated only by the 
${adjective1} glow of the magical ${liquid1} currents. His sacred quest was to retrieve the 
${nounPlural1} stolen by the Mer-King.

He swam ${adverb1}, ${verbIng1} closer to the ruins of the forgotten city. A deep, 
muttering ${terrifyingSound1} echoed off the stone walls, making the skin on his 
${bodyPartPlural1} prickle with fear.

A swarm of deep-sea ${pluralCreature1} with ${adjectiveScale1} fins attacked, their teeth sharp 
as a rusted ${nounSingular1}. Eldrin ${verbPast1} his shield and cried, "${exclamation1}!" 

He reached the center of the royal ${place1}, which was guarded by a ${terrifyingAdjective1} leviathan. 
He knew he must ${verbPresent1} the final curse to escape with his life.

[END OF LOG]
            `;
        }

       
        storyImageHtml = `
            <img 
                src="${currentImageUrl}" 
                class="img-fluid border border-secondary mb-3" 
                alt="${storyTitle} scene image"
                style="image-rendering: pixelated; max-width: 100%; height: auto;"
                onerror="this.onerror=null; this.src='https://placehold.co/400x150/555555/ffffff?text=IMAGE+ASSET+NOT+FOUND';"
            />
        `;

        
        storyOutputDiv.innerHTML = `
            <div class="text-white text-center mb-4">
                ${storyImageHtml}
                <h3 class="h4 text-warning">${storyTitle}</h3>
            </div>
            <!-- Added style="white-space: pre-wrap;" to allow text to wrap responsively -->
            <pre class="fs-5 text-terminal-green p-2" style="white-space: pre-wrap;">${finalStory.trim()}</pre>
        `;

    } catch (error) {
        
        storyOutputDiv.innerHTML = `
            <p class="text-danger">!!! ERROR EXECUTING LOGIC !!!</p>
            <pre class="text-danger">${error.name}: ${error.message}</pre>
            <p class="text-warning">Please ensure all required fields are filled out.</p>
        `;
        console.error("Story Generation Error:", error);
    }
}


function resetStory() {
    
    const form = document.getElementById('madlib-form');
    if (form) {
        
        form.reset(); 
    }

    
    const storyOutputDiv = document.getElementById('story-output');
    if (storyOutputDiv) {
        storyOutputDiv.innerHTML = '<p>Awaiting input...</p>';
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('madlib-form');
    if (form) {
        
        form.addEventListener('submit', generateStory);
    }
    
    const resetButton = document.getElementById('reset-button');
    if (resetButton) {
       
        resetButton.addEventListener('click', resetStory);
    }
});
