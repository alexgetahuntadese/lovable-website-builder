
export interface HistoryQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade10HistoryQuestions: { [unit: string]: HistoryQuestion[] } = {
  "Unit 1: Development of Capitalism and Nationalism 1815-1914": [
    {
      id: "g10_hist1_e1",
      question: "What was the Congress of Vienna (1815) primarily aimed at?",
      options: ["Promoting democracy", "Restoring the old order in Europe", "Establishing the United Nations", "Ending slavery"],
      correct: "Restoring the old order in Europe",
      explanation: "The Congress of Vienna aimed to restore the pre-Napoleonic political order and maintain the balance of power in Europe.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist1_e2",
      question: "What economic system is characterized by private ownership of the means of production?",
      options: ["Socialism", "Communism", "Capitalism", "Feudalism"],
      correct: "Capitalism",
      explanation: "Capitalism is an economic system where private individuals or businesses own capital goods and production is guided by profit motive.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist1_e3",
      question: "Which country is considered the birthplace of the Industrial Revolution?",
      options: ["France", "Germany", "Britain", "United States"],
      correct: "Britain",
      explanation: "Britain was the first country to industrialize due to its access to coal, iron, capital, and labor.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist1_e4",
      question: "What is nationalism?",
      options: ["Belief in international cooperation", "Strong identification with one's own nation", "Opposition to government", "Economic competition"],
      correct: "Strong identification with one's own nation",
      explanation: "Nationalism is a political ideology involving strong loyalty and devotion to one's own nation and its interests.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist1_e5",
      question: "Which revolution of 1848 is known as the 'Spring of Nations'?",
      options: ["French Revolution", "European Revolutions of 1848", "American Revolution", "Russian Revolution"],
      correct: "European Revolutions of 1848",
      explanation: "The 1848 revolutions across Europe were driven by nationalist and liberal movements demanding political reform.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist1_m1",
      question: "What role did the factory system play in the development of capitalism?",
      options: ["It reduced production", "It centralized production and created wage labor", "It promoted agriculture", "It eliminated trade"],
      correct: "It centralized production and created wage labor",
      explanation: "The factory system concentrated workers and machinery, creating a new class of wage laborers essential to capitalist production.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist1_m2",
      question: "How did nationalism contribute to the unification of Italy?",
      options: ["Through peaceful negotiations only", "Through nationalist movements led by figures like Garibaldi and Cavour", "Through foreign invasion", "Through religious reform"],
      correct: "Through nationalist movements led by figures like Garibaldi and Cavour",
      explanation: "Italian unification was achieved through the efforts of nationalist leaders who mobilized popular support for a united Italy.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist1_m3",
      question: "What was the significance of the Berlin Conference (1884-1885)?",
      options: ["It ended World War I", "It regulated European colonization of Africa", "It established the League of Nations", "It unified Germany"],
      correct: "It regulated European colonization of Africa",
      explanation: "The Berlin Conference set rules for the partition of Africa among European powers without African participation.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist1_m4",
      question: "Who led the unification of Germany?",
      options: ["Napoleon", "Otto von Bismarck", "Karl Marx", "Queen Victoria"],
      correct: "Otto von Bismarck",
      explanation: "Bismarck used a policy of 'blood and iron' to unite the German states under Prussian leadership.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist1_m5",
      question: "What was the social impact of industrialization on the working class?",
      options: ["Improved living conditions", "Harsh working conditions and urbanization", "Return to agriculture", "Greater political freedom"],
      correct: "Harsh working conditions and urbanization",
      explanation: "Industrialization led to overcrowded cities, long working hours, child labor, and poor living conditions for workers.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist1_h1",
      question: "How did the ideology of Social Darwinism justify imperialism?",
      options: ["It promoted equality", "It argued that stronger nations had a right to dominate weaker ones", "It advocated for peace", "It supported isolationism"],
      correct: "It argued that stronger nations had a right to dominate weaker ones",
      explanation: "Social Darwinism misapplied evolutionary theory to justify European domination over other peoples as 'survival of the fittest.'",
      difficulty: "Hard"
    },
    {
      id: "g10_hist1_h2",
      question: "What were the main contradictions within 19th-century capitalism that led to social movements?",
      options: ["Equal wealth distribution", "Growing inequality between bourgeoisie and proletariat", "Declining trade", "Religious conflicts"],
      correct: "Growing inequality between bourgeoisie and proletariat",
      explanation: "The concentration of wealth among factory owners while workers lived in poverty fueled socialist and labor movements.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist1_h3",
      question: "Analyze how the alliance system contributed to tensions leading to World War I.",
      options: ["It promoted peace", "It created rigid blocs that escalated local conflicts into continental crises", "It dissolved nationalism", "It reduced military spending"],
      correct: "It created rigid blocs that escalated local conflicts into continental crises",
      explanation: "The alliance system (Triple Alliance and Triple Entente) meant that a conflict between two nations could draw in all major powers.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist1_h4",
      question: "How did Marxism challenge the capitalist economic order?",
      options: ["By supporting free markets", "By advocating for workers' ownership of the means of production", "By promoting monarchy", "By encouraging colonialism"],
      correct: "By advocating for workers' ownership of the means of production",
      explanation: "Marx argued that capitalism exploited workers and called for a revolution to establish collective ownership.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist1_h5",
      question: "What was the relationship between industrialization and imperialism in the late 19th century?",
      options: ["They were unrelated", "Industrialized nations sought raw materials and markets in colonies", "Imperialism preceded industrialization", "Colonies industrialized first"],
      correct: "Industrialized nations sought raw materials and markets in colonies",
      explanation: "The need for raw materials, new markets, and investment opportunities drove industrialized nations to colonize other regions.",
      difficulty: "Hard"
    }
  ],
  "Unit 2: Africa & the Colonial Experience (1880s-1960s)": [
    {
      id: "g10_hist2_e1",
      question: "What is the term for the European division of Africa in the late 19th century?",
      options: ["Renaissance", "Scramble for Africa", "Reformation", "Enlightenment"],
      correct: "Scramble for Africa",
      explanation: "The 'Scramble for Africa' refers to the rapid colonization of Africa by European powers during the 1880s-1914.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist2_e2",
      question: "Which African country was never colonized by European powers?",
      options: ["Nigeria", "Kenya", "Ethiopia", "Ghana"],
      correct: "Ethiopia",
      explanation: "Ethiopia successfully resisted colonization, notably defeating Italy at the Battle of Adwa in 1896.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist2_e3",
      question: "What was the main economic motive for European colonization of Africa?",
      options: ["Spreading education", "Extracting raw materials", "Promoting democracy", "Building infrastructure"],
      correct: "Extracting raw materials",
      explanation: "Europeans sought Africa's abundant natural resources like gold, diamonds, rubber, and ivory to fuel their industries.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist2_e4",
      question: "What system did colonial powers use to force Africans to work on plantations?",
      options: ["Volunteering", "Forced labor", "Scholarship", "Apprenticeship"],
      correct: "Forced labor",
      explanation: "Colonial administrations used forced labor policies to compel Africans to work on European-owned farms and mines.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist2_e5",
      question: "When did most African countries gain independence?",
      options: ["1920s", "1940s", "1960s", "1980s"],
      correct: "1960s",
      explanation: "The 1960s is known as the 'Year of Africa' as many African nations gained independence during this decade.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist2_m1",
      question: "What was the policy of 'indirect rule' used by the British?",
      options: ["Direct governance from London", "Ruling through existing local chiefs and structures", "Complete self-governance", "Military occupation"],
      correct: "Ruling through existing local chiefs and structures",
      explanation: "Indirect rule used traditional African leaders as intermediaries to administer colonial policies at the local level.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist2_m2",
      question: "How did the Battle of Adwa (1896) impact the colonial narrative?",
      options: ["It encouraged more colonization", "It showed that African resistance could defeat European armies", "It had no impact", "It led to Ethiopian colonization"],
      correct: "It showed that African resistance could defeat European armies",
      explanation: "Ethiopia's victory at Adwa demonstrated that organized African resistance could successfully challenge European imperialism.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist2_m3",
      question: "What was the impact of colonial borders on African ethnic groups?",
      options: ["They united ethnic groups", "They arbitrarily divided ethnic groups across different colonies", "They had no effect", "They were drawn by Africans"],
      correct: "They arbitrarily divided ethnic groups across different colonies",
      explanation: "Colonial boundaries were drawn without regard for existing ethnic, cultural, or linguistic boundaries, causing lasting conflicts.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist2_m4",
      question: "What role did Pan-Africanism play in decolonization?",
      options: ["It supported colonialism", "It promoted unity among Africans and inspired independence movements", "It was a European movement", "It focused only on trade"],
      correct: "It promoted unity among Africans and inspired independence movements",
      explanation: "Pan-Africanism advocated for solidarity among people of African descent and was a driving force behind independence movements.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist2_m5",
      question: "Which European country colonized the largest area of Africa?",
      options: ["Britain", "France", "Germany", "Portugal"],
      correct: "France",
      explanation: "France controlled the largest area of Africa, particularly in West and North Africa.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist2_h1",
      question: "Evaluate the long-term economic effects of colonialism on African nations.",
      options: ["Rapid industrialization", "Dependency on raw material exports and underdevelopment", "Economic self-sufficiency", "Advanced manufacturing"],
      correct: "Dependency on raw material exports and underdevelopment",
      explanation: "Colonial economies were structured to export raw materials to Europe, leaving African nations with weak industrial bases after independence.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist2_h2",
      question: "How did the concept of 'civilizing mission' serve as justification for colonialism?",
      options: ["It genuinely improved lives", "It masked economic exploitation with claims of cultural superiority", "It was rejected by all Europeans", "It promoted African cultures"],
      correct: "It masked economic exploitation with claims of cultural superiority",
      explanation: "The 'civilizing mission' was used to justify colonialism by claiming Europeans were bringing progress to 'backward' peoples.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist2_h3",
      question: "What were the major forms of African resistance to colonialism?",
      options: ["Only armed resistance", "Armed resistance, diplomacy, and cultural preservation", "Complete submission", "Only peaceful protests"],
      correct: "Armed resistance, diplomacy, and cultural preservation",
      explanation: "Africans resisted colonialism through military confrontation, diplomatic negotiation, and maintaining cultural practices and identities.",
      difficulty: "Hard"
    }
  ],
  "Unit 3: Social, Economic & Political Developments in Ethiopia mid-19th C. to 1941": [
    {
      id: "g10_hist3_e1",
      question: "Who was Emperor Tewodros II?",
      options: ["A colonial governor", "An Ethiopian emperor who attempted to modernize and unify Ethiopia", "A religious leader", "A foreign diplomat"],
      correct: "An Ethiopian emperor who attempted to modernize and unify Ethiopia",
      explanation: "Emperor Tewodros II is known for his efforts to centralize power and modernize Ethiopia in the mid-19th century.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist3_e2",
      question: "What was the significance of the Battle of Adwa (1896)?",
      options: ["Ethiopia was colonized", "Ethiopia defeated Italy and maintained independence", "Italy conquered Ethiopia", "Britain invaded Ethiopia"],
      correct: "Ethiopia defeated Italy and maintained independence",
      explanation: "The Battle of Adwa was a decisive Ethiopian victory that preserved the country's sovereignty during the Scramble for Africa.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist3_e3",
      question: "Who led Ethiopia to victory at the Battle of Adwa?",
      options: ["Tewodros II", "Yohannes IV", "Menelik II", "Haile Selassie"],
      correct: "Menelik II",
      explanation: "Emperor Menelik II organized a massive army and led Ethiopia to victory against the Italian invasion at Adwa.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist3_e4",
      question: "What modernization efforts did Emperor Menelik II introduce?",
      options: ["Space program", "Railway, telephone, and modern education", "Nuclear energy", "Internet services"],
      correct: "Railway, telephone, and modern education",
      explanation: "Menelik II introduced the Addis Ababa-Djibouti railway, telephone communication, and modern schools.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist3_e5",
      question: "When did Italy occupy Ethiopia?",
      options: ["1896", "1935-1941", "1914", "1960"],
      correct: "1935-1941",
      explanation: "Italy invaded Ethiopia in 1935 under Mussolini and occupied it until 1941 when Ethiopian forces, with Allied support, liberated the country.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist3_m1",
      question: "How did Emperor Yohannes IV contribute to Ethiopian history?",
      options: ["He colonized neighboring countries", "He defended Ethiopia against external threats and promoted national unity", "He surrendered to Italy", "He abolished the monarchy"],
      correct: "He defended Ethiopia against external threats and promoted national unity",
      explanation: "Yohannes IV fought against Egyptian, Mahdist, and Italian invasions while working to maintain Ethiopian territorial integrity.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist3_m2",
      question: "What was the Treaty of Wuchale and why was it controversial?",
      options: ["A trade agreement", "A treaty with differing Amharic and Italian versions regarding Ethiopian sovereignty", "A peace treaty ending WWI", "A colonial agreement"],
      correct: "A treaty with differing Amharic and Italian versions regarding Ethiopian sovereignty",
      explanation: "The Amharic version maintained Ethiopian sovereignty while the Italian version claimed Ethiopia as a protectorate, leading to the Battle of Adwa.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist3_m3",
      question: "What reforms did Haile Selassie introduce before the Italian invasion?",
      options: ["None", "A written constitution, parliament, and abolition of slavery", "Only military reforms", "Industrial revolution"],
      correct: "A written constitution, parliament, and abolition of slavery",
      explanation: "Haile Selassie introduced Ethiopia's first written constitution in 1931 and worked to modernize governance and society.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist3_m4",
      question: "What was the impact of the Italian occupation on Ethiopia (1935-1941)?",
      options: ["Economic prosperity", "Destruction, resistance movements, and infrastructure building", "Complete modernization", "No significant impact"],
      correct: "Destruction, resistance movements, and infrastructure building",
      explanation: "The occupation brought devastation and Ethiopian resistance (Arbegnoch), while Italy also built some roads and buildings.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist3_m5",
      question: "Who were the Arbegnoch?",
      options: ["Italian soldiers", "Ethiopian patriots who resisted Italian occupation", "British diplomats", "French traders"],
      correct: "Ethiopian patriots who resisted Italian occupation",
      explanation: "The Arbegnoch were Ethiopian resistance fighters who fought guerrilla warfare against the Italian occupiers from 1936-1941.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist3_h1",
      question: "Analyze the challenges of modernization in Ethiopia during the late 19th and early 20th centuries.",
      options: ["There were no challenges", "Resistance from traditional elites, limited resources, and external threats", "Modernization was fully achieved", "Only economic challenges existed"],
      correct: "Resistance from traditional elites, limited resources, and external threats",
      explanation: "Ethiopian modernization faced opposition from feudal lords, lack of capital and technology, and constant external military threats.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist3_h2",
      question: "How did Ethiopia's appeal to the League of Nations expose the weakness of collective security?",
      options: ["The League helped Ethiopia", "The League failed to act against Italian aggression, showing its inability to enforce collective security", "Ethiopia never appealed", "The League was not yet formed"],
      correct: "The League failed to act against Italian aggression, showing its inability to enforce collective security",
      explanation: "Despite Haile Selassie's famous plea, the League imposed only weak sanctions on Italy, revealing the organization's inability to prevent aggression.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist3_h3",
      question: "Compare the modernization approaches of Tewodros II and Menelik II.",
      options: ["They had identical approaches", "Tewodros focused on military modernization while Menelik pursued broader diplomatic and infrastructural development", "Neither attempted modernization", "Only Menelik modernized"],
      correct: "Tewodros focused on military modernization while Menelik pursued broader diplomatic and infrastructural development",
      explanation: "Tewodros prioritized military technology and unity by force, while Menelik used diplomacy, trade, and broader infrastructure development.",
      difficulty: "Hard"
    }
  ],
  "Unit 4: Society and Politics in the Age of World Wars 1914-1945": [
    {
      id: "g10_hist4_e1",
      question: "What event triggered World War I?",
      options: ["The sinking of the Titanic", "The assassination of Archduke Franz Ferdinand", "The Russian Revolution", "The Berlin Conference"],
      correct: "The assassination of Archduke Franz Ferdinand",
      explanation: "The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo in 1914 triggered a chain of events leading to WWI.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist4_e2",
      question: "When did World War I begin and end?",
      options: ["1910-1918", "1914-1918", "1914-1920", "1912-1916"],
      correct: "1914-1918",
      explanation: "World War I lasted from July 1914 to November 1918.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist4_e3",
      question: "What was the League of Nations?",
      options: ["A military alliance", "An international organization established after WWI to promote peace", "A colonial organization", "A trade union"],
      correct: "An international organization established after WWI to promote peace",
      explanation: "The League of Nations was created by the Treaty of Versailles in 1919 to prevent future wars through collective security.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist4_e4",
      question: "Who was Adolf Hitler?",
      options: ["A British prime minister", "The fascist leader of Nazi Germany", "A French general", "A Russian tsar"],
      correct: "The fascist leader of Nazi Germany",
      explanation: "Adolf Hitler led the Nazi Party and became dictator of Germany, leading to World War II and the Holocaust.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist4_e5",
      question: "When did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      correct: "1945",
      explanation: "World War II ended in 1945 with the surrender of Germany in May and Japan in September.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist4_m1",
      question: "What were the main causes of World War I?",
      options: ["Only the assassination", "Militarism, alliances, imperialism, and nationalism (MAIN)", "Economic prosperity", "Religious conflicts"],
      correct: "Militarism, alliances, imperialism, and nationalism (MAIN)",
      explanation: "The underlying causes of WWI included militarism, alliance systems, imperial competition, and nationalist tensions.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist4_m2",
      question: "What was the Treaty of Versailles and how did it affect Germany?",
      options: ["It rewarded Germany", "It imposed harsh penalties including territorial losses, reparations, and military restrictions", "It had no effect", "It promoted German expansion"],
      correct: "It imposed harsh penalties including territorial losses, reparations, and military restrictions",
      explanation: "The Treaty of Versailles blamed Germany for WWI and imposed severe conditions that contributed to economic hardship and resentment.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist4_m3",
      question: "What was the Great Depression and how did it impact the world?",
      options: ["A minor recession", "A severe worldwide economic downturn starting in 1929 that caused mass unemployment", "A European war", "A natural disaster"],
      correct: "A severe worldwide economic downturn starting in 1929 that caused mass unemployment",
      explanation: "The Great Depression began with the US stock market crash in 1929 and spread globally, causing unemployment and political instability.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist4_m4",
      question: "What was fascism?",
      options: ["A democratic ideology", "An authoritarian nationalist political ideology", "A form of communism", "A religious movement"],
      correct: "An authoritarian nationalist political ideology",
      explanation: "Fascism is characterized by dictatorial power, forcible suppression of opposition, and strong regimentation of society and the economy.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist4_m5",
      question: "What was the Holocaust?",
      options: ["A natural disaster", "The systematic genocide of six million Jews by Nazi Germany", "A military battle", "An economic crisis"],
      correct: "The systematic genocide of six million Jews by Nazi Germany",
      explanation: "The Holocaust was the systematic, state-sponsored persecution and murder of six million Jews by the Nazi regime.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist4_h1",
      question: "How did the Treaty of Versailles contribute to the rise of Hitler and World War II?",
      options: ["It prevented war", "Its harsh terms created economic hardship and resentment that Hitler exploited", "It had no connection", "It strengthened democracy"],
      correct: "Its harsh terms created economic hardship and resentment that Hitler exploited",
      explanation: "The punitive conditions of Versailles led to economic crisis and national humiliation that Hitler used to gain popular support.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist4_h2",
      question: "Compare the causes and consequences of World War I and World War II.",
      options: ["They were identical", "Both involved alliance systems and nationalism but WWII was also driven by totalitarian ideologies and unresolved WWI issues", "They were unrelated", "Only economic causes"],
      correct: "Both involved alliance systems and nationalism but WWII was also driven by totalitarian ideologies and unresolved WWI issues",
      explanation: "While both wars shared some causes, WWII was significantly shaped by the rise of fascism, the failures of Versailles, and the Great Depression.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist4_h3",
      question: "Evaluate the effectiveness of the League of Nations in maintaining world peace.",
      options: ["It was completely effective", "It failed due to lack of enforcement power, absence of major nations, and inability to prevent aggression", "It succeeded in all goals", "It was never tested"],
      correct: "It failed due to lack of enforcement power, absence of major nations, and inability to prevent aggression",
      explanation: "The League lacked military force, the US never joined, and it failed to stop aggression by Japan, Italy, and Germany.",
      difficulty: "Hard"
    }
  ],
  "Unit 5: Global and Regional Developments Since 1945": [
    {
      id: "g10_hist5_e1",
      question: "What was the Cold War?",
      options: ["A war fought in cold regions", "A geopolitical rivalry between the USA and USSR", "A minor conflict", "A trade agreement"],
      correct: "A geopolitical rivalry between the USA and USSR",
      explanation: "The Cold War was a period of political and military tension between the Western bloc (led by the US) and the Eastern bloc (led by the USSR).",
      difficulty: "Easy"
    },
    {
      id: "g10_hist5_e2",
      question: "What international organization replaced the League of Nations?",
      options: ["NATO", "United Nations", "European Union", "African Union"],
      correct: "United Nations",
      explanation: "The United Nations was established in 1945 to promote international cooperation and prevent future wars.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist5_e3",
      question: "What was decolonization?",
      options: ["Establishing new colonies", "The process by which colonies gained independence", "Colonial expansion", "Trade agreements"],
      correct: "The process by which colonies gained independence",
      explanation: "Decolonization was the process through which colonial territories achieved political independence from European powers.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist5_e4",
      question: "When did the Cold War end?",
      options: ["1975", "1989-1991", "2000", "1960"],
      correct: "1989-1991",
      explanation: "The Cold War ended with the fall of the Berlin Wall in 1989 and the dissolution of the Soviet Union in 1991.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist5_e5",
      question: "What was apartheid?",
      options: ["A form of government", "A system of racial segregation in South Africa", "An economic policy", "A military alliance"],
      correct: "A system of racial segregation in South Africa",
      explanation: "Apartheid was a system of institutionalized racial segregation enforced by the South African government from 1948 to 1991.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist5_m1",
      question: "What were proxy wars during the Cold War?",
      options: ["Direct wars between the US and USSR", "Wars in third countries where superpowers supported opposing sides", "Nuclear wars", "Trade wars"],
      correct: "Wars in third countries where superpowers supported opposing sides",
      explanation: "Proxy wars were conflicts where the US and USSR supported opposing factions in countries like Korea, Vietnam, and Angola.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist5_m2",
      question: "What was the Non-Aligned Movement?",
      options: ["A military alliance", "A group of states not formally aligned with either Cold War bloc", "A trade organization", "A European union"],
      correct: "A group of states not formally aligned with either Cold War bloc",
      explanation: "The Non-Aligned Movement was formed by countries seeking to remain independent of both the US and Soviet spheres of influence.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist5_m3",
      question: "What led to the fall of the Berlin Wall in 1989?",
      options: ["Military invasion", "Popular protests and reform movements in Eastern Europe", "Economic prosperity", "A natural disaster"],
      correct: "Popular protests and reform movements in Eastern Europe",
      explanation: "Growing demands for freedom, economic problems, and Gorbachev's reforms led to the opening and eventual demolition of the Berlin Wall.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist5_m4",
      question: "What was the significance of the formation of the Organization of African Unity (OAU)?",
      options: ["It promoted colonialism", "It promoted African unity, independence, and cooperation", "It was a European organization", "It had no significance"],
      correct: "It promoted African unity, independence, and cooperation",
      explanation: "The OAU, established in 1963, aimed to promote unity among African states and support decolonization efforts.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist5_h1",
      question: "Analyze how the Cold War affected developing nations in Africa and Asia.",
      options: ["It had no effect", "Superpowers intervened in local conflicts, supported dictators, and used nations as proxy battlegrounds", "It only affected Europe", "It promoted development"],
      correct: "Superpowers intervened in local conflicts, supported dictators, and used nations as proxy battlegrounds",
      explanation: "The Cold War drew developing nations into superpower rivalry, often destabilizing their political development and supporting authoritarian regimes.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist5_h2",
      question: "Evaluate the role of the United Nations in maintaining global peace since 1945.",
      options: ["Completely successful", "Mixed results with successes in peacekeeping but failures in preventing major conflicts", "Complete failure", "Not relevant"],
      correct: "Mixed results with successes in peacekeeping but failures in preventing major conflicts",
      explanation: "The UN has achieved successes in peacekeeping and humanitarian aid but has been limited by superpower vetoes and sovereignty concerns.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist5_h3",
      question: "How did globalization reshape international relations in the post-Cold War era?",
      options: ["It ended all conflicts", "It increased economic interdependence but also created new tensions around inequality and cultural identity", "It had no impact", "It restored colonialism"],
      correct: "It increased economic interdependence but also created new tensions around inequality and cultural identity",
      explanation: "Globalization brought economic integration and cultural exchange but also widened inequality and sparked identity-based conflicts.",
      difficulty: "Hard"
    }
  ],
  "Unit 6: Ethiopia: Internal Developments and External Influences from 1941 to 1991": [
    {
      id: "g10_hist6_e1",
      question: "Who was the emperor of Ethiopia from 1930 to 1974?",
      options: ["Menelik II", "Haile Selassie", "Tewodros II", "Yohannes IV"],
      correct: "Haile Selassie",
      explanation: "Emperor Haile Selassie ruled Ethiopia from 1930 until his overthrow in 1974.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist6_e2",
      question: "What was the Derg?",
      options: ["A political party", "A military junta that overthrew Haile Selassie in 1974", "A trade union", "A religious group"],
      correct: "A military junta that overthrew Haile Selassie in 1974",
      explanation: "The Derg was a military committee that deposed Emperor Haile Selassie and established a socialist government.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist6_e3",
      question: "Who led the Derg regime?",
      options: ["Haile Selassie", "Mengistu Haile Mariam", "Meles Zenawi", "Menelik II"],
      correct: "Mengistu Haile Mariam",
      explanation: "Colonel Mengistu Haile Mariam emerged as the leader of the Derg and ruled Ethiopia from 1977 to 1991.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist6_e4",
      question: "What was the Ethiopian Revolution of 1974?",
      options: ["An industrial revolution", "The overthrow of the monarchy and establishment of a military government", "A cultural movement", "A religious reformation"],
      correct: "The overthrow of the monarchy and establishment of a military government",
      explanation: "The 1974 revolution ended the Ethiopian monarchy and brought the Derg military regime to power.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist6_e5",
      question: "What ideology did the Derg adopt?",
      options: ["Capitalism", "Socialism/Marxism-Leninism", "Fascism", "Liberalism"],
      correct: "Socialism/Marxism-Leninism",
      explanation: "The Derg adopted Marxism-Leninism as its guiding ideology, nationalizing land and industries.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist6_m1",
      question: "What was the 'Red Terror' in Ethiopia?",
      options: ["A natural disaster", "A violent political campaign by the Derg against opponents", "A cultural festival", "An economic policy"],
      correct: "A violent political campaign by the Derg against opponents",
      explanation: "The Red Terror (1977-1978) was a campaign of mass killings directed against the Derg's political opponents.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist6_m2",
      question: "What caused the 1984-85 Ethiopian famine?",
      options: ["Only drought", "A combination of drought, civil war, and government policies", "Only government policies", "Foreign invasion"],
      correct: "A combination of drought, civil war, and government policies",
      explanation: "The famine resulted from severe drought compounded by the civil war and the Derg's resettlement and villagization programs.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist6_m3",
      question: "What was Haile Selassie's role in establishing the Organization of African Unity?",
      options: ["He opposed it", "He was instrumental in its founding and Addis Ababa was chosen as its headquarters", "He was not involved", "He left the organization"],
      correct: "He was instrumental in its founding and Addis Ababa was chosen as its headquarters",
      explanation: "Haile Selassie played a key role in founding the OAU in 1963, with Addis Ababa becoming its permanent headquarters.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist6_m4",
      question: "What was the land reform proclamation of 1975?",
      options: ["Privatization of land", "Nationalization of all rural land and distribution to peasants", "Sale of land to foreigners", "No change in land policy"],
      correct: "Nationalization of all rural land and distribution to peasants",
      explanation: "The Derg nationalized all rural land, abolishing the feudal land tenure system and redistributing land to peasant associations.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist6_h1",
      question: "Analyze the factors that led to the downfall of the Derg regime in 1991.",
      options: ["Foreign invasion only", "Military defeats, economic failure, loss of Soviet support, and armed resistance movements", "Natural disasters", "Popular elections"],
      correct: "Military defeats, economic failure, loss of Soviet support, and armed resistance movements",
      explanation: "The Derg fell due to defeats by EPRDF forces, economic collapse, the end of Soviet aid, and widespread opposition.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist6_h2",
      question: "Evaluate the impact of the Cold War on Ethiopian politics between 1974-1991.",
      options: ["No impact", "Ethiopia shifted from US to Soviet alliance, receiving military aid that prolonged the civil war", "Ethiopia remained neutral", "Only economic impact"],
      correct: "Ethiopia shifted from US to Soviet alliance, receiving military aid that prolonged the civil war",
      explanation: "The Derg's alignment with the USSR brought massive military aid, enabling it to fight internal opposition but also prolonging conflict.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist6_h3",
      question: "Compare the governance systems of Haile Selassie and the Derg.",
      options: ["They were identical", "Haile Selassie maintained a feudal monarchy while the Derg imposed military socialism", "Both were democratic", "Neither governed Ethiopia"],
      correct: "Haile Selassie maintained a feudal monarchy while the Derg imposed military socialism",
      explanation: "Haile Selassie's rule was characterized by feudal autocracy, while the Derg replaced it with a centralized military-socialist system.",
      difficulty: "Hard"
    }
  ],
  "Unit 7: Africa Since 1960": [
    {
      id: "g10_hist7_e1",
      question: "What is the significance of 1960 in African history?",
      options: ["Start of colonialism", "Known as the 'Year of Africa' when many nations gained independence", "Beginning of World War II", "Formation of the EU"],
      correct: "Known as the 'Year of Africa' when many nations gained independence",
      explanation: "In 1960, seventeen African countries gained independence, making it a landmark year for African decolonization.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist7_e2",
      question: "What was the main challenge facing newly independent African nations?",
      options: ["Too much wealth", "Nation-building, ethnic tensions, and economic development", "Overpopulation only", "Excessive democracy"],
      correct: "Nation-building, ethnic tensions, and economic development",
      explanation: "Newly independent African states faced challenges of building national identity, managing ethnic diversity, and developing their economies.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist7_e3",
      question: "What organization succeeded the OAU in 2002?",
      options: ["United Nations", "African Union (AU)", "NATO", "European Union"],
      correct: "African Union (AU)",
      explanation: "The African Union was established in 2002 to replace the OAU with a more effective continental organization.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist7_e4",
      question: "Who was Nelson Mandela?",
      options: ["A colonial governor", "The first Black president of South Africa who fought against apartheid", "A military dictator", "A European diplomat"],
      correct: "The first Black president of South Africa who fought against apartheid",
      explanation: "Nelson Mandela led the struggle against apartheid, was imprisoned for 27 years, and became South Africa's first democratically elected Black president.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist7_m1",
      question: "What were the causes of military coups in post-independence Africa?",
      options: ["Strong democracies", "Weak institutions, ethnic tensions, corruption, and Cold War interference", "Economic prosperity", "Religious unity"],
      correct: "Weak institutions, ethnic tensions, corruption, and Cold War interference",
      explanation: "Military coups were driven by weak democratic institutions, ethnic competition, corrupt governance, and superpower meddling.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist7_m2",
      question: "What was the impact of neocolonialism on African economies?",
      options: ["Complete independence", "Continued economic dependence on former colonial powers", "Rapid industrialization", "Self-sufficiency"],
      correct: "Continued economic dependence on former colonial powers",
      explanation: "Neocolonialism refers to the continued economic and political influence of former colonial powers over nominally independent African states.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist7_m3",
      question: "What was the Rwandan genocide of 1994?",
      options: ["A political election", "The mass killing of approximately 800,000 Tutsi and moderate Hutu", "A natural disaster", "An economic crisis"],
      correct: "The mass killing of approximately 800,000 Tutsi and moderate Hutu",
      explanation: "The Rwandan genocide was a mass slaughter carried out over approximately 100 days by Hutu extremists.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist7_h1",
      question: "Evaluate the challenges of democratization in post-independence Africa.",
      options: ["No challenges existed", "Colonial legacy, ethnic divisions, weak institutions, and external interference hindered democratic development", "Democracy was fully achieved", "Only economic challenges"],
      correct: "Colonial legacy, ethnic divisions, weak institutions, and external interference hindered democratic development",
      explanation: "African democratization has been challenged by colonial institutional legacies, ethnic politics, corruption, and foreign intervention.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist7_h2",
      question: "Analyze the role of the African Union in addressing continental challenges.",
      options: ["It has solved all problems", "It has made progress in peacekeeping and integration but faces limitations in enforcement and resources", "It has no role", "It only focuses on trade"],
      correct: "It has made progress in peacekeeping and integration but faces limitations in enforcement and resources",
      explanation: "The AU has contributed to conflict resolution and economic integration but struggles with limited resources and member state sovereignty.",
      difficulty: "Hard"
    }
  ],
  "Unit 8: Post-1991 Developments in Ethiopia": [
    {
      id: "g10_hist8_e1",
      question: "What political change occurred in Ethiopia in 1991?",
      options: ["Monarchy was restored", "The EPRDF took power after the fall of the Derg", "Ethiopia was colonized", "A military coup occurred"],
      correct: "The EPRDF took power after the fall of the Derg",
      explanation: "The Ethiopian People's Revolutionary Democratic Front (EPRDF) overthrew the Derg regime in 1991.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist8_e2",
      question: "What form of government was established in Ethiopia after 1991?",
      options: ["Monarchy", "Federal democratic republic", "Military dictatorship", "Communist state"],
      correct: "Federal democratic republic",
      explanation: "Ethiopia adopted a federal system with ethnic-based regional states under a democratic republican framework.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist8_e3",
      question: "When was the current Ethiopian constitution adopted?",
      options: ["1987", "1991", "1995", "2000"],
      correct: "1995",
      explanation: "The Federal Democratic Republic of Ethiopia's constitution was adopted in 1995, establishing the federal system.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist8_e4",
      question: "What is ethnic federalism?",
      options: ["A unitary system", "A federal system organized along ethnic and linguistic lines", "A monarchy", "A colonial system"],
      correct: "A federal system organized along ethnic and linguistic lines",
      explanation: "Ethiopia's ethnic federalism divides the country into regions based on dominant ethnic groups, giving them self-governance rights.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist8_m1",
      question: "What was the Eritrean-Ethiopian War (1998-2000)?",
      options: ["A civil war", "A border conflict between Ethiopia and Eritrea", "A trade dispute", "A cultural exchange"],
      correct: "A border conflict between Ethiopia and Eritrea",
      explanation: "The war was fought over disputed border areas, particularly around the town of Badme, resulting in significant casualties.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist8_m2",
      question: "What economic changes occurred in Ethiopia after 1991?",
      options: ["Return to feudalism", "Shift toward a market-oriented economy with significant growth", "Complete nationalization", "No changes"],
      correct: "Shift toward a market-oriented economy with significant growth",
      explanation: "Post-1991 Ethiopia transitioned from a command economy to a more market-oriented system, experiencing rapid economic growth.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist8_m3",
      question: "What political reforms occurred in Ethiopia starting in 2018?",
      options: ["Return to monarchy", "Liberalization of political space, release of prisoners, and peace with Eritrea", "Military takeover", "No changes"],
      correct: "Liberalization of political space, release of prisoners, and peace with Eritrea",
      explanation: "Prime Minister Abiy Ahmed introduced reforms including releasing political prisoners, allowing free press, and making peace with Eritrea.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist8_h1",
      question: "Evaluate the advantages and disadvantages of ethnic federalism in Ethiopia.",
      options: ["Only advantages", "It promotes self-governance and cultural rights but may also deepen ethnic divisions", "Only disadvantages", "It has no effects"],
      correct: "It promotes self-governance and cultural rights but may also deepen ethnic divisions",
      explanation: "Ethnic federalism has empowered ethnic groups with self-governance but has also been criticized for reinforcing ethnic identity over national unity.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist8_h2",
      question: "Analyze Ethiopia's economic development strategy since 1991 and its outcomes.",
      options: ["No strategy existed", "State-led development with significant growth but challenges in inequality and governance", "Pure free market", "Communist economy"],
      correct: "State-led development with significant growth but challenges in inequality and governance",
      explanation: "Ethiopia pursued a developmental state model achieving impressive GDP growth but facing criticism regarding political freedom and equitable development.",
      difficulty: "Hard"
    }
  ],
  "Unit 9: Indigenous Knowledge and Heritages of Ethiopia": [
    {
      id: "g10_hist9_e1",
      question: "What is indigenous knowledge?",
      options: ["Foreign knowledge", "Knowledge developed by local communities over generations", "Scientific research", "Colonial education"],
      correct: "Knowledge developed by local communities over generations",
      explanation: "Indigenous knowledge is the local knowledge unique to a culture or society, developed through generations of experience.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist9_e2",
      question: "Which Ethiopian site is famous for its rock-hewn churches?",
      options: ["Axum", "Lalibela", "Harar", "Gondar"],
      correct: "Lalibela",
      explanation: "Lalibela is famous for its eleven medieval monolithic rock-hewn churches, which are a UNESCO World Heritage Site.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist9_e3",
      question: "What is the Axum Obelisk?",
      options: ["A modern building", "An ancient carved stone pillar from the Kingdom of Axum", "A European monument", "A natural formation"],
      correct: "An ancient carved stone pillar from the Kingdom of Axum",
      explanation: "The Axum obelisks (stelae) are ancient carved pillars that served as markers for royal tombs in the Aksumite kingdom.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist9_e4",
      question: "What is Ge'ez?",
      options: ["A modern language", "An ancient Ethiopian script and liturgical language", "A European language", "A type of food"],
      correct: "An ancient Ethiopian script and liturgical language",
      explanation: "Ge'ez is an ancient South Semitic language that developed its own script and remains the liturgical language of the Ethiopian Orthodox Church.",
      difficulty: "Easy"
    },
    {
      id: "g10_hist9_m1",
      question: "What is the significance of Ethiopian coffee culture?",
      options: ["It is not important", "Ethiopia is the birthplace of coffee with rich cultural ceremonies", "Coffee was imported from Europe", "Only for export"],
      correct: "Ethiopia is the birthplace of coffee with rich cultural ceremonies",
      explanation: "Ethiopia is recognized as the birthplace of coffee, and the coffee ceremony is a central part of Ethiopian social and cultural life.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist9_m2",
      question: "What traditional Ethiopian conflict resolution mechanisms exist?",
      options: ["None", "Elder mediation systems like Shimglina and Jaarsummaa", "Only court systems", "Foreign arbitration"],
      correct: "Elder mediation systems like Shimglina and Jaarsummaa",
      explanation: "Ethiopian communities use traditional conflict resolution led by respected elders to mediate disputes and restore harmony.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist9_m3",
      question: "What are UNESCO World Heritage Sites in Ethiopia?",
      options: ["None exist", "Sites like Lalibela, Axum, Simien Mountains, and the Lower Omo Valley", "Only one site", "Only natural sites"],
      correct: "Sites like Lalibela, Axum, Simien Mountains, and the Lower Omo Valley",
      explanation: "Ethiopia has numerous UNESCO World Heritage Sites including both cultural and natural sites of outstanding universal value.",
      difficulty: "Medium"
    },
    {
      id: "g10_hist9_h1",
      question: "Evaluate the role of indigenous knowledge in modern Ethiopian development.",
      options: ["It is irrelevant", "It provides sustainable solutions in agriculture, medicine, and conflict resolution that complement modern approaches", "It should be abandoned", "Only for tourism"],
      correct: "It provides sustainable solutions in agriculture, medicine, and conflict resolution that complement modern approaches",
      explanation: "Indigenous knowledge offers time-tested approaches to environmental management, healthcare, and social harmony that can enhance modern development strategies.",
      difficulty: "Hard"
    },
    {
      id: "g10_hist9_h2",
      question: "How can Ethiopia balance heritage preservation with modernization?",
      options: ["Choose only modernization", "Through integrated policies that protect cultural heritage while promoting sustainable development", "Ignore heritage", "Stop all development"],
      correct: "Through integrated policies that protect cultural heritage while promoting sustainable development",
      explanation: "Balancing heritage and modernization requires policies that recognize the value of cultural assets while enabling progressive development.",
      difficulty: "Hard"
    }
  ]
};
