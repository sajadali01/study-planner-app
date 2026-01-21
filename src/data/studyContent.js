import { studyContent2 } from './studyContent2';

// Rename: this is ALWAYS the 9th-class dataset
export const studyContent9 = {
    'Computer Science': {
        chapters: ['Computer System', 'Computitational Thinking and Algorithms', 'Programing Fundamentals'],
        content: {
            'Computer System': {
                points: [
                    "Computer works in a cycle: Input → Process → Output → Storage.",
                    "Hardware and software work together to perform tasks.",
                    "CPU consists of ALU (Arithmetic Logic Unit) and CU (Control Unit).",
                    "Memory hierarchy: Registers > Cache > RAM > Secondary Storage.",
                    "Input devices provide data, output devices display processed results.",
                    "Software types: System software (OS), Application software (Word, Excel).",
                    "Networking allows computers to communicate and share resources."
                ],
                definitions: [
                    "Computer: An electronic device that accepts data, processes it, and produces output.",
                    "Hardware: Physical components of a computer like CPU, RAM, keyboard, monitor.",
                    "Software: Set of programs that instruct the computer to perform tasks.",
                    "Input Device: Device used to enter data into a computer (e.g., keyboard, mouse).",
                    "Output Device: Device used to display information from a computer (e.g., monitor, printer).",
                    "Central Processing Unit (CPU): Brain of the computer responsible for processing instructions.",
                    "Memory: Component used to store data temporarily (RAM) or permanently (ROM).",
                    "Secondary Storage: Devices used to store data permanently (HDD, SSD)."
                ],
            },
            'Computitational Thinking and Algorithms': {
                points: [
                    "Computational thinking helps solve real-world problems efficiently.",
                    "Algorithms are the backbone of programming and automation.",
                    "Flowcharts use symbols to visually represent steps in a process.",
                    "Decomposition simplifies complex problems for easier solving.",
                    "Pattern recognition allows reuse of existing solutions.",
                    "Abstraction improves focus on relevant data and processes.",
                    "Debugging ensures programs run correctly."
                ],
                definitions: [
                    "Computational Thinking: Approach to solving problems using computer science concepts.",
                    "Algorithm: Step-by-step procedure to solve a problem.",
                    "Flowchart: Diagrammatic representation of an algorithm.",
                    "Problem Decomposition: Breaking a complex problem into smaller parts.",
                    "Pattern Recognition: Identifying similarities to simplify solutions.",
                    "Abstraction: Ignoring unnecessary details to focus on important aspects.",
                    "Debugging: Process of finding and correcting errors in a program."
                ],
            },
            'Programing Fundamentals':{
                points : [
                    "Programming is used to solve problems and automate tasks.",
                    "Variables store values of different types for manipulation in programs.",
                    "Operators perform arithmetic, logical, and relational operations.",
                    "Control structures: if-else, loops, switch-case control program flow.",
                    "Functions allow modular, reusable code.",
                    "Good programming practice: meaningful variable names, comments, indentation.",
                    "Debugging is critical to correct program behavior."
                ],
                definitions: [
                    "Programming Language: A formal language used to write computer programs.",
                    "Source Code: Human-readable instructions written in a programming language.",
                    "Compiler: Software that translates source code into machine code.",
                    "Interpreter: Executes instructions line by line.",
                    "Variable: A named memory location to store data.",
                    "Data Type: Classification of data (int, float, char, string, bool).",
                    "Operator: Symbol that performs operations on variables or values (+, -, *, /, %).",
                    "Input/Output: Methods to take input from user and display output on screen."
                ]   
            }
        }
    },
    'Maths': {
        chapters: ['Real Numbers', 'Logarithms', 'Sets and Relations', 'Factorization and Algebric Multiplications'],
        content: {
            'Real Numbers': {
                points: [
                    "Real numbers include rational and irrational numbers.",
                    "Natural, whole numbers, and integers are subsets of real numbers.",
                    "Rational numbers have terminating or repeating decimals.",
                    "Irrational numbers have non-terminating and non-repeating decimals.",
                    "Number line helps visualize the position of numbers.",
                    "Operations like addition, subtraction, multiplication, and division are defined on real numbers."
                ],
                definitions: [
                    "Real Numbers: All numbers that can be represented on a number line, including rational and irrational numbers.",
                    "Natural Numbers: Counting numbers starting from 1.",
                    "Whole Numbers: Natural numbers including zero.",
                    "Integers: Positive and negative whole numbers including zero.",
                    "Rational Numbers: Numbers that can be written in the form p/q where p and q are integers and q ≠ 0.",
                    "Irrational Numbers: Numbers that cannot be expressed as p/q and have non-terminating, non-repeating decimals.",
                    "Number Line: A straight line on which numbers are represented by points."
                ],
                examples: [
                    '===========formulas and rules===========',
                    "Rational number form: p/q where q ≠ 0",
                    "Closure property: a + b ∈ R, a × b ∈ R",
                    "Commutative: a + b = b + a",
                    "Associative: (a + b) + c = a + (b + c)"
                ]
            },
            'Logarithms':{
                points:[
                    "Logarithms simplify complex calculations.",
                    "They convert multiplication into addition.",
                    "Characteristic may be positive, zero, or negative.",
                    "Mantissa is always positive.",
                    "Antilogarithms are used to find original numbers.",
                    "Log tables are used when calculators are unavailable."
                ],
                definitions:[
                    "Logarithm: The exponent to which a base must be raised to obtain a given number.",
                    "Base: The number whose power is considered in a logarithm.",
                    "Common Logarithm: Logarithm with base 10.",
                    "Characteristic: Integer part of a logarithm.",
                    "Mantissa: Decimal part of a logarithm.",
                    "Antilogarithm: The number whose logarithm is known."
                ],
                examples:[
                    '========Laws and Rules========',
                    "log(ab) = log a + log b",
                    "log(a/b) = log a − log b",
                    "log(a^n) = n log a",
                    "log 1 = 0",
                    "log 10 = 1",
                    "Antilog(x) = 10^x"
                ]
            },
            'Sets and Relations':{
                points:[
                    "Sets can be written in roster or set-builder form.",
                    "Venn diagrams represent sets visually.",
                    "Subsets can be proper or improper.",
                    "Universal set includes all related elements.",
                    "Empty set has no elements.",
                    "Operations on sets help organize data."
                ],
                definitions:[
                    "Set: A well-defined collection of objects.",
                    "Element: An object belonging to a set.",
                    "Empty Set: A set having no elements.",
                    "Finite Set: A set with limited number of elements.",
                    "Infinite Set: A set with unlimited elements.",
                    "Subset: A set whose elements are all contained in another set.",
                    "Universal Set: The set containing all objects under discussion."
                ],
                examples:[
                    '=======Formulas and Notations======',
                    "Union: A ∪ B",
                    "Intersection: A ∩ B",
                    "Difference: A − B",
                    "Subset notation: A ⊆ B",
                    "Number of subsets = 2^n"
                ]
            },
            'Factorization and Algebric Multiplications':{
                points:[
                    "Factorization simplifies expressions.",
                    "Common factor method is applied first.",
                    "Identities help expand and factor expressions.",
                    "Algebraic multiplication follows distributive law.",
                    "Factorization is essential for solving equations.",
                    "Special products save time in calculations."
                ],
                definitions:[
                    "Algebraic Expression: Combination of variables and constants using arithmetic operations.",
                    "Factorization: Expressing an algebraic expression as a product of factors.",
                    "Polynomial: Expression with variables having non-negative integer powers.",
                    "Coefficient: Numerical factor of a term.",
                    "Identity: An equation true for all values of variables."
                ],
                examples:[
                    '============Formulas and Identites==========',
                    "(a+b)² = a² + 2ab + b²",
                    "(a-b)² = a² - 2ab + b²",
                    "a² - b² = (a+b)(a-b)",
                    "(x+a)(x+b) = x² + (a+b)x + ab",
                    "(a+b+c)² = a² + b² + c² + 2(ab + bc + ca)"
                ]
            }
        }
    },
    'Physics': {
        chapters: ['Physical Quantities', 'Kinematics', 'Dynamics 1', 'Dynamics 2', 'Pressure and Deformation  in Solids', 'Work and Energy'],
        content: {
            'Physical Quantities': {
                points: [
                    'Physics explains natural phenomena and is the foundation of all sciences.',
                    'All physical quantities have a numerical value and a unit.',
                    'Base quantities are independent; derived quantities are combinations of base quantities.',
                    'SI system ensures standardization of units worldwide.',
                    'Prefixes like kilo, milli, micro, nano help express very large or small quantities conveniently.',
                    'Scientific notation is used to simplify very large or very small numbers.',
                    'Measuring instruments include meter rule, vernier calipers, and screw gauge.',
                    'Every measurement has errors: systematic, random, and zero error.',
                    'Accuracy refers to closeness to true value; precision refers to repeatability of measurements.',
                    'Significant figures indicate meaningful digits in a measurement.',
                    'Proper measurement is essential in experiments, engineering, and daily life.',
                    'Errors can be minimized by proper technique, calibration, and careful observation.'
                ],
                definitions: [
                    "Physics is the branch of science that deals with the study of matter, energy, and their mutual interactions.",
                    "A physical quantity is a quantity that can be measured and expressed with a numerical value and a unit.",
                    "Base quantities are fundamental physical quantities that cannot be derived from other quantities.",
                    "Derived quantities are quantities obtained by combining base quantities using mathematical operations.",
                    "The International System of Units (SI) is a globally accepted system of measurement units.",
                    "Scientific notation is a method of writing very large or very small numbers in powers of ten.",
                    "An error is the difference between the measured value and the true value.",
                    "Systematic error occurs repeatedly due to faulty instruments or methods.",
                    "Random error occurs unpredictably and varies in magnitude.",
                    "Zero error is caused when an instrument does not read zero correctly.",
                    "Accuracy is the closeness of a measured value to the true value.",
                    "Precision is the closeness of repeated measurements to each other.",
                    "Significant figures are digits in a measurement that convey meaningful precision."
                ],
                examples: [
                    'Base: Length (meter), Mass (kilogram), Time (second)',
                    'Derived: Speed (m/s), Force (Newton = kg⋅m/s²), Density (kg/m³)',
                    'Scientific Notation: 300000 = 3 × 10^5, 0.0025 = 2.5 × 10^-3',
                    'Measuring length: Using meter rule, measuring tape',
                    'Measuring small objects: Using Vernier Calipers or Screw Gauge',
                    'Error Example: If true length = 10 cm, measured = 10.1 cm → error = 0.1 cm',
                    'Systematic Error: Ruler worn at 0 mark, always adds +1 mm',
                    'Random Error: Reading varies 10.2, 10.4, 10.3 cm due to shaky hand',
                    'Zero Error: Vernier scale does not read 0 correctly',
                    'Accuracy: Measuring 5 m but true length = 5 m → highly accurate',
                    'Precision: Measuring 5.2 cm three times and getting 5.2 cm each time → high precision',
                    'Significant Figures: 2.50 → 3 SF, 0.0023 → 2 SF'
                ]
            },
            'Kinematics': {
                points: [
                    'Kinematics is the study of motion without considering the forces that cause it.',
                    'Motion is the change of position of an object over time.',
                    'Force is the push or pull that causes motion.',
                    'Inertia is the resistance of an object to change in motion.',
                    'Mass is the quantity of matter in an object.',
                    'Weight is the force of gravity on an object.'
                ],
                definitions: [
                    "Kinematics is the branch of physics that deals with the motion of objects without considering the forces causing the motion.",
                    "Displacement is the shortest distance from initial to final position in a specified direction.",
                    "Distance is the total length of the path traveled by an object, irrespective of direction.",
                    "Speed is the distance traveled per unit time, a scalar quantity.",
                    "Velocity is the displacement per unit time, a vector quantity.",
                    "Acceleration is the rate of change of velocity with time.",
                    "Uniform motion is motion at constant velocity.",
                    "Uniformly accelerated motion is motion with constant acceleration.",
                ],
                examples: [
                    "A car travels 100 km north in 2 hours: Displacement = 100 km north, Distance = 100 km",
                    "A person runs around a 400 m track and returns to start: Displacement = 0 m, Distance = 400 m",
                    "Speed example: A train covers 60 km in 1 hour → Speed = 60 km/h",
                    "Velocity example: A car moves 100 km east in 2 hours → Velocity = 50 km/h east",
                    "Acceleration example: A car increases its velocity from 0 to 60 km/h in 10 s → Acceleration = 6 km/h/s",
                    "Uniform motion: A cyclist moves at 20 km/h for 3 hours without changing speed",
                    "Uniformly accelerated motion: A freely falling object accelerates at 9.8 m/s²",
                ]
            },
            'Dynamics 1': {
                points: [
                    'Dynamics is the study of motion and the forces that cause it.',
                    'Motion is the change of position of an object over time.',
                    'Force is the push or pull that causes motion.',
                    'Inertia is the resistance of an object to change in motion.',
                    'Kinematics deals with the study of motion of objects without considering the causes.',
                    'The main quantities in kinematics are displacement, velocity, speed, and acceleration.',
                    'Displacement is the shortest distance between initial and final positions with direction.',
                    'Distance is the total path traveled irrespective of direction.',
                    'Speed = distance / time, a scalar quantity.',
                    'Velocity = displacement / time, a vector quantity.',
                    'Acceleration is the rate of change of velocity with time.',
                    'Equations of motion for uniformly accelerated motion:',
                    'v = u + at',
                    's = ut + 1/2 at²',
                    'v² = u² + 2as',
                    'Graphical representation of motion includes distance-time and velocity-time graphs.',
                    'Slope of distance-time graph gives speed; slope of velocity-time graph gives acceleration.',
                    'Area under velocity-time graph gives displacement.',
                    'Uniform motion means constant velocity; uniform acceleration means constant acceleration.',
                    'Kinematic quantities can be vector or scalar; direction is important for vectors.'
                ],
                definitions: [
                    "Dynamics is the branch of physics that deals with the study of the causes of motion, i.e., forces and their effects.",
                    "Force is a push or pull on an object that can change its state of motion or shape.",
                    "Inertia is the tendency of an object to resist changes in its state of motion.",
                    "Mass is the quantity of matter in an object and is a measure of its inertia.",
                    "Weight is the force of gravity acting on an object, calculated as W = m × g.",
                    "Friction is a force that opposes motion between two surfaces in contact.",
                    "Newton's First Law: An object remains at rest or moves with constant velocity unless acted upon by a net external force.",
                    "Newton's Second Law: The acceleration of an object is directly proportional to the net force and inversely proportional to its mass (F = m × a).",
                    "Newton's Third Law: For every action, there is an equal and opposite reaction."
                ],
                examples: [
                    "A stationary book on a table remains at rest until you push it (Newton’s First Law).",
                    "A car accelerates when the engine applies force to the wheels (F = m × a).",
                    "Rocket launches: Action = exhaust gases downward, Reaction = rocket moves upward (Third Law).",
                    "Sliding a block on a rough surface: friction slows it down.",
                    "A heavy truck requires more force to accelerate than a small car due to larger mass."
                ],
            },
            'Dynamics 2': {
                points: [
                    "Moment of force depends on magnitude of force and perpendicular distance from pivot.",
                    "Center of mass can lie inside or outside the object depending on shape.",
                    "Equilibrium requires both translational (∑F = 0) and rotational (∑τ = 0) equilibrium.",
                    "Stability is of three types: stable, unstable, and neutral.",
                    "Principle of moment is used in levers, seesaws, and balances.",
                    "Friction has two main types: static friction and kinetic friction.",
                    "Advantages of friction: helps walking, driving, writing; Disadvantages: causes wear and energy loss.",
                    "Frictional dissipation converts mechanical energy into heat.",
                    "Centripetal force acts perpendicular to velocity towards the center of circular motion.",
                    "Orbital motion is due to centripetal force provided by gravity."
                ],
                definitions: [
                    "Dynamics is the branch of physics that deals with the study of the causes of motion, i.e., forces and their effects.",
                    "Force is a push or pull on an object that can change its state of motion or shape.",
                    "Inertia is the tendency of an object to resist changes in its state of motion.",
                    "Mass is the quantity of matter in an object and is a measure of its inertia.",
                    "Weight is the force of gravity acting on an object, calculated as W = m × g.",
                    "Friction is a force that opposes motion between two surfaces in contact.",
                    "Newton's First Law: An object remains at rest or moves with constant velocity unless acted upon by a net external force.",
                    "Newton's Second Law: The acceleration of an object is directly proportional to the net force and inversely proportional to its mass (F = m × a).",
                    "Newton's Third Law: For every action, there is an equal and opposite reaction.",
                ],
                examples: [
                    "Moment of force: Applying 10 N at 0.5 m from pivot → Moment = 10 × 0.5 = 5 N·m",
                    "Center of mass: For a uniform rod, center of mass is at its midpoint",
                    "Equilibrium: A balanced seesaw where clockwise and anticlockwise moments are equal",
                    "Stability: A book lying flat on table is stable; a book on edge is unstable",
                    "Principle of moment: A seesaw with 30 kg child at 2 m and 20 kg child at x m → 30×2 = 20×x → x = 3 m",
                    "Static friction: Prevents a stationary car from sliding on a slope",
                    "Kinetic friction: Slows down a sliding box on floor",
                    "Frictional dissipation: Brakes convert car’s kinetic energy into heat",
                    "Centripetal force: Stone tied to a string and swung in circle experiences inward force",
                    "Orbital motion: Earth revolves around Sun in nearly circular orbit due to gravitational force"
                ],
            },
            'Pressure and Deformation  in Solids': {
                points: [
                    "Elasticity allows objects to regain shape after deformation within elastic limit.",
                    "Hooke’s Law is valid only up to the elastic limit of the material.",
                    "Stress and strain describe the intensity and magnitude of deformation.",
                    "Pressure is higher if force is concentrated over a smaller area.",
                    "Atmospheric pressure decreases with height above Earth’s surface.",
                    "Liquid pressure depends on density, gravity, and depth, and acts equally in all directions.",
                    "Pascal’s Principle enables multiplication of force in hydraulic systems.",
                    "Hydraulic lifts and brakes are practical applications of Pascal’s principle.",
                    "Deformation in solids can be stretching, compression, bending, or twisting.",
                    "Elastic potential energy is stored in a deformed elastic body."
                ],
                definitions: [
                    "Elasticity is the property of a material to regain its original shape after removal of deforming force.",
                    "Hooke’s Law: The extension of a spring is directly proportional to the applied force, provided the elastic limit is not exceeded. F = k × x",
                    "Stress is force applied per unit area: σ = F/A.",
                    "Strain is the deformation produced per unit length: ε = ΔL / L.",
                    "Pressure is force applied per unit area: P = F/A.",
                    "Atmospheric pressure is the pressure exerted by the weight of the air in the atmosphere.",
                    "Liquid pressure is the pressure exerted by a liquid at a given depth: P = ρ g h.",
                    "Pascal’s Principle: Pressure applied to an enclosed fluid is transmitted equally in all directions.",
                    "Hydraulic lift system uses liquid pressure to lift heavy objects.",
                    "Hydraulic car brake system uses liquid pressure to transmit force from pedal to brake pads."
                ],
                examples: [
                    "Stretching a spring: F = k × x; x = 0.1 m, k = 100 N/m → F = 10 N",
                    "Rubber band returns to original shape after being stretched (elasticity).",
                    "Pressure under a sharp nail is higher than under a flat board for same force.",
                    "Atmospheric pressure measured by mercury barometer; sea level ≈ 101.3 kPa",
                    "Liquid pressure: Water at depth h = 2 m, density = 1000 kg/m³ → P = 1000 × 9.8 × 2 = 19600 Pa",
                    "Hydraulic lift multiplies small force on a piston to lift a car using large piston area.",
                    "Hydraulic brake: Pedal force transmitted via brake fluid to brake pads at wheels."
                ],
            },
            'Work and Energy': {
                points: [
                    "Work requires both force and displacement; no displacement → no work.",
                    "Positive work: force and displacement in same direction; Negative work: opposite direction.",
                    "Kinetic energy depends on mass and velocity squared.",
                    "Potential energy depends on mass, gravity, and height.",
                    "Mechanical energy = KE + PE.",
                    "Energy is conserved in isolated systems; transforms between KE and PE.",
                    "Power measures rate of doing work: P = Work / Time.",
                    "Energy resources provide power for human activities.",
                    "Renewable resources can be replenished; non-renewable resources are finite.",
                    "Efficiency of energy conversion is important in engineering and environment.",
                ],
                definitions: [
                    "Work is done when a force is applied on an object and the object is displaced in the direction of the force.",
                    "Energy is the capacity to do work.",
                    "Kinetic Energy (KE) is the energy possessed by a body due to its motion: KE = 1/2 m v².",
                    "Potential Energy (PE) is the energy possessed by a body due to its position or configuration: PE = m g h.",
                    "Mechanical Energy is the sum of kinetic and potential energy.",
                    "Law of Conservation of Energy states that energy can neither be created nor destroyed; it only changes from one form to another.",
                    "Average power is the total work done divided by the total time taken.",
                    "Major energy resources: Fossil fuels (coal, oil, gas), Solar, Wind, Hydroelectric, Nuclear, Biomass.",
                ],
                examples: [
                    "Pushing a box 5 m with 10 N force → Work = F × d = 10 × 5 = 50 J",
                    "A moving car with mass 1000 kg at 20 m/s → KE = 1/2 m v² = 200,000 J",
                    "Lifting a 10 kg weight 2 m → PE = m g h = 10 × 9.8 × 2 = 196 J",
                    "A pendulum converts PE at top to KE at bottom of swing",
                    "Hydropower: water stored at height has PE converted to KE and then electrical energy",
                    "Solar panels convert solar energy into electrical energy",
                ]
            }
        }
    },
    'Chemistry': {
        chapters: ['Nature of Science and Chemistry', 'Matter', 'Atomic Structure', 'Periodic Table and Periodicity of Properties', 'Chemical Bonding', 'Stoichiometry'],
        content: {
                'Nature of Science and Chemistry': {
                    points: [
                        "Chemistry studies matter, its properties, and how it changes.",
                        "Scientific method includes observation, hypothesis, experiment, conclusion.",
                        "Laws are descriptive; Theories are explanatory.",
                        "Chemistry is central to other sciences like biology, physics, and environmental science.",
                        "Experiments must be reproducible and controlled."

                    ],
                    definitions: [
                        "Chemistry is the branch of science that studies the composition, structure, properties, and changes of matter.",
                        "Science is a systematic study of nature through observation and experiment.",
                        "Experiment is a procedure to test a hypothesis under controlled conditions.",
                        "Observation is gathering information using senses or instruments.",
                        "Hypothesis is a proposed explanation for an observation or phenomenon.",
                        "Theory is a well-substantiated explanation of some aspect of nature based on facts.",
                        "Law is a statement describing a consistent relationship observed in nature."
                    ],
                    examples: [
                        "Observation: Metal rusting when exposed to air and moisture.",
                        "Hypothesis: Rusting occurs due to reaction with oxygen and water.",
                        "Experiment: Placing iron in wet and dry conditions to test rust formation.",
                        "Law: Law of Conservation of Mass (mass remains constant in chemical reactions).",
                        "Theory: Atomic theory explaining matter is made of atoms."
                    ],
                },
                'Matter': {
                    points: [
                        "All matter is made up of elements, compounds, or mixtures.",
                        "Elements combine to form compounds in fixed ratios by mass.",
                        "Mixtures can be separated by physical methods (filtration, distillation, evaporation).",
                        "Matter exists in three main states: solid, liquid, gas (plasma as fourth in advanced physics).",
                        "Physical changes do not alter chemical composition; chemical changes do.",
                        "Homogeneous mixtures are also called solutions.",
                        "Heterogeneous mixtures show visibly different components.",
                    ],
                    definitions: [
                        "Matter is anything that has mass and occupies space.",
                        "Element is a substance that cannot be broken down into simpler substances by chemical means.",
                        "Compound is a substance formed when two or more elements chemically combine in fixed proportions.",
                        "Mixture is a combination of two or more substances that are not chemically bonded.",
                        "Homogeneous mixture has uniform composition and properties throughout.",
                        "Heterogeneous mixture has non-uniform composition and properties.",
                        "Atom is the smallest particle of an element that retains its chemical properties.",
                        "Molecule is the smallest particle of a compound that retains its chemical properties.",
                    ],
                    examples: [
                        "Element: Hydrogen (H), Oxygen (O)",
                        "Compound: Water (H₂O), Carbon dioxide (CO₂)",
                        "Homogeneous mixture: Salt dissolved in water",
                        "Heterogeneous mixture: Sand and water",
                        "Physical change: Melting ice → water",
                        "Chemical change: Burning wood → ash + smoke",
                    ]
                },
                'Atomic Structure': {
                    points: [
                        "Atoms consist of nucleus (protons + neutrons) and electrons orbiting around.",
                        "Protons: positive charge, determine atomic number.",
                        "Neutrons: no charge, contribute to mass of atom.",
                        "Electrons: negative charge, involved in chemical reactions.",
                        "Mass number = protons + neutrons; Atomic number = protons.",
                        "Isotopes have same Z, different A; used in medicine, radiography, dating fossils.",
                        "Isobars have different Z, same A; used in nuclear reactions.",
                        "Electron arrangement follows shells (K, L, M...) and determines valency and chemical behavior."
                    ],
                    definitions: [
                        "Atom is the smallest particle of an element that retains its chemical properties.",
                        "Nucleus is the central part of an atom containing protons and neutrons.",
                        "Proton is a positively charged particle present in the nucleus.",
                        "Neutron is a neutral particle present in the nucleus.",
                        "Electron is a negatively charged particle revolving around the nucleus.",
                        "Atomic number (Z) is the number of protons in the nucleus of an atom.",
                        "Mass number (A) is the sum of protons and neutrons in the nucleus.",
                        "Isotopes are atoms of the same element with the same atomic number but different mass numbers.",
                        "Isobars are atoms of different elements with the same mass number.",
                        "Valency is the combining capacity of an element."
                    ],
                    examples: [
                        "Hydrogen atom: 1 proton, 0 neutron, 1 electron.",
                        "Carbon-12 and Carbon-14 are isotopes of Carbon (same Z=6, different A=12,14).",
                        "Mass number of oxygen-16 = 16; protons = 8, neutrons = 8.",
                        "Valency of hydrogen = 1, valency of oxygen = 2.",
                        "Electron configuration of sodium (Na): 2, 8, 1.",
                    ]
                },
                'Periodic Table and Periodicity of Properties': {
                    points: [
                        "Elements are arranged in increasing order of atomic number.",
                        "Elements in the same group have similar chemical properties due to same number of valence electrons.",
                        "Properties of elements show periodicity across a period (atomic radius, ionization energy, electronegativity).",
                        "Atomic radius decreases across a period, increases down a group.",
                        "Ionization energy and electronegativity increase across a period and decrease down a group.",
                        "Metals are on the left; non-metals on the right of the periodic table.",
                        "Metalloids have properties of both metals and non-metals.",
                        "Periodic trends help predict reactivity and chemical behavior of elements."
                    ],
                    definitions: [
                        "Periodic Table is a tabular arrangement of elements in order of increasing atomic number showing periodicity of properties.",
                        "Period is a horizontal row in the periodic table.",
                        "Group (or family) is a vertical column in the periodic table containing elements with similar chemical properties.",
                        "Atomic radius is the distance from the nucleus to the outermost electron.",
                        "Ionization energy is the energy required to remove an electron from an atom in gaseous state.",
                        "Electronegativity is the ability of an atom to attract electrons in a chemical bond.",
                        "Metallic character refers to the extent an element exhibits properties of metals.",
                        "Non-metals are elements that typically gain electrons and are poor conductors of heat and electricity."
                    ],
                    examples: [
                        "Sodium (Na) and Potassium (K) are in Group 1, both highly reactive metals.",
                        "Chlorine (Cl) and Fluorine (F) are halogens in Group 17, highly electronegative.",
                        "Atomic radius: Na > Mg > Al (across period decreases).",
                        "Ionization energy: Li < Be < B (across period increases).",
                        "Metalloid example: Silicon (Si) behaves partly like metal and partly like non-metal."
                    ]
                },
                'Chemical Bonding': {
                    points: [
                        "Atoms form bonds to achieve stable electron configuration (octet rule).",
                        "Ionic bonds involve electron transfer; covalent bonds involve electron sharing.",
                        "Metallic bonds explain properties like conductivity, malleability, and ductility of metals.",
                        "Polar covalent bonds occur when atoms have different electronegativities.",
                        "Non-polar covalent bonds occur when atoms have similar electronegativities.",
                        "Bonding determines chemical properties, melting/boiling points, and solubility.",
                        "Lewis dot structures represent valence electrons and bonding in molecules.",
                        "Ionic compounds form crystalline solids with high melting points.",
                        "Covalent compounds can be gases, liquids, or solids with lower melting points."
                    ],
                    definitions: [
                        "Chemical bond is the force that holds two atoms together in a molecule or compound.",
                        "Ionic bond is formed by the transfer of electrons from one atom to another, usually between metal and non-metal.",
                        "Covalent bond is formed by the sharing of electrons between two non-metal atoms.",
                        "Metallic bond is the force of attraction between free-moving valence electrons and positive metal ions.",
                        "Electronegativity is the ability of an atom to attract shared electrons in a bond.",
                        "Polar covalent bond is a covalent bond where electrons are shared unequally.",
                        "Non-polar covalent bond is a covalent bond where electrons are shared equally.",
                        "Valency is the combining capacity of an atom."
                    ],
                    examples: [
                        "Ionic bond: Sodium chloride (NaCl) – Na transfers 1 electron to Cl.",
                        "Covalent bond: Water (H2O) – Oxygen shares electrons with two Hydrogens.",
                        "Metallic bond: Copper (Cu) – positive ions in sea of delocalized electrons.",
                        "Polar covalent: HCl – Cl is more electronegative, electrons pulled closer.",
                        "Non-polar covalent: O2 molecule – equal sharing of electrons.",
                        "Lewis structure of CH4 shows 4 covalent bonds with hydrogen atoms."
                    ]
                },
                'Stoichiometry': {
                    points: [
                        "Chemical equations must be balanced to satisfy the law of conservation of mass.",
                        "Stoichiometry uses mole ratios from balanced equations to calculate amounts of reactants and products.",
                        "Molar mass is used to convert between grams and moles.",
                        "Limiting reagent determines maximum product formation.",
                        "Excess reagent remains after reaction is complete.",
                        "Stoichiometry calculations can be in grams, moles, or liters (for gases at STP).",
                        "Percent yield = (actual yield / theoretical yield) × 100."
                    ],
                    definitions: [
                        "Stoichiometry: The quantitative study of reactants and products in a chemical reaction.",
                        "Balanced Chemical Equation: An equation in which the number of atoms of each element is the same on both sides.",
                        "Mole: The amount of substance containing 6.022 × 10^23 particles (Avogadro’s number).",
                        "Molar Mass: The mass of one mole of a substance, usually expressed in g/mol.",
                        "Mole Ratio: The ratio of moles of substances as given by the coefficients in a balanced equation.",
                        "Limiting Reagent: The reactant that is completely consumed first and limits the amount of product formed.",
                        "Excess Reagent: The reactant that remains after the reaction is complete.",
                        "Theoretical Yield: The maximum amount of product predicted by stoichiometric calculations.",
                        "Actual Yield: The amount of product actually obtained from an experiment.",
                        "Percent Yield: The efficiency of a reaction, calculated as (actual yield / theoretical yield) × 100."
                    ],
                    examples: [
                        "===================FORMULAS====================\n",
                        "Number of moles (n) = Mass (m) / Molar Mass (M) → n = m / M",
                        "Number of particles = Number of moles × Avogadro's number → N = n × 6.022 × 10^23",
                        "Mass = Number of moles × Molar Mass → m = n × M",
                        "Limiting reagent: Compare mole ratio of reactants from balanced equation to determine which is limiting",
                        "Excess reagent remaining = Initial moles - (Moles reacted according to limiting reagent)",
                        "Percent yield = (Actual yield / Theoretical yield) × 100",
                        "Stoichiometric calculations: Use mole ratio from balanced chemical equation to relate reactants and products",
                        "Mole fraction (χ) = Moles of component / Total moles of mixture",
                        "Concentration (Molarity, M) = Moles of solute / Volume of solution (L)"
                    ]
                }
            }
        },
        'Biology': {
            chapters: ['Introduction to Biology', 'Biodiversity', 'Cells'],
            content: {
                'Introduction to Biology': {
                    points: [
                        "Living organisms are made of cells.",
                        "Biology is an experimental science.",
                        "Knowledge of biology helps improve quality of life.",
                        "Life processes are common in all living organisms."
                    ],
                    definitions: [
                        "Biology: The scientific study of living organisms.",
                        "Life: A condition that distinguishes living organisms from non-living things.",
                        "Botany: The study of plants.",
                        "Zoology: The study of animals.",
                        "Microbiology: The study of microscopic organisms.",
                        "Morphology: The study of form and structure of organisms.",
                        "Anatomy: The study of internal structure of organisms.",
                        "Physiology: The study of functions of living organisms.",
                        "Histology: The study of tissues.",
                        "Cell Biology: The study of structure and function of cells."
                    ],
                    examples: [
                        '===================Key Points/Concepts===================',
                        "Every organism has a unique scientific name.",
                        "Biodiversity supports life on Earth.",
                        "Classification helps identify relationships among organisms.",
                        "Loss of biodiversity affects ecosystems."
                    ]
                },
                'Biodiversity':{
                    points:[
                        "Biodiversity includes plants, animals, and microorganisms.",
                        "Classification helps study organisms easily.",
                        "Binomial nomenclature was introduced by Carl Linnaeus.",
                        "Scientific names are written in Latin.",
                        "Classification is based on similarities and differences.",
                        "Biodiversity maintains balance in ecosystems."
                    ],
                    definitions:[
                        "Biodiversity: The variety of living organisms present on Earth.",
                        "Species: A group of organisms that can interbreed and produce fertile offspring.",
                        "Taxonomy: The science of classification of organisms.",
                        "Classification: Arrangement of organisms into groups based on similarities.",
                        "Binomial Nomenclature: System of naming organisms using two names.",
                        "Genus: First part of scientific name indicating group.",
                        "Species Name: Second part of scientific name indicating specific organism."
                    ],
                    examples:[
                        '==========Key Concepts==========',
                        "Every organism has a unique scientific name.",
                        "Biodiversity supports life on Earth.",
                        "Classification helps identify relationships among organisms.",
                        "Loss of biodiversity affects ecosystems."
                    ]
                },
                'Cells':{
                    points:[
                        "Cells are the basic units of structure and function.",
                        "Unicellular organisms perform all life activities in one cell.",
                        "Multicellular organisms have specialized cells.",
                        "Cell membrane controls entry and exit of materials.",
                        "Nucleus controls cell activities.",
                        "Mitochondria produce energy.",
                        "Ribosomes help in protein formation."
                    ],
                    definitions:[
                        "Cell: The smallest structural and functional unit of life.",
                        "Unicellular Organism: Organism made of a single cell.",
                        "Multicellular Organism: Organism made of many cells.",
                        "Cell Theory: States that all living organisms are made of cells.",
                        "Cell Membrane: Thin boundary surrounding the cell.",
                        "Cytoplasm: Jelly-like substance inside the cell.",
                        "Nucleus: Control center of the cell.",
                        "Mitochondria: Powerhouse of the cell.",
                        "Ribosomes: Site of protein synthesis."
                    ],
                    examples:[
                        '==========Key Concepts==========',
                        "Cell theory explains the importance of cells.",
                        "Different organelles perform specific functions.",
                        "Energy production is essential for life.",
                        "Cells maintain internal balance."
                    ]
                }
            }
        },
    'English': {
        chapters: ['Grammar Basics', 'Comprehension', 'Writing Skills'],
        content: {
            'Grammar Basics': {
                points: [
                    "Grammar ensures correct and meaningful communication.",
                    "Parts of speech are the building blocks of sentences.",
                    "Nouns are classified into common, proper, abstract, and collective.",
                    "Verbs change form according to tense.",
                    "Adjectives describe nouns, while adverbs describe actions.",
                    "Prepositions show position, direction, or time.",
                    "Conjunctions connect ideas smoothly.",
                    "Correct grammar improves writing and speaking skills."
                ],
                definitions: [
                    "Grammar: The set of rules that govern the structure of a language.",
                    "Noun: A word used to name a person, place, thing, or idea.",
                    "Pronoun: A word used in place of a noun.",
                    "Verb: A word that shows action, occurrence, or state of being.",
                    "Adjective: A word that describes or modifies a noun.",
                    "Adverb: A word that modifies a verb, adjective, or another adverb.",
                    "Preposition: A word showing relation between a noun/pronoun and another word.",
                    "Conjunction: A word used to join words, phrases, or clauses.",
                    "Interjection: A word expressing sudden emotion or feeling.",
                    "Article: A word used before a noun to specify it (a, an, the).",
                    "Tense: A form of verb that shows time of action.",
                    "Sentence: A group of words that expresses a complete thought."
                ],
                examples: [
                    "Subject and predicate form a complete sentence.",
                    "Tenses are divided into present, past, and future.",
                    "Articles depend on sound, not spelling.",
                    "Sentence structure must follow grammar rules."
                ]
            },
            'Comprehension':{
                points:[
                    "Reading comprehension tests understanding of text.",
                    "Students must identify main ideas and supporting details.",
                    "Context clues help guess meanings of difficult words.",
                    "Inference requires logical thinking.",
                    "Answers should be brief and relevant.",
                    "Careful reading improves comprehension accuracy."
                ],
                definitions:[
                    "Comprehension: The ability to understand written text.",
                    "Paragraph: A group of sentences focused on one main idea.",
                    "Main Idea: The central thought of a passage.",
                    "Inference: A conclusion drawn from evidence and reasoning.",
                    "Context Clues: Words that help understand the meaning of difficult terms.",
                    "Summary: A brief statement of the main points of a text."
                ],
                examples:[
                    "Reading comprehension tests understanding of text.",
                    "Students must identify main ideas and supporting details.",
                    "Context clues help guess meanings of difficult words.",
                    "Inference requires logical thinking.",
                    "Answers should be brief and relevant.",
                    "Careful reading improves comprehension accuracy.",
                    "===============Skills Developed===============",
                    "Identifying main idea",
                    "Answering short questions",
                    "Vocabulary understanding",
                    "Drawing conclusions from text",
                    "Summarizing passages"
                ]
            },
            'Writing Skills':{
                points:[
                    "Clear ideas lead to effective writing.",
                    "Grammar accuracy is essential in writing.",
                    "Essays should have introduction, body, and conclusion.",
                    "Formal writing uses polite and professional language.",
                    "Informal writing is friendly and personal.",
                    "Correct punctuation improves readability.",
                    "Logical sequence makes writing effective."
                ],
                definitions:[
                    "Writing Skills: The ability to express ideas clearly in written form.",
                    "Essay: A short piece of writing on a specific topic.",
                    "Paragraph Writing: Writing focused on one main idea.",
                    "Letter: Written communication between two people.",
                    "Formal Letter: A letter written for official purposes.",
                    "Informal Letter: A letter written to friends or family.",
                    "Story Writing: Writing an imaginary or real narrative.",
                    "Application: A formal request written to an authority.",
                ],
                examples:[
                    "Key Writing Concept",
                    "Simple and clear language is preferred.",
                    "Ideas should be arranged logically.",
                    "Avoid repetition of words.",
                    "Proper format must be followed in letters and applications.",
                    "Spelling and punctuation must be correct.",
                ]
            }
            
        }
    },
    'Urdu': {
        chapters: ['قواعد', 'نثر', 'نظم'],
        content: {
            'قواعد': {
                points: [
                    'اسم: کسی شخص، جگہ، چیز یا خیال کا نام (مثال: احمد، کراچی، کتاب)',
                    'فعل: کام یا حالت کا نام (مثال: کھانا، دوڑنا، لکھنا، پڑھنا)',
                    'صفت: اسم کی تعریف کرتی ہے (مثال: اچھا، بڑا، خوبصورت)',
                    'حروف: اسم اور فعل کو جوڑتے ہیں (مثال: اور، لیکن، کیونکہ)'
                ],
                definitions: [
                    'اسم: کسی شخص، جگہ یا چیز کا نام',
                    'فعل: کام کا نام جو کوئی کرتا ہے',
                    'صفت: جو اسم کی خوبی یا خامی بیان کرے',
                    'ضمیر: اسم کی جگہ استعمال ہوتا ہے (میں، تم، وہ)',
                    'جملہ: مکمل بات جس سے معنی نکلے'
                ],
                examples: [
                    'اسم کی مثال: "احمد نے لاہور میں کتاب خریدی"',
                    'فعل کی مثال: "وہ تیزی سے دوڑتا ہے"',
                    'صفت کی مثال: "لمبا لڑکا سرخ قمیض پہنے ہوئے تھا"',
                    'جملہ: "محنتی طالب علم کامیاب ہوتا ہے"'
                ]
            }
        }
    },
    'Pakistan Studies': {
        chapters: ['Geography of Pakistan', 'History', 'Culture'],
        content: {
            'Geography of Pakistan': {
                points: [
                    'Pakistan is located in South Asia, bordered by India, China, Afghanistan, and Iran',
                    'Total area: 796,095 km², with diverse landscapes from mountains to deserts',
                    'Major rivers: Indus, Jhelum, Chenab, Ravi, Sutlej - form the Indus River System',
                    'Climate zones: Tropical (south), Temperate (north), Arid (Balochistan)'
                ],
                definitions: [
                    'Pakistan: Islamic Republic of Pakistan, independent since August 14, 1947',
                    'Capital: Islamabad - planned city in Pothohar Plateau',
                    'Provinces: Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan',
                    'National Language: Urdu, Official: Urdu and English',
                    'Geography: Study of physical features, climate, and resources of Pakistan'
                ],
                examples: [
                    'Mountains: K2 (2nd highest peak, 8,611m), Nanga Parbat, Hindu Kush',
                    'Rivers: Indus River (3,180 km) - longest river in Pakistan',
                    'Cities: Karachi (largest), Lahore (cultural capital), Islamabad (capital)',
                    'Borders: East-India, West-Afghanistan & Iran, North-China, South-Arabian Sea'
                ]
            }
        }
    }
};

