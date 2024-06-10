const cards = [
    {
        title: "Card 1",
        description: "This card symbolizes new beginnings and endless possibilities. Whether in your career, love life, or personal growth, this is a moment filled with hope and opportunities. Seize every chance and take the first step boldly; you'll find the path ahead brighter than you imagined. Trust in your abilities and intuition; they will guide you toward success and happiness.",
        key: 1
    },
    {
        title: "Card 2",
        description: "Card 2 represents balance and harmony. It encourages you to find equilibrium in all aspects of your life. Whether it's work-life balance, emotional stability, or maintaining healthy relationships, this card reminds you to stay centered and calm. Achieving harmony will bring you inner peace and clarity, allowing you to navigate life's challenges with grace.",
        key: 2
    },
    {
        title: "Card 3",
        description: "This card signifies creativity and self-expression. It's a reminder to embrace your unique talents and let your imagination run free. Whether through art, writing, music, or any other creative outlet, expressing yourself authentically will bring joy and fulfillment. Don't be afraid to showcase your individuality and share your gifts with the world.",
        key: 3
    },
    {
        title: "Card 4",
        description: "Card 4 stands for stability and foundation. It suggests that you focus on building a solid base for your future endeavors. This could mean investing time in developing skills, strengthening relationships, or creating a secure home environment. A strong foundation will support you through life's ups and downs, providing a sense of security and confidence.",
        key: 4
    },
    {
        title: "Card 5",
        description: "This card is all about change and adaptability. Life is constantly evolving, and this card encourages you to embrace transformation with an open mind. Whether it's a new job, a move to a different city, or a shift in personal relationships, being adaptable will help you navigate these changes smoothly. Embrace the unknown and trust that it will lead to growth and new opportunities.",
        key: 5
    },
    {
        title: "Card 6",
        description: "Card 6 represents love and compassion. It highlights the importance of nurturing relationships and showing empathy towards others. Whether it's with family, friends, or a partner, expressing love and kindness will strengthen your connections. This card also reminds you to be compassionate towards yourself, allowing for self-care and healing.",
        key: 6
    },
    {
        title: "Card 7",
        description: "This card symbolizes introspection and inner wisdom. It encourages you to take time for self-reflection and to listen to your inner voice. Meditate, journal, or simply spend quiet moments alone to gain clarity and insight. Trust in your intuition and the wisdom you have gained from past experiences. This inner guidance will lead you to make better decisions and find your true path.",
        key: 7
    },
    {
        title: "Card 8",
        description: "Card 8 signifies power and confidence. It's a reminder to step into your strength and take control of your destiny. Believe in your abilities and don't hesitate to assert yourself in various situations. Whether in your career, personal life, or any challenges you face, approach them with determination and self-assuredness. Your confidence will inspire others and help you achieve your goals.",
        key: 8
    },
    {
        title: "Card 9",
        description: "This card represents completion and fulfillment. It suggests that you are nearing the end of a significant phase in your life and are about to reap the rewards of your hard work. Take pride in your accomplishments and reflect on the journey that brought you here. This is a time for celebration and gratitude, as you prepare to embark on a new chapter filled with promise and potential.",
        key: 9
    },
    {
        title: "Card 10",
        description: "Card 10 symbolizes renewal and transformation. It suggests that you are entering a period of profound change and rebirth. This could be a time for personal growth, spiritual awakening, or a major life transition. Embrace this transformation with an open heart and mind, letting go of old patterns and welcoming new perspectives. This card encourages you to trust the process and have faith in the positive outcomes that await you.",
        key: 10
    }
];

const Card = (props) => {
    return (
        <li>
            <h2>{ props.title }</h2>
            <p>{ props.description }</p>
        </li>
    )
}

const App = (props) => {
    return (
        <div>
            <h2>Flexbox</h2>
            <ul className="flex cards">
                {props.initialCards.map(card =>
                    <Card
                        title={card.title}
                        description={card.description}
                        key={card.key}
                    />
                )}
            </ul>

            <h2>CSS Grid Layout</h2>
            <ul className="grid cards">
                {props.initialCards.map(card =>
                    <Card
                        title={card.title}
                        description={card.description}
                        key={card.key}
                    />
                )}
            </ul>
        </div>
    )
}

ReactDOM.render(
    <App initialCards={cards} />,
    document.getElementById("root")
)



