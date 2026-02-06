export default function loadHome() {
    const content = document.querySelector("#content");

    // HERO SECTION
    const heroSection = document.createElement("section");
    heroSection.id = "hero";
    content.appendChild(heroSection);

    const heroContent = document.createElement("div");
    heroContent.id = "hero-content";
    const heroText = document.createElement("p");
    const heroImage = document.createElement("img");
    
    heroSection.appendChild(heroContent);
    heroContent.appendChild(heroText);
    heroContent.appendChild(heroImage);

    heroText.textContent = "Experience fresh, bold, and flavorful eats with no shortcuts — just straight-up flavor in every bite.";
    heroImage.src = "assets/images/hero-image.jpg";

    // VALUES SECTION
    const valuesSection = document.createElement("section");
    valuesSection.id = "values"
    content.appendChild(valuesSection);

    const valuesContent = document.createElement("div");
    valuesContent.id = "values-content";
    const valuesHeader = document.createElement("h1");
    const valuesText = document.createElement("p");

    valuesSection.appendChild(valuesContent);
    valuesContent.appendChild(valuesHeader);
    valuesContent.appendChild(valuesText);

    valuesHeader.textContent = "VALUES"
    valuesText.textContent = "At Bussin’ Burgers, we believe great food starts with passion and purpose. Our values are built on quality, freshness, and community — serving up handcrafted burgers made from locally sourced ingredients that hit the spot every time. We’re committed to fast, friendly service, creating a space where everyone feels welcome, and keeping it real, bold, and delicious. At Bussin’ Burgers, it’s not just a meal — it’s a vibe.";
}

loadHome()