// Add this at the bottom (or near exports) so callers can switch cleanly.
// NOTE: This does not change current behavior unless your UI uses it.
export const STUDY_CONTENT_BY_CLASS = {
  9: studyContent9,
  10: studyContent2,
  '9': studyContent9,
  '10': studyContent2,
};

export const DEFAULT_CLASS = 9;
export const SELECTED_CLASS_STORAGE_KEY = 'selectedClass';
export const CLASS_SCOPED_STORAGE_PREFIX = 'studyPlanner';

// --- internal helpers ---
function normalizeClass(value) {
  return value === 10 || value === '10' ? 10 : 9;
}
function hasWindow() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}
function classScopedPrefix(cls, prefix = CLASS_SCOPED_STORAGE_PREFIX) {
  const c = normalizeClass(cls);
  return `${prefix}:${c}:`;
}

// --- content switching ---
export function getStudyContentForClass(selectedClass) {
  const c = normalizeClass(selectedClass);
  return STUDY_CONTENT_BY_CLASS[c];
}

export function getStudyContentFromStorage(storageKey = SELECTED_CLASS_STORAGE_KEY) {
  if (!hasWindow()) return getStudyContentForClass(DEFAULT_CLASS);
  try {
    const stored = window.localStorage.getItem(storageKey);
    return getStudyContentForClass(stored ?? DEFAULT_CLASS);
  } catch {
    return getStudyContentForClass(DEFAULT_CLASS);
  }
}

