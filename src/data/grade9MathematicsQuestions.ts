export interface MathematicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade9MathematicsQuestions: { [chapter: string]: MathematicsQuestion[] } = {
  "Unit 1: Further on Sets": [
    { id: "math9_s_e1", question: "What is the union of A = {1, 2, 3} and B = {3, 4, 5}?", options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 4, 5}", "{1, 2, 3, 3, 4, 5}"], correct: "{1, 2, 3, 4, 5}", explanation: "The union combines all elements from both sets without repetition.", difficulty: "Easy" },
    { id: "math9_s_e2", question: "What is A ∩ B if A = {1, 2, 3} and B = {2, 3, 4}?", options: ["{2, 3}", "{1, 4}", "{1, 2, 3, 4}", "{}"], correct: "{2, 3}", explanation: "The intersection contains elements common to both sets.", difficulty: "Easy" },
    { id: "math9_s_e3", question: "If U = {1,2,3,4,5} and A = {1,3,5}, what is A'?", options: ["{2, 4}", "{1, 3, 5}", "{1, 2, 3, 4, 5}", "{}"], correct: "{2, 4}", explanation: "The complement A' contains all elements in U that are not in A.", difficulty: "Easy" },
    { id: "math9_s_e4", question: "What is the empty set denoted by?", options: ["∅ or {}", "{0}", "{ }", "None"], correct: "∅ or {}", explanation: "The empty set is denoted by ∅ or {} and contains no elements.", difficulty: "Easy" },
    { id: "math9_s_e5", question: "How many subsets does a set with 3 elements have?", options: ["8", "6", "3", "9"], correct: "8", explanation: "A set with n elements has 2ⁿ subsets. 2³ = 8.", difficulty: "Easy" },
    { id: "math9_s_e6", question: "If A ⊂ B, which is always true?", options: ["A ∩ B = A", "A ∪ B = A", "A = B", "B ⊂ A"], correct: "A ∩ B = A", explanation: "If A is a subset of B, then every element of A is in B, so A ∩ B = A.", difficulty: "Easy" },
    { id: "math9_s_e7", question: "What is A \\ B if A = {1,2,3,4} and B = {3,4,5}?", options: ["{1, 2}", "{3, 4}", "{5}", "{1, 2, 5}"], correct: "{1, 2}", explanation: "A \\ B contains elements in A that are not in B.", difficulty: "Easy" },
    { id: "math9_s_e8", question: "Which of the following is a finite set?", options: ["The set of days in a week", "The set of natural numbers", "The set of real numbers", "The set of points on a line"], correct: "The set of days in a week", explanation: "A finite set has a countable, limited number of elements. Days of a week = 7.", difficulty: "Easy" },
    { id: "math9_s_m1", question: "If n(A) = 15, n(B) = 10, and n(A ∩ B) = 5, what is n(A ∪ B)?", options: ["20", "25", "30", "15"], correct: "20", explanation: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 15 + 10 - 5 = 20.", difficulty: "Medium" },
    { id: "math9_s_m2", question: "In a class of 40 students, 25 play football and 20 play basketball. If 10 play both, how many play neither?", options: ["5", "10", "15", "0"], correct: "5", explanation: "Players of at least one = 25 + 20 - 10 = 35. Neither = 40 - 35 = 5.", difficulty: "Medium" },
    { id: "math9_s_m3", question: "What does a Venn diagram with two overlapping circles represent?", options: ["Two sets with common elements", "Two disjoint sets", "A universal set only", "A subset relationship"], correct: "Two sets with common elements", explanation: "Overlapping circles show that the two sets share some elements (their intersection).", difficulty: "Medium" },
    { id: "math9_s_m4", question: "If A = {x : x is a prime number less than 10}, what is n(A)?", options: ["4", "3", "5", "2"], correct: "4", explanation: "Primes less than 10: {2, 3, 5, 7}. So n(A) = 4.", difficulty: "Medium" },
    { id: "math9_s_m5", question: "Which property states A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)?", options: ["Distributive property", "Associative property", "Commutative property", "De Morgan's law"], correct: "Distributive property", explanation: "This is the distributive property of union over intersection.", difficulty: "Medium" },
    { id: "math9_s_h1", question: "By De Morgan's law, (A ∪ B)' equals:", options: ["A' ∩ B'", "A' ∪ B'", "(A ∩ B)'", "A ∪ B'"], correct: "A' ∩ B'", explanation: "De Morgan's law states (A ∪ B)' = A' ∩ B'.", difficulty: "Hard" },
    { id: "math9_s_h2", question: "If n(U) = 50, n(A) = 30, n(B) = 25, n(A ∪ B) = 40, find n(A' ∩ B').", options: ["10", "15", "20", "5"], correct: "10", explanation: "n(A' ∩ B') = n((A ∪ B)') = n(U) - n(A ∪ B) = 50 - 40 = 10.", difficulty: "Hard" },
    { id: "math9_s_h3", question: "For three sets A, B, C: n(A∪B∪C) = n(A)+n(B)+n(C)−n(A∩B)−n(A∩C)−n(B∩C)+n(A∩B∩C). If n(A)=20, n(B)=15, n(C)=10, n(A∩B)=5, n(A∩C)=3, n(B∩C)=4, n(A∩B∩C)=2, find n(A∪B∪C).", options: ["35", "33", "30", "37"], correct: "35", explanation: "20+15+10-5-3-4+2 = 35.", difficulty: "Hard" },
  ],

  "Unit 2: The Number System": [
    { id: "math9_ns_e1", question: "Which of the following is an irrational number?", options: ["√2", "3/4", "0.5", "7"], correct: "√2", explanation: "√2 cannot be expressed as a fraction and has a non-repeating, non-terminating decimal.", difficulty: "Easy" },
    { id: "math9_ns_e2", question: "What is the absolute value of -7?", options: ["7", "-7", "0", "1/7"], correct: "7", explanation: "The absolute value of a number is its distance from 0, always non-negative. |-7| = 7.", difficulty: "Easy" },
    { id: "math9_ns_e3", question: "Which set of numbers includes all integers and fractions?", options: ["Rational numbers", "Natural numbers", "Whole numbers", "Irrational numbers"], correct: "Rational numbers", explanation: "Rational numbers include all numbers that can be written as p/q where q ≠ 0.", difficulty: "Easy" },
    { id: "math9_ns_e4", question: "What is √49?", options: ["7", "6", "8", "49"], correct: "7", explanation: "√49 = 7 because 7 × 7 = 49.", difficulty: "Easy" },
    { id: "math9_ns_e5", question: "0.333... is equal to which fraction?", options: ["1/3", "1/4", "3/10", "33/100"], correct: "1/3", explanation: "0.333... is a repeating decimal that equals 1/3.", difficulty: "Easy" },
    { id: "math9_ns_e6", question: "Between which two integers does √10 lie?", options: ["3 and 4", "2 and 3", "4 and 5", "9 and 11"], correct: "3 and 4", explanation: "Since 3² = 9 and 4² = 16, √10 is between 3 and 4.", difficulty: "Easy" },
    { id: "math9_ns_m1", question: "Simplify: √50", options: ["5√2", "25√2", "√25", "10√5"], correct: "5√2", explanation: "√50 = √(25 × 2) = 5√2.", difficulty: "Medium" },
    { id: "math9_ns_m2", question: "What is 2√3 × 3√3?", options: ["18", "6√3", "6√9", "5√3"], correct: "18", explanation: "2√3 × 3√3 = 6 × (√3)² = 6 × 3 = 18.", difficulty: "Medium" },
    { id: "math9_ns_m3", question: "Rationalize the denominator: 1/√5", options: ["√5/5", "5/√5", "1/5", "√5"], correct: "√5/5", explanation: "Multiply numerator and denominator by √5: (1×√5)/(√5×√5) = √5/5.", difficulty: "Medium" },
    { id: "math9_ns_m4", question: "Which of the following is a rational number?", options: ["0.75", "√3", "π", "√7"], correct: "0.75", explanation: "0.75 = 3/4, which is a ratio of two integers.", difficulty: "Medium" },
    { id: "math9_ns_m5", question: "Simplify: √12 + √27", options: ["5√3", "√39", "3√3 + 2√3", "6√3"], correct: "5√3", explanation: "√12 = 2√3, √27 = 3√3. So 2√3 + 3√3 = 5√3.", difficulty: "Medium" },
    { id: "math9_ns_h1", question: "If x = 3 + 2√2, what is 1/x?", options: ["3 - 2√2", "3 + 2√2", "1/(3+2√2)", "2√2 - 3"], correct: "3 - 2√2", explanation: "1/x = 1/(3+2√2). Rationalizing: (3-2√2)/((3+2√2)(3-2√2)) = (3-2√2)/(9-8) = 3-2√2.", difficulty: "Hard" },
    { id: "math9_ns_h2", question: "Simplify: (√5 + √3)(√5 - √3)", options: ["2", "8", "√15", "√2"], correct: "2", explanation: "Using difference of squares: (√5)² - (√3)² = 5 - 3 = 2.", difficulty: "Hard" },
    { id: "math9_ns_h3", question: "Express 0.1̄2̄ (0.121212...) as a fraction.", options: ["4/33", "12/99", "12/100", "1/8"], correct: "4/33", explanation: "Let x = 0.121212... Then 100x = 12.121212... So 99x = 12, x = 12/99 = 4/33.", difficulty: "Hard" },
  ],

  "Unit 3: Solving Equations": [
    { id: "math9_eq_e1", question: "Solve: 2x + 5 = 13", options: ["x = 4", "x = 9", "x = 3", "x = 6"], correct: "x = 4", explanation: "2x = 13 - 5 = 8, so x = 4.", difficulty: "Easy" },
    { id: "math9_eq_e2", question: "Solve: x/3 = 7", options: ["x = 21", "x = 7/3", "x = 10", "x = 3"], correct: "x = 21", explanation: "Multiply both sides by 3: x = 21.", difficulty: "Easy" },
    { id: "math9_eq_e3", question: "What is the solution of 5x - 3 = 2x + 9?", options: ["x = 4", "x = 3", "x = 6", "x = 2"], correct: "x = 4", explanation: "5x - 2x = 9 + 3 → 3x = 12 → x = 4.", difficulty: "Easy" },
    { id: "math9_eq_e4", question: "If 3(x - 2) = 12, what is x?", options: ["6", "4", "2", "10"], correct: "6", explanation: "3x - 6 = 12 → 3x = 18 → x = 6.", difficulty: "Easy" },
    { id: "math9_eq_e5", question: "Solve the system: x + y = 10, x - y = 4", options: ["x=7, y=3", "x=5, y=5", "x=8, y=2", "x=6, y=4"], correct: "x=7, y=3", explanation: "Adding: 2x = 14, x = 7. Then y = 10 - 7 = 3.", difficulty: "Easy" },
    { id: "math9_eq_m1", question: "Solve: x² - 5x + 6 = 0", options: ["x = 2 or x = 3", "x = -2 or x = -3", "x = 1 or x = 6", "x = -1 or x = -6"], correct: "x = 2 or x = 3", explanation: "Factor: (x-2)(x-3) = 0, so x = 2 or x = 3.", difficulty: "Medium" },
    { id: "math9_eq_m2", question: "Solve: 2x² = 18", options: ["x = ±3", "x = 9", "x = ±9", "x = 3"], correct: "x = ±3", explanation: "x² = 9, so x = ±3.", difficulty: "Medium" },
    { id: "math9_eq_m3", question: "Using the quadratic formula, solve x² + 2x - 3 = 0.", options: ["x = 1 or x = -3", "x = -1 or x = 3", "x = 3 or x = -1", "x = 2 or x = -2"], correct: "x = 1 or x = -3", explanation: "x = (-2 ± √(4+12))/2 = (-2 ± 4)/2. So x = 1 or x = -3.", difficulty: "Medium" },
    { id: "math9_eq_m4", question: "The discriminant of x² - 4x + 4 = 0 is:", options: ["0", "4", "8", "-4"], correct: "0", explanation: "Discriminant = b² - 4ac = 16 - 16 = 0. This means one repeated root.", difficulty: "Medium" },
    { id: "math9_eq_m5", question: "Solve: |2x - 1| = 5", options: ["x = 3 or x = -2", "x = 3", "x = -2", "x = 2 or x = -3"], correct: "x = 3 or x = -2", explanation: "2x - 1 = 5 → x = 3, or 2x - 1 = -5 → x = -2.", difficulty: "Medium" },
    { id: "math9_eq_h1", question: "Solve the system: 2x + 3y = 12, 4x - y = 5", options: ["x = 27/14, y = 38/14", "x = 2, y = 3", "x = 3, y = 2", "x = 1, y = 1"], correct: "x = 27/14, y = 38/14", explanation: "From equation 2: y = 4x - 5. Substituting: 2x + 3(4x-5) = 12 → 14x = 27 → x = 27/14.", difficulty: "Hard" },
    { id: "math9_eq_h2", question: "If the roots of x² + bx + c = 0 are 3 and -2, find b and c.", options: ["b = -1, c = -6", "b = 1, c = -6", "b = -1, c = 6", "b = 5, c = 6"], correct: "b = -1, c = -6", explanation: "Sum of roots = -b → 3+(-2) = -b → b = -1. Product = c → 3×(-2) = -6.", difficulty: "Hard" },
    { id: "math9_eq_h3", question: "For what values of k does kx² + 4x + 1 = 0 have equal roots?", options: ["k = 4", "k = 2", "k = 1", "k = 0"], correct: "k = 4", explanation: "For equal roots: b² - 4ac = 0 → 16 - 4k = 0 → k = 4.", difficulty: "Hard" },
  ],

  "Unit 4: Solving Inequalities": [
    { id: "math9_iq_e1", question: "Solve: x + 3 > 7", options: ["x > 4", "x > 10", "x < 4", "x > 3"], correct: "x > 4", explanation: "x > 7 - 3 = 4.", difficulty: "Easy" },
    { id: "math9_iq_e2", question: "Solve: 2x ≤ 10", options: ["x ≤ 5", "x ≤ 10", "x ≥ 5", "x < 5"], correct: "x ≤ 5", explanation: "Divide both sides by 2: x ≤ 5.", difficulty: "Easy" },
    { id: "math9_iq_e3", question: "When you multiply both sides of an inequality by a negative number, you must:", options: ["Reverse the inequality sign", "Keep the same sign", "Remove the inequality", "Square both sides"], correct: "Reverse the inequality sign", explanation: "Multiplying or dividing by a negative reverses the inequality direction.", difficulty: "Easy" },
    { id: "math9_iq_e4", question: "Solve: -3x < 12", options: ["x > -4", "x < -4", "x > 4", "x < 4"], correct: "x > -4", explanation: "Divide by -3 and reverse: x > -4.", difficulty: "Easy" },
    { id: "math9_iq_e5", question: "Which interval represents x ≥ 2?", options: ["[2, ∞)", "(2, ∞)", "(-∞, 2]", "(-∞, 2)"], correct: "[2, ∞)", explanation: "x ≥ 2 includes 2, so we use a closed bracket: [2, ∞).", difficulty: "Easy" },
    { id: "math9_iq_m1", question: "Solve: 3x - 7 > 2x + 1", options: ["x > 8", "x > 6", "x < 8", "x > 1"], correct: "x > 8", explanation: "3x - 2x > 1 + 7 → x > 8.", difficulty: "Medium" },
    { id: "math9_iq_m2", question: "Solve: -2 ≤ 3x + 1 < 10", options: ["-1 ≤ x < 3", "x < 3", "x ≥ -1", "-1 < x ≤ 3"], correct: "-1 ≤ x < 3", explanation: "Subtract 1: -3 ≤ 3x < 9. Divide by 3: -1 ≤ x < 3.", difficulty: "Medium" },
    { id: "math9_iq_m3", question: "Solve: |x - 3| < 5", options: ["-2 < x < 8", "x < 8", "x > -2", "x < 5"], correct: "-2 < x < 8", explanation: "-5 < x - 3 < 5 → -2 < x < 8.", difficulty: "Medium" },
    { id: "math9_iq_m4", question: "On a number line, an open circle at 4 means:", options: ["4 is not included", "4 is included", "x = 4", "The solution is empty"], correct: "4 is not included", explanation: "An open circle means the endpoint is not part of the solution (strict inequality).", difficulty: "Medium" },
    { id: "math9_iq_h1", question: "Solve: x² - 4x - 5 > 0", options: ["x < -1 or x > 5", "-1 < x < 5", "x > 5", "x < -1"], correct: "x < -1 or x > 5", explanation: "Factor: (x-5)(x+1) > 0. The parabola is positive when x < -1 or x > 5.", difficulty: "Hard" },
    { id: "math9_iq_h2", question: "Solve: (x+2)/(x-1) ≤ 0", options: ["-2 ≤ x < 1", "x ≤ -2 or x > 1", "x < 1", "-2 < x < 1"], correct: "-2 ≤ x < 1", explanation: "The expression is zero at x = -2 and undefined at x = 1. Testing intervals: negative on [-2, 1).", difficulty: "Hard" },
    { id: "math9_iq_h3", question: "If |2x + 1| ≥ 7, the solution is:", options: ["x ≤ -4 or x ≥ 3", "-4 ≤ x ≤ 3", "x ≥ 3", "x ≤ -4"], correct: "x ≤ -4 or x ≥ 3", explanation: "2x+1 ≥ 7 → x ≥ 3, or 2x+1 ≤ -7 → x ≤ -4.", difficulty: "Hard" },
  ],

  "Unit 5: Introduction to Trigonometry": [
    { id: "math9_tr_e1", question: "In a right triangle, sin(θ) is defined as:", options: ["Opposite/Hypotenuse", "Adjacent/Hypotenuse", "Opposite/Adjacent", "Hypotenuse/Opposite"], correct: "Opposite/Hypotenuse", explanation: "Sine is the ratio of the opposite side to the hypotenuse.", difficulty: "Easy" },
    { id: "math9_tr_e2", question: "What is cos(0°)?", options: ["1", "0", "-1", "Undefined"], correct: "1", explanation: "cos(0°) = 1.", difficulty: "Easy" },
    { id: "math9_tr_e3", question: "What is sin(90°)?", options: ["1", "0", "-1", "√2/2"], correct: "1", explanation: "sin(90°) = 1.", difficulty: "Easy" },
    { id: "math9_tr_e4", question: "What is tan(45°)?", options: ["1", "0", "√2", "Undefined"], correct: "1", explanation: "tan(45°) = sin(45°)/cos(45°) = 1.", difficulty: "Easy" },
    { id: "math9_tr_e5", question: "In SOH-CAH-TOA, what does CAH stand for?", options: ["Cosine = Adjacent/Hypotenuse", "Cosine = Adjacent/Horizontal", "Cosine = Angle/Height", "Cotangent = Adjacent/Hypotenuse"], correct: "Cosine = Adjacent/Hypotenuse", explanation: "CAH: Cosine equals Adjacent over Hypotenuse.", difficulty: "Easy" },
    { id: "math9_tr_m1", question: "If sin(θ) = 3/5, what is cos(θ) in a right triangle?", options: ["4/5", "3/4", "5/3", "5/4"], correct: "4/5", explanation: "Using sin²θ + cos²θ = 1: cos²θ = 1 - 9/25 = 16/25, cosθ = 4/5.", difficulty: "Medium" },
    { id: "math9_tr_m2", question: "What is sin(30°)?", options: ["1/2", "√3/2", "√2/2", "1"], correct: "1/2", explanation: "sin(30°) = 1/2 is a standard trigonometric value.", difficulty: "Medium" },
    { id: "math9_tr_m3", question: "If tan(θ) = 1, what is θ (for 0° < θ < 90°)?", options: ["45°", "30°", "60°", "90°"], correct: "45°", explanation: "tan(45°) = 1.", difficulty: "Medium" },
    { id: "math9_tr_m4", question: "In a right triangle with hypotenuse 10 and angle 30°, what is the opposite side?", options: ["5", "10", "5√3", "10√3"], correct: "5", explanation: "sin(30°) = opposite/10 → opposite = 10 × 1/2 = 5.", difficulty: "Medium" },
    { id: "math9_tr_h1", question: "Simplify: sin²θ + cos²θ", options: ["1", "sin(2θ)", "2", "tan²θ"], correct: "1", explanation: "This is the Pythagorean identity: sin²θ + cos²θ = 1 for all θ.", difficulty: "Hard" },
    { id: "math9_tr_h2", question: "If sin(A) = cos(B) and A + B = 90°, this is because:", options: ["Sine and cosine are cofunctions", "They are inverse functions", "A = B always", "They cancel out"], correct: "Sine and cosine are cofunctions", explanation: "sin(A) = cos(90° - A). If A + B = 90°, then B = 90° - A, so sin(A) = cos(B).", difficulty: "Hard" },
    { id: "math9_tr_h3", question: "From the top of a 20m tower, the angle of depression to a point is 30°. How far is the point from the base?", options: ["20√3 m", "20 m", "10√3 m", "40 m"], correct: "20√3 m", explanation: "tan(30°) = 20/d → d = 20/tan(30°) = 20/(1/√3) = 20√3.", difficulty: "Hard" },
  ],

  "Unit 6: Regular Polygons": [
    { id: "math9_rp_e1", question: "How many sides does a hexagon have?", options: ["6", "5", "7", "8"], correct: "6", explanation: "A hexagon has 6 sides.", difficulty: "Easy" },
    { id: "math9_rp_e2", question: "What is the sum of interior angles of a triangle?", options: ["180°", "360°", "90°", "270°"], correct: "180°", explanation: "The sum of interior angles of a triangle is always 180°.", difficulty: "Easy" },
    { id: "math9_rp_e3", question: "A regular polygon has:", options: ["All sides and angles equal", "Only sides equal", "Only angles equal", "No equal parts"], correct: "All sides and angles equal", explanation: "A regular polygon is both equilateral (equal sides) and equiangular (equal angles).", difficulty: "Easy" },
    { id: "math9_rp_e4", question: "What is the sum of interior angles of a quadrilateral?", options: ["360°", "180°", "540°", "720°"], correct: "360°", explanation: "Sum = (n-2)×180° = (4-2)×180° = 360°.", difficulty: "Easy" },
    { id: "math9_rp_m1", question: "What is the sum of interior angles of a pentagon?", options: ["540°", "360°", "720°", "900°"], correct: "540°", explanation: "Sum = (5-2) × 180° = 3 × 180° = 540°.", difficulty: "Medium" },
    { id: "math9_rp_m2", question: "Each interior angle of a regular hexagon is:", options: ["120°", "60°", "90°", "135°"], correct: "120°", explanation: "Each angle = (6-2)×180°/6 = 720°/6 = 120°.", difficulty: "Medium" },
    { id: "math9_rp_m3", question: "How many diagonals does a hexagon have?", options: ["9", "6", "12", "3"], correct: "9", explanation: "Number of diagonals = n(n-3)/2 = 6(3)/2 = 9.", difficulty: "Medium" },
    { id: "math9_rp_m4", question: "Each exterior angle of a regular polygon with 10 sides is:", options: ["36°", "18°", "72°", "144°"], correct: "36°", explanation: "Each exterior angle = 360°/n = 360°/10 = 36°.", difficulty: "Medium" },
    { id: "math9_rp_h1", question: "A regular polygon has interior angles of 156°. How many sides does it have?", options: ["15", "12", "18", "20"], correct: "15", explanation: "Exterior angle = 180° - 156° = 24°. Number of sides = 360°/24° = 15.", difficulty: "Hard" },
    { id: "math9_rp_h2", question: "The area of a regular hexagon with side length s is:", options: ["(3√3/2)s²", "6s²", "3s²", "(√3/4)s²"], correct: "(3√3/2)s²", explanation: "A regular hexagon can be divided into 6 equilateral triangles. Area = 6 × (√3/4)s² = (3√3/2)s².", difficulty: "Hard" },
  ],

  "Unit 7: Congruency and Similarity": [
    { id: "math9_cs_e1", question: "Two triangles are congruent if they have:", options: ["Same shape and size", "Same shape only", "Same size only", "Same color"], correct: "Same shape and size", explanation: "Congruent figures are identical in shape and size.", difficulty: "Easy" },
    { id: "math9_cs_e2", question: "Which is a congruence criterion for triangles?", options: ["SAS", "AAA", "SSA", "AA"], correct: "SAS", explanation: "SAS (Side-Angle-Side) is a valid triangle congruence criterion.", difficulty: "Easy" },
    { id: "math9_cs_e3", question: "Similar triangles have:", options: ["Same shape but possibly different size", "Same size", "Same perimeter", "Same area"], correct: "Same shape but possibly different size", explanation: "Similar figures have the same shape; corresponding angles are equal and sides are proportional.", difficulty: "Easy" },
    { id: "math9_cs_e4", question: "In similar triangles, corresponding angles are:", options: ["Equal", "Supplementary", "Complementary", "Different"], correct: "Equal", explanation: "In similar triangles, all corresponding angles are equal.", difficulty: "Easy" },
    { id: "math9_cs_m1", question: "If △ABC ~ △DEF with scale factor 2, and AB = 6, what is DE?", options: ["12", "3", "6", "8"], correct: "12", explanation: "With scale factor 2: DE = 2 × AB = 2 × 6 = 12.", difficulty: "Medium" },
    { id: "math9_cs_m2", question: "Which similarity criterion requires two pairs of equal angles?", options: ["AA", "SSS", "SAS", "ASA"], correct: "AA", explanation: "AA (Angle-Angle) criterion: if two angles of one triangle equal two angles of another, they are similar.", difficulty: "Medium" },
    { id: "math9_cs_m3", question: "If two triangles are similar with ratio 3:5, and the smaller has area 18, what is the larger's area?", options: ["50", "30", "45", "75"], correct: "50", explanation: "Area ratio = (3/5)² = 9/25. So larger area = 18 × 25/9 = 50.", difficulty: "Medium" },
    { id: "math9_cs_h1", question: "In △ABC, DE ∥ BC with D on AB and E on AC. If AD/DB = 2/3, what is DE/BC?", options: ["2/5", "2/3", "3/5", "3/2"], correct: "2/5", explanation: "By the basic proportionality theorem, AD/AB = 2/5, so DE/BC = 2/5.", difficulty: "Hard" },
    { id: "math9_cs_h2", question: "Two similar triangles have perimeters 24 and 36. If the shorter side of the smaller triangle is 4, what is the corresponding side of the larger?", options: ["6", "8", "9", "12"], correct: "6", explanation: "Scale factor = 36/24 = 3/2. Corresponding side = 4 × 3/2 = 6.", difficulty: "Hard" },
  ],

  "Unit 8: Vectors in Two Dimensions": [
    { id: "math9_v_e1", question: "A vector has:", options: ["Magnitude and direction", "Magnitude only", "Direction only", "Neither"], correct: "Magnitude and direction", explanation: "A vector is defined by both its magnitude (size) and direction.", difficulty: "Easy" },
    { id: "math9_v_e2", question: "What is the magnitude of vector (3, 4)?", options: ["5", "7", "12", "1"], correct: "5", explanation: "|v| = √(3² + 4²) = √(9+16) = √25 = 5.", difficulty: "Easy" },
    { id: "math9_v_e3", question: "If u = (2, 3) and v = (1, 4), what is u + v?", options: ["(3, 7)", "(2, 12)", "(3, 1)", "(1, -1)"], correct: "(3, 7)", explanation: "u + v = (2+1, 3+4) = (3, 7).", difficulty: "Easy" },
    { id: "math9_v_e4", question: "What is 3 × (2, -1)?", options: ["(6, -3)", "(5, 2)", "(6, 3)", "(2, -3)"], correct: "(6, -3)", explanation: "Scalar multiplication: 3(2, -1) = (6, -3).", difficulty: "Easy" },
    { id: "math9_v_m1", question: "If a = (4, 3) and b = (1, -2), what is a - b?", options: ["(3, 5)", "(5, 1)", "(3, -5)", "(5, 5)"], correct: "(3, 5)", explanation: "a - b = (4-1, 3-(-2)) = (3, 5).", difficulty: "Medium" },
    { id: "math9_v_m2", question: "The zero vector has:", options: ["Magnitude 0 and no specific direction", "Magnitude 1", "Direction north", "Magnitude 0 and direction east"], correct: "Magnitude 0 and no specific direction", explanation: "The zero vector (0, 0) has magnitude 0 and no defined direction.", difficulty: "Medium" },
    { id: "math9_v_m3", question: "Two vectors are equal if they have:", options: ["Same magnitude and direction", "Same magnitude only", "Same direction only", "Same starting point"], correct: "Same magnitude and direction", explanation: "Equal vectors have identical magnitude and direction regardless of position.", difficulty: "Medium" },
    { id: "math9_v_h1", question: "Find the unit vector in the direction of (3, 4).", options: ["(3/5, 4/5)", "(3, 4)", "(1, 1)", "(4/5, 3/5)"], correct: "(3/5, 4/5)", explanation: "Unit vector = v/|v| = (3,4)/5 = (3/5, 4/5).", difficulty: "Hard" },
    { id: "math9_v_h2", question: "If vectors a and b are perpendicular, their dot product is:", options: ["0", "1", "-1", "|a||b|"], correct: "0", explanation: "Perpendicular vectors have a dot product of zero: a · b = 0.", difficulty: "Hard" },
  ],

  "Unit 9: Statistics and Probability": [
    { id: "math9_sp_e1", question: "The mean of 4, 6, 8, 10, 12 is:", options: ["8", "6", "10", "7"], correct: "8", explanation: "Mean = (4+6+8+10+12)/5 = 40/5 = 8.", difficulty: "Easy" },
    { id: "math9_sp_e2", question: "The median of 3, 7, 1, 9, 5 is:", options: ["5", "7", "3", "1"], correct: "5", explanation: "Arranged: 1, 3, 5, 7, 9. The middle value is 5.", difficulty: "Easy" },
    { id: "math9_sp_e3", question: "The mode of 2, 3, 3, 5, 7, 3, 8 is:", options: ["3", "5", "2", "8"], correct: "3", explanation: "The mode is the most frequent value. 3 appears three times.", difficulty: "Easy" },
    { id: "math9_sp_e4", question: "The probability of getting heads when flipping a fair coin is:", options: ["1/2", "1", "0", "1/4"], correct: "1/2", explanation: "A fair coin has 2 equally likely outcomes. P(heads) = 1/2.", difficulty: "Easy" },
    { id: "math9_sp_e5", question: "The range of the data set {3, 7, 2, 9, 5} is:", options: ["7", "5", "9", "2"], correct: "7", explanation: "Range = maximum - minimum = 9 - 2 = 7.", difficulty: "Easy" },
    { id: "math9_sp_m1", question: "A die is rolled. What is P(even number)?", options: ["1/2", "1/3", "1/6", "2/3"], correct: "1/2", explanation: "Even numbers: {2, 4, 6} = 3 outcomes out of 6. P = 3/6 = 1/2.", difficulty: "Medium" },
    { id: "math9_sp_m2", question: "The median of 12, 5, 8, 3, 10, 7 is:", options: ["7.5", "8", "7", "5"], correct: "7.5", explanation: "Arranged: 3, 5, 7, 8, 10, 12. Median = (7+8)/2 = 7.5.", difficulty: "Medium" },
    { id: "math9_sp_m3", question: "If P(A) = 0.3, what is P(A')?", options: ["0.7", "0.3", "1.3", "0"], correct: "0.7", explanation: "P(A') = 1 - P(A) = 1 - 0.3 = 0.7.", difficulty: "Medium" },
    { id: "math9_sp_m4", question: "Two dice are rolled. How many total outcomes are there?", options: ["36", "12", "6", "24"], correct: "36", explanation: "Each die has 6 outcomes. Total = 6 × 6 = 36.", difficulty: "Medium" },
    { id: "math9_sp_h1", question: "The variance of {2, 4, 6, 8, 10} is:", options: ["8", "4", "10", "6"], correct: "8", explanation: "Mean = 6. Variance = [(2-6)²+(4-6)²+(6-6)²+(8-6)²+(10-6)²]/5 = [16+4+0+4+16]/5 = 40/5 = 8.", difficulty: "Hard" },
    { id: "math9_sp_h2", question: "A bag has 3 red and 5 blue balls. Two balls are drawn without replacement. P(both red) is:", options: ["3/28", "9/64", "3/8", "6/56"], correct: "3/28", explanation: "P = (3/8) × (2/7) = 6/56 = 3/28.", difficulty: "Hard" },
    { id: "math9_sp_h3", question: "The standard deviation of a data set is the:", options: ["Square root of the variance", "Square of the variance", "Mean of the data", "Range divided by 2"], correct: "Square root of the variance", explanation: "Standard deviation = √variance.", difficulty: "Hard" },
  ],
};