// IMPORTANT: keep this named export for existing UI imports.
// It now resolves based on stored class (works after a full reload).
export const studyContent = getStudyContentFromStorage();

// --- storage helpers ---
export function clearClassScopedStorage(selectedClass, prefix = CLASS_SCOPED_STORAGE_PREFIX) {
  if (!hasWindow()) return;
  const needle = classScopedPrefix(selectedClass, prefix);
  try {
    for (let i = window.localStorage.length - 1; i >= 0; i--) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith(needle)) window.localStorage.removeItem(k);
    }
  } catch {
    // ignore
  }
}

export function clearAllClassScopedStorage(prefix = CLASS_SCOPED_STORAGE_PREFIX) {
  if (!hasWindow()) return;
  const needle = `${prefix}:`;
  try {
    for (let i = window.localStorage.length - 1; i >= 0; i--) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith(needle)) window.localStorage.removeItem(k);
    }
  } catch {
    // ignore
  }
}

export function setSelectedClassInStorage(selectedClass, storageKey = SELECTED_CLASS_STORAGE_KEY) {
  if (!hasWindow()) return normalizeClass(selectedClass);
  const c = normalizeClass(selectedClass);
  try {
    window.localStorage.setItem(storageKey, String(c));
  } catch {
    // ignore
  }
  return c;
}

/**
 * Use this in your "Switch Class" button handler.
 * This forces a real "start from beginning" (name/choice/etc.) by wiping storage and reloading.
 *
 * By default it wipes ALL localStorage/sessionStorage for this origin (then restores selectedClass).
 * If you prefer not to wipe everything, change wipeAll to false and rely on your own scoped keys.
 */
export function restartAppForClass(nextClass, { wipeAll = true } = {}) {
  if (!hasWindow()) return;

  const next = normalizeClass(nextClass);

  try {
    if (wipeAll) {
      // preserve selected class across wipe
      window.localStorage.clear();
      if (typeof window.sessionStorage !== 'undefined') window.sessionStorage.clear();
      window.localStorage.setItem(SELECTED_CLASS_STORAGE_KEY, String(next));
    } else {
      // minimal wipe: clear only planner-scoped keys for both classes
      clearAllClassScopedStorage(CLASS_SCOPED_STORAGE_PREFIX);
      window.localStorage.setItem(SELECTED_CLASS_STORAGE_KEY, String(next));
    }
  } catch {
    // ignore
  }

  // force a fresh boot so module-level `studyContent` re-resolves
  window.location.reload();
}