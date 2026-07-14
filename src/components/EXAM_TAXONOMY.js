/**
 * EXAM_TAXONOMY.js
 * 
 * Hardcoded chapter and topic NAMES for SEO.
 * Google crawls this file directly — chapter/topic names are visible
 * in the JS bundle and used to populate sidebar, meta tags and page content.
 * 
 * Slugs are used as API filter keys (matched against DB chapters.slug / topics.slug).
 * Names are displayed in UI and indexed by search engines.
 * 
 * Stats: 328 chapters, 2755 topics (JEE/NEET/SSC-CGL) + 196 chapters, 744 topics (CUET) = 524 chapters, 3499 topics
 * Source of truth: fresh_taxonomy_FINAL.sql
 */

export const EXAM_TAXONOMY = {
  "jee-main": {
    "name": "JEE Main",
    "subjects": [
      {
        "name": "Physics",
        "slug": "physics",
        "chapters": [
          {
            "name": "Physical World",
            "slug": "physical-world",
            "topics": [
              {
                "name": "Physics and Its Scope",
                "slug": "physics-scope"
              },
              {
                "name": "Fundamental Forces — Gravitational, Electromagnetic, Strong, Weak",
                "slug": "fundamental-forces"
              },
              {
                "name": "Nature of Physical Laws",
                "slug": "physical-laws"
              }
            ]
          },
          {
            "name": "Units and Measurements",
            "slug": "units-and-measurements",
            "topics": [
              {
                "name": "Physical Quantities — Fundamental and Derived",
                "slug": "fundamental-derived"
              },
              {
                "name": "SI Units and Their Definitions",
                "slug": "si-units"
              },
              {
                "name": "Dimensional Formula and Dimensional Equation",
                "slug": "dimensional-formula"
              },
              {
                "name": "Dimensional Analysis — Checking Consistency",
                "slug": "dimensional-consistency"
              },
              {
                "name": "Dimensional Analysis — Deriving Relations",
                "slug": "dimensional-deriving"
              },
              {
                "name": "Dimensional Analysis — Conversion of Units",
                "slug": "dimensional-conversion"
              },
              {
                "name": "Significant Figures and Rules",
                "slug": "significant-figures"
              },
              {
                "name": "Rounding Off Numbers",
                "slug": "rounding-off"
              },
              {
                "name": "Types of Errors — Systematic and Random",
                "slug": "error-types"
              },
              {
                "name": "Absolute, Relative and Percentage Error",
                "slug": "absolute-relative-error"
              }
            ]
          },
          {
            "name": "Motion in a Straight Line",
            "slug": "motion-straight-line",
            "topics": [
              {
                "name": "Position, Path Length and Displacement",
                "slug": "position-displacement"
              },
              {
                "name": "Average Velocity and Instantaneous Velocity",
                "slug": "velocity-types"
              },
              {
                "name": "Average Acceleration and Instantaneous Acceleration",
                "slug": "acceleration-types"
              },
              {
                "name": "Uniformly Accelerated Motion",
                "slug": "uniformly-accelerated"
              },
              {
                "name": "Kinematic Equations (v=u+at, s=ut+½at², v²=u²+2as)",
                "slug": "kinematic-equations"
              },
              {
                "name": "x-t, v-t and a-t Graphs — Analysis",
                "slug": "motion-graphs"
              },
              {
                "name": "Area under v-t Graph (Displacement)",
                "slug": "area-vt-graph"
              },
              {
                "name": "Free Fall and Motion Under Gravity",
                "slug": "free-fall"
              },
              {
                "name": "Reaction Time",
                "slug": "reaction-time"
              },
              {
                "name": "Relative Motion in 1D",
                "slug": "relative-motion-1d"
              }
            ]
          },
          {
            "name": "Motion in a Plane",
            "slug": "motion-plane",
            "topics": [
              {
                "name": "Scalars and Vectors — Definitions and Types",
                "slug": "scalars-vectors"
              },
              {
                "name": "Vector Addition — Triangle Law and Parallelogram Law",
                "slug": "vector-addition-laws"
              },
              {
                "name": "Resolution of Vectors into Components",
                "slug": "vector-resolution"
              },
              {
                "name": "Unit Vector and Position Vector",
                "slug": "unit-position-vector"
              },
              {
                "name": "Dot Product — Definition, Formula and Properties",
                "slug": "dot-product"
              },
              {
                "name": "Cross Product — Definition, Formula and Properties",
                "slug": "cross-product"
              },
              {
                "name": "Projectile Motion — Derivations (ToF, Range, Hmax)",
                "slug": "projectile-tof-range"
              },
              {
                "name": "Equation of Trajectory",
                "slug": "trajectory-equation"
              },
              {
                "name": "Projectile on Inclined Plane",
                "slug": "projectile-inclined"
              },
              {
                "name": "Uniform Circular Motion — Angular Quantities",
                "slug": "ucm-angular"
              }
            ]
          },
          {
            "name": "Laws of Motion",
            "slug": "laws-of-motion",
            "topics": [
              {
                "name": "Aristotle's Fallacy and Galileo's Law of Inertia",
                "slug": "aristotle-galileo"
              },
              {
                "name": "Newton's First Law — Inertia and Its Types",
                "slug": "first-law-inertia"
              },
              {
                "name": "Newton's Second Law — F = ma",
                "slug": "second-law-fma"
              },
              {
                "name": "Newton's Third Law and Action-Reaction Pairs",
                "slug": "third-law"
              },
              {
                "name": "Impulse and Impulsive Force",
                "slug": "impulse"
              },
              {
                "name": "Law of Conservation of Linear Momentum",
                "slug": "conservation-momentum"
              },
              {
                "name": "Free Body Diagram (FBD)",
                "slug": "fbd"
              },
              {
                "name": "Normal Force, Tension and Spring Force",
                "slug": "normal-tension-spring"
              },
              {
                "name": "Friction — Static, Kinetic and Rolling",
                "slug": "friction-types"
              },
              {
                "name": "Coefficient of Friction, Angle of Friction and Repose",
                "slug": "friction-coefficients"
              }
            ]
          },
          {
            "name": "Work, Energy and Power",
            "slug": "work-energy-power",
            "topics": [
              {
                "name": "Work Done by Constant and Variable Force",
                "slug": "work-constant-variable"
              },
              {
                "name": "Work-Energy Theorem",
                "slug": "work-energy-theorem"
              },
              {
                "name": "Kinetic Energy",
                "slug": "kinetic-energy"
              },
              {
                "name": "Gravitational Potential Energy",
                "slug": "gravitational-pe"
              },
              {
                "name": "Elastic Potential Energy in Spring (½kx²)",
                "slug": "spring-pe"
              },
              {
                "name": "Conservative and Non-Conservative Forces",
                "slug": "conservative-forces"
              },
              {
                "name": "Conservation of Mechanical Energy",
                "slug": "conservation-mech-energy"
              },
              {
                "name": "Power — Average and Instantaneous",
                "slug": "power-avg-inst"
              },
              {
                "name": "Collisions — Elastic and Inelastic in 1D",
                "slug": "elastic-inelastic-1d"
              },
              {
                "name": "Oblique Collisions (2D)",
                "slug": "oblique-collisions"
              }
            ]
          },
          {
            "name": "System of Particles and Rotational Motion",
            "slug": "rotational-motion",
            "topics": [
              {
                "name": "Centre of Mass — Discrete and Continuous Systems",
                "slug": "centre-of-mass"
              },
              {
                "name": "COM of Standard Bodies (Rod, Disc, Sphere, Cone, Triangle)",
                "slug": "com-standard-bodies"
              },
              {
                "name": "Motion of Centre of Mass",
                "slug": "com-motion"
              },
              {
                "name": "Angular Displacement, Velocity and Acceleration",
                "slug": "angular-kinematics"
              },
              {
                "name": "Equations of Rotational Motion",
                "slug": "rotational-equations"
              },
              {
                "name": "Torque — Definition and τ = Iα",
                "slug": "torque"
              },
              {
                "name": "Moment of Inertia — Definition and Physical Significance",
                "slug": "moi-definition"
              },
              {
                "name": "MI of Standard Bodies — Rod, Ring, Disc, Sphere, Cylinder",
                "slug": "moi-standard-bodies"
              },
              {
                "name": "Theorem of Parallel Axes",
                "slug": "parallel-axis-theorem"
              },
              {
                "name": "Theorem of Perpendicular Axes",
                "slug": "perpendicular-axis-theorem"
              }
            ]
          },
          {
            "name": "Gravitation",
            "slug": "gravitation",
            "topics": [
              {
                "name": "Kepler's Laws of Planetary Motion",
                "slug": "keplers-laws"
              },
              {
                "name": "Newton's Universal Law of Gravitation",
                "slug": "newtons-gravitation"
              },
              {
                "name": "Acceleration Due to Gravity (g) on Earth's Surface",
                "slug": "g-surface"
              },
              {
                "name": "Variation of g with Altitude",
                "slug": "g-altitude"
              },
              {
                "name": "Variation of g with Depth",
                "slug": "g-depth"
              },
              {
                "name": "Variation of g with Latitude and Rotation of Earth",
                "slug": "g-latitude-rotation"
              },
              {
                "name": "Gravitational Field Intensity",
                "slug": "gravitational-field"
              },
              {
                "name": "Gravitational Potential",
                "slug": "gravitational-potential"
              },
              {
                "name": "Gravitational Potential Energy",
                "slug": "gravitational-pe"
              },
              {
                "name": "Escape Velocity",
                "slug": "escape-velocity"
              }
            ]
          },
          {
            "name": "Mechanical Properties of Solids",
            "slug": "mechanical-properties-solids",
            "topics": [
              {
                "name": "Elasticity and Plasticity",
                "slug": "elasticity-plasticity"
              },
              {
                "name": "Types of Stress — Tensile, Compressive, Shear, Bulk",
                "slug": "stress-types"
              },
              {
                "name": "Types of Strain — Longitudinal, Shear, Volumetric",
                "slug": "strain-types"
              },
              {
                "name": "Stress-Strain Curve — Elastic Limit, Yield Point, UTS",
                "slug": "stress-strain-curve"
              },
              {
                "name": "Hooke's Law",
                "slug": "hookes-law"
              },
              {
                "name": "Young's Modulus — Definition and Numericals",
                "slug": "youngs-modulus"
              },
              {
                "name": "Bulk Modulus — Definition and Compressibility",
                "slug": "bulk-modulus"
              },
              {
                "name": "Shear Modulus (Modulus of Rigidity)",
                "slug": "shear-modulus"
              },
              {
                "name": "Poisson's Ratio",
                "slug": "poissons-ratio"
              },
              {
                "name": "Relations Among Elastic Constants",
                "slug": "elastic-constants-relation"
              }
            ]
          },
          {
            "name": "Mechanical Properties of Fluids",
            "slug": "mechanical-properties-fluids",
            "topics": [
              {
                "name": "Pressure — Thrust and Pressure in Fluid",
                "slug": "pressure-fluid"
              },
              {
                "name": "Pascal's Law and Its Applications",
                "slug": "pascals-law"
              },
              {
                "name": "Atmospheric Pressure — Gauge and Absolute",
                "slug": "atmospheric-gauge"
              },
              {
                "name": "Archimedes' Principle",
                "slug": "archimedes-principle"
              },
              {
                "name": "Buoyancy, Apparent Weight and Law of Floatation",
                "slug": "buoyancy-floatation"
              },
              {
                "name": "Equation of Continuity (A₁v₁ = A₂v₂)",
                "slug": "continuity-equation"
              },
              {
                "name": "Bernoulli's Theorem — Derivation and Applications",
                "slug": "bernoullis-theorem"
              },
              {
                "name": "Venturimeter and Pitot Tube",
                "slug": "venturimeter-pitot"
              },
              {
                "name": "Torricelli's Theorem and Speed of Efflux",
                "slug": "torricelli-efflux"
              },
              {
                "name": "Dynamic Lift — Magnus Effect, Aerofoil",
                "slug": "dynamic-lift"
              }
            ]
          },
          {
            "name": "Thermal Properties of Matter",
            "slug": "thermal-properties",
            "topics": [
              {
                "name": "Temperature Scales — Celsius, Kelvin, Fahrenheit",
                "slug": "temperature-scales"
              },
              {
                "name": "Thermal Expansion of Solids — α (Linear), β (Superficial), γ (Volumetric)",
                "slug": "expansion-solids"
              },
              {
                "name": "Thermal Expansion of Liquids — Absolute and Apparent",
                "slug": "expansion-liquids"
              },
              {
                "name": "Anomalous Expansion of Water",
                "slug": "anomalous-expansion"
              },
              {
                "name": "Thermal Expansion of Gases",
                "slug": "expansion-gases"
              },
              {
                "name": "Specific Heat Capacity and Heat Capacity",
                "slug": "specific-heat"
              },
              {
                "name": "Calorimetry — Principle and Numericals",
                "slug": "calorimetry"
              },
              {
                "name": "Latent Heat of Fusion and Vaporisation",
                "slug": "latent-heat"
              },
              {
                "name": "Heating and Cooling Curves",
                "slug": "heating-cooling-curve"
              },
              {
                "name": "Change of State — Melting, Boiling, Sublimation",
                "slug": "change-of-state"
              }
            ]
          },
          {
            "name": "Thermodynamics",
            "slug": "thermodynamics",
            "topics": [
              {
                "name": "Thermodynamic System — Types and State Variables",
                "slug": "system-state-variables"
              },
              {
                "name": "Zeroth Law and Thermal Equilibrium",
                "slug": "zeroth-law"
              },
              {
                "name": "Internal Energy",
                "slug": "internal-energy"
              },
              {
                "name": "First Law — ΔU = Q - W (Both Sign Conventions)",
                "slug": "first-law"
              },
              {
                "name": "Work Done by Gas — PV Diagram Analysis",
                "slug": "work-pv-diagram"
              },
              {
                "name": "Isothermal Process",
                "slug": "isothermal"
              },
              {
                "name": "Adiabatic Process — γ, Relations and Equations",
                "slug": "adiabatic"
              },
              {
                "name": "Isochoric Process",
                "slug": "isochoric"
              },
              {
                "name": "Isobaric Process",
                "slug": "isobaric"
              },
              {
                "name": "Polytropic Process",
                "slug": "polytropic"
              }
            ]
          },
          {
            "name": "Kinetic Theory",
            "slug": "kinetic-theory",
            "topics": [
              {
                "name": "Molecular Nature of Matter",
                "slug": "molecular-nature"
              },
              {
                "name": "Assumptions of Kinetic Theory of Gases",
                "slug": "kinetic-assumptions"
              },
              {
                "name": "Pressure Exerted by an Ideal Gas",
                "slug": "pressure-ideal-gas"
              },
              {
                "name": "Kinetic Interpretation of Temperature",
                "slug": "temperature-kinetic"
              },
              {
                "name": "RMS Speed (vrms)",
                "slug": "rms-speed"
              },
              {
                "name": "Mean Speed (v̄)",
                "slug": "mean-speed"
              },
              {
                "name": "Most Probable Speed (vp)",
                "slug": "most-probable-speed"
              },
              {
                "name": "Ratio of Speeds — vp : v̄ : vrms",
                "slug": "speed-ratios"
              },
              {
                "name": "Maxwell's Distribution of Speeds",
                "slug": "maxwell-distribution"
              },
              {
                "name": "Degrees of Freedom",
                "slug": "degrees-of-freedom"
              }
            ]
          },
          {
            "name": "Oscillations",
            "slug": "oscillations",
            "topics": [
              {
                "name": "Periodic and Oscillatory Motion",
                "slug": "periodic-oscillatory"
              },
              {
                "name": "SHM — Definition and Examples",
                "slug": "shm-definition"
              },
              {
                "name": "SHM — Differential Equation (d²x/dt² = -ω²x)",
                "slug": "shm-diff-equation"
              },
              {
                "name": "Displacement, Velocity and Acceleration in SHM",
                "slug": "shm-dva"
              },
              {
                "name": "Phase — Initial Phase and Phase Difference",
                "slug": "shm-phase"
              },
              {
                "name": "KE and PE in SHM",
                "slug": "ke-pe-shm"
              },
              {
                "name": "Total Energy in SHM (E = ½mω²A²)",
                "slug": "total-energy-shm"
              },
              {
                "name": "Spring-Mass System — T = 2π√(m/k)",
                "slug": "spring-mass-system"
              },
              {
                "name": "Springs in Series and Parallel",
                "slug": "springs-combinations"
              },
              {
                "name": "Simple Pendulum — T = 2π√(L/g)",
                "slug": "simple-pendulum"
              }
            ]
          },
          {
            "name": "Waves",
            "slug": "waves",
            "topics": [
              {
                "name": "Transverse and Longitudinal Waves",
                "slug": "transverse-longitudinal"
              },
              {
                "name": "Wave Parameters — Amplitude, Wavelength, Frequency, Period",
                "slug": "wave-parameters"
              },
              {
                "name": "Wave Equation — y = A sin(kx - ωt)",
                "slug": "wave-equation"
              },
              {
                "name": "Speed of Transverse Wave in String (v = √T/μ)",
                "slug": "speed-string"
              },
              {
                "name": "Speed of Longitudinal Wave in Medium",
                "slug": "speed-longitudinal"
              },
              {
                "name": "Speed of Sound — Newton and Laplace Formula",
                "slug": "speed-sound"
              },
              {
                "name": "Intensity of Wave (I ∝ A²)",
                "slug": "wave-intensity"
              },
              {
                "name": "Principle of Superposition of Waves",
                "slug": "superposition"
              },
              {
                "name": "Reflection at Fixed End (Phase Change) and Free End",
                "slug": "wave-reflection"
              },
              {
                "name": "Standing Waves — Condition and Formation",
                "slug": "standing-waves"
              }
            ]
          },
          {
            "name": "Electric Charges and Fields",
            "slug": "electric-charges-fields",
            "topics": [
              {
                "name": "Electric Charge — Properties and Conservation",
                "slug": "charge-properties"
              },
              {
                "name": "Conductors, Insulators and Semiconductors",
                "slug": "conductors-insulators"
              },
              {
                "name": "Methods of Charging — Friction, Conduction, Induction",
                "slug": "charging-methods"
              },
              {
                "name": "Coulomb's Law in Free Space and Medium",
                "slug": "coulombs-law"
              },
              {
                "name": "Superposition Principle for Multiple Charges",
                "slug": "superposition-principle"
              },
              {
                "name": "Electric Field — Definition and Formula",
                "slug": "electric-field-def"
              },
              {
                "name": "Electric Field due to Point Charge",
                "slug": "field-point-charge"
              },
              {
                "name": "Electric Field Lines — Properties",
                "slug": "field-lines"
              },
              {
                "name": "Electric Dipole — Definition and Dipole Moment",
                "slug": "electric-dipole"
              },
              {
                "name": "Field on Axial Line of Dipole",
                "slug": "field-axial-dipole"
              }
            ]
          },
          {
            "name": "Electrostatic Potential and Capacitance",
            "slug": "electrostatic-potential-capacitance",
            "topics": [
              {
                "name": "Electric Potential — Definition, Unit and Formula",
                "slug": "potential-definition"
              },
              {
                "name": "Relation Between E and V (E = -dV/dr)",
                "slug": "e-v-relation"
              },
              {
                "name": "Potential due to Point Charge",
                "slug": "potential-point"
              },
              {
                "name": "Potential due to Electric Dipole — Axial and Equatorial",
                "slug": "potential-dipole"
              },
              {
                "name": "Potential due to System of Charges",
                "slug": "potential-system"
              },
              {
                "name": "Equipotential Surfaces — Properties and Examples",
                "slug": "equipotential-surfaces"
              },
              {
                "name": "Potential Energy of System of Charges",
                "slug": "pe-system-charges"
              },
              {
                "name": "Potential Energy of Dipole in External Field",
                "slug": "pe-dipole-field"
              },
              {
                "name": "Conductors in Electrostatic Equilibrium",
                "slug": "conductors-equilibrium"
              },
              {
                "name": "Dielectrics — Polar and Non-Polar",
                "slug": "dielectrics-types"
              }
            ]
          },
          {
            "name": "Current Electricity",
            "slug": "current-electricity",
            "topics": [
              {
                "name": "Electric Current and Conventional Current",
                "slug": "electric-current"
              },
              {
                "name": "Drift Velocity and Mobility",
                "slug": "drift-velocity-mobility"
              },
              {
                "name": "Relation Between Current and Drift Velocity",
                "slug": "current-drift-relation"
              },
              {
                "name": "Ohm's Law — Statement and Limitations",
                "slug": "ohms-law"
              },
              {
                "name": "Resistance — Definition, Resistivity and Conductivity",
                "slug": "resistance-resistivity"
              },
              {
                "name": "Variation of Resistance with Temperature — α",
                "slug": "resistance-temperature"
              },
              {
                "name": "Colour Code for Resistors",
                "slug": "colour-code"
              },
              {
                "name": "Resistors in Series",
                "slug": "resistors-series"
              },
              {
                "name": "Resistors in Parallel",
                "slug": "resistors-parallel"
              },
              {
                "name": "Kirchhoff's Current Law (KCL / Junction Rule)",
                "slug": "kcl"
              }
            ]
          },
          {
            "name": "Moving Charges and Magnetism",
            "slug": "moving-charges-magnetism",
            "topics": [
              {
                "name": "Magnetic Field — Concept, Biot-Savart Law",
                "slug": "biot-savart-law"
              },
              {
                "name": "Magnetic Field due to Straight Finite and Infinite Wire",
                "slug": "field-wire"
              },
              {
                "name": "Magnetic Field on Axis of Circular Current Loop",
                "slug": "field-circular-loop"
              },
              {
                "name": "Ampere's Circuital Law",
                "slug": "amperes-law"
              },
              {
                "name": "Magnetic Field Inside Solenoid",
                "slug": "field-solenoid"
              },
              {
                "name": "Magnetic Field of Toroid",
                "slug": "field-toroid"
              },
              {
                "name": "Force on Moving Charge in Magnetic Field (F = qv × B)",
                "slug": "force-charge"
              },
              {
                "name": "Motion of Charged Particle — Circle, Helix",
                "slug": "particle-motion"
              },
              {
                "name": "Cyclotron — Principle, Working and Limitations",
                "slug": "cyclotron"
              },
              {
                "name": "Force on Current-Carrying Conductor in B",
                "slug": "force-conductor"
              }
            ]
          },
          {
            "name": "Magnetism and Matter",
            "slug": "magnetism-matter",
            "topics": [
              {
                "name": "Bar Magnet — Properties and Pole Strength",
                "slug": "bar-magnet"
              },
              {
                "name": "Axial Field of Bar Magnet",
                "slug": "magnet-axial-field"
              },
              {
                "name": "Equatorial Field of Bar Magnet",
                "slug": "magnet-equatorial-field"
              },
              {
                "name": "Torque on Magnetic Dipole in Uniform B",
                "slug": "magnet-torque"
              },
              {
                "name": "Potential Energy of Dipole in B",
                "slug": "dipole-pe"
              },
              {
                "name": "Gauss's Law for Magnetism",
                "slug": "gauss-magnetism"
              },
              {
                "name": "Bar Magnet as Equivalent Solenoid",
                "slug": "magnet-solenoid-equiv"
              },
              {
                "name": "Earth's Magnetic Field — Components (BH, BV, δ, I)",
                "slug": "earth-field-components"
              },
              {
                "name": "Magnetic Properties — I, H, χ, μ",
                "slug": "magnetic-properties"
              },
              {
                "name": "Diamagnetic Materials",
                "slug": "diamagnetic"
              }
            ]
          },
          {
            "name": "Electromagnetic Induction",
            "slug": "em-induction",
            "topics": [
              {
                "name": "Magnetic Flux (Φ = B·A cosθ)",
                "slug": "magnetic-flux"
              },
              {
                "name": "Faraday's First and Second Laws of Induction",
                "slug": "faradays-laws"
              },
              {
                "name": "Lenz's Law and Conservation of Energy",
                "slug": "lenzs-law"
              },
              {
                "name": "Motional EMF (ε = Bvl)",
                "slug": "motional-emf"
              },
              {
                "name": "EMF in Rotating Coil",
                "slug": "rotating-coil-emf"
              },
              {
                "name": "Eddy Currents — Causes, Effects and Uses",
                "slug": "eddy-currents"
              },
              {
                "name": "Self-Inductance (L) and Self-Induced EMF",
                "slug": "self-inductance"
              },
              {
                "name": "Self-Inductance of Solenoid (L = μ₀n²V)",
                "slug": "self-inductance-solenoid"
              },
              {
                "name": "Mutual Inductance (M) and Mutually Induced EMF",
                "slug": "mutual-inductance"
              },
              {
                "name": "Coefficient of Coupling",
                "slug": "coupling-coefficient"
              }
            ]
          },
          {
            "name": "Alternating Current",
            "slug": "alternating-current",
            "topics": [
              {
                "name": "AC Voltage — Amplitude, Angular Frequency, Phase",
                "slug": "ac-basics"
              },
              {
                "name": "Peak, RMS and Average Value",
                "slug": "ac-peak-rms-avg"
              },
              {
                "name": "AC through Pure Resistor",
                "slug": "ac-resistor"
              },
              {
                "name": "AC through Pure Inductor — Inductive Reactance (XL)",
                "slug": "ac-inductor"
              },
              {
                "name": "AC through Pure Capacitor — Capacitive Reactance (XC)",
                "slug": "ac-capacitor"
              },
              {
                "name": "Phasor Diagram — LR, RC and LC Circuits",
                "slug": "phasor-diagrams"
              },
              {
                "name": "Series RLC Circuit — Impedance Z",
                "slug": "series-rlc-impedance"
              },
              {
                "name": "Resonance in Series RLC — f₀ = 1/(2π√LC)",
                "slug": "series-resonance"
              },
              {
                "name": "Bandwidth and Quality Factor (Q)",
                "slug": "bandwidth-q-factor"
              },
              {
                "name": "Power in AC — Apparent, Real and Reactive Power",
                "slug": "power-ac-types"
              }
            ]
          },
          {
            "name": "Electromagnetic Waves",
            "slug": "em-waves",
            "topics": [
              {
                "name": "Need for Displacement Current — Limitation of Ampere's Law",
                "slug": "displacement-current-need"
              },
              {
                "name": "Displacement Current (Id = ε₀ dΦE/dt)",
                "slug": "displacement-current"
              },
              {
                "name": "Maxwell's Equations (Qualitative)",
                "slug": "maxwells-equations"
              },
              {
                "name": "EM Wave — Transverse Nature and Properties",
                "slug": "em-wave-properties"
              },
              {
                "name": "Speed of EM Waves (c = 1/√μ₀ε₀)",
                "slug": "em-wave-speed"
              },
              {
                "name": "Energy, Intensity and Momentum of EM Waves",
                "slug": "em-energy-momentum"
              },
              {
                "name": "EM Spectrum — Gamma, X-ray, UV, Visible, IR, Microwave, Radio",
                "slug": "em-spectrum-regions"
              },
              {
                "name": "Wavelength Range and Applications of Each Region",
                "slug": "em-spectrum-applications"
              }
            ]
          },
          {
            "name": "Ray Optics and Optical Instruments",
            "slug": "ray-optics",
            "topics": [
              {
                "name": "Reflection at Plane Mirror — Image Properties",
                "slug": "plane-mirror-image"
              },
              {
                "name": "Reflection at Spherical Mirror — Sign Convention",
                "slug": "spherical-mirror-convention"
              },
              {
                "name": "Mirror Formula (1/v + 1/u = 1/f)",
                "slug": "mirror-formula"
              },
              {
                "name": "Magnification by Spherical Mirror",
                "slug": "mirror-magnification"
              },
              {
                "name": "Refraction — Snell's Law",
                "slug": "snells-law"
              },
              {
                "name": "Refractive Index — Absolute and Relative",
                "slug": "refractive-index"
              },
              {
                "name": "Total Internal Reflection and Critical Angle",
                "slug": "tir-critical-angle"
              },
              {
                "name": "Applications of TIR — Optical Fibre, Diamond, Mirage",
                "slug": "tir-applications"
              },
              {
                "name": "Refraction at Spherical Surfaces",
                "slug": "refraction-spherical"
              },
              {
                "name": "Thin Lens Formula (1/v - 1/u = 1/f)",
                "slug": "thin-lens-formula"
              }
            ]
          },
          {
            "name": "Wave Optics",
            "slug": "wave-optics",
            "topics": [
              {
                "name": "Huygens' Principle",
                "slug": "huygens-principle"
              },
              {
                "name": "Coherent Sources",
                "slug": "coherent-sources"
              },
              {
                "name": "Young's Double Slit Experiment (YDSE) — Setup",
                "slug": "ydse-setup"
              },
              {
                "name": "Fringe Width β = λD/d",
                "slug": "fringe-width"
              },
              {
                "name": "Conditions for Bright and Dark Fringes",
                "slug": "bright-dark-fringes"
              },
              {
                "name": "Intensity Distribution in YDSE",
                "slug": "ydse-intensity"
              },
              {
                "name": "Effect of Thin Film in YDSE Path",
                "slug": "ydse-thin-film"
              },
              {
                "name": "Diffraction at Single Slit",
                "slug": "single-slit-diffraction"
              },
              {
                "name": "Width of Central Maximum (2λD/d)",
                "slug": "central-max-width"
              },
              {
                "name": "Resolving Power of Microscope and Telescope",
                "slug": "resolving-power"
              }
            ]
          },
          {
            "name": "Dual Nature of Radiation and Matter",
            "slug": "dual-nature",
            "topics": [
              {
                "name": "Photoelectric Effect — Discovery and Observations",
                "slug": "pe-discovery"
              },
              {
                "name": "Effect of Intensity, Frequency and Potential",
                "slug": "pe-effects"
              },
              {
                "name": "Failure of Classical Wave Theory",
                "slug": "wave-theory-failure"
              },
              {
                "name": "Einstein's Photoelectric Equation (Kmax = hν - φ)",
                "slug": "einsteins-equation"
              },
              {
                "name": "Work Function and Threshold Frequency",
                "slug": "work-function"
              },
              {
                "name": "Stopping Potential and Its Significance",
                "slug": "stopping-potential"
              },
              {
                "name": "de Broglie's Hypothesis (λ = h/mv)",
                "slug": "de-broglie-hypothesis"
              },
              {
                "name": "de Broglie Wavelength of Electron (λ = h/√2mK)",
                "slug": "de-broglie-electron"
              },
              {
                "name": "Davisson-Germer Experiment",
                "slug": "davisson-germer"
              },
              {
                "name": "Heisenberg's Uncertainty Principle (Δx·Δp ≥ h/4π)",
                "slug": "uncertainty-principle"
              }
            ]
          },
          {
            "name": "Atoms",
            "slug": "atoms",
            "topics": [
              {
                "name": "Thomson's Model and Its Failure",
                "slug": "thomson-model"
              },
              {
                "name": "Rutherford's α-Scattering Experiment",
                "slug": "alpha-scattering"
              },
              {
                "name": "Rutherford's Nuclear Model and Limitations",
                "slug": "rutherford-model"
              },
              {
                "name": "Bohr's Postulates",
                "slug": "bohr-postulates"
              },
              {
                "name": "Bohr's Radii (rn = n²a₀)",
                "slug": "bohr-radii"
              },
              {
                "name": "Bohr's Velocities (vn = v₀/n)",
                "slug": "bohr-velocities"
              },
              {
                "name": "Bohr's Energy Levels (En = -13.6/n² eV)",
                "slug": "bohr-energy-levels"
              },
              {
                "name": "Emission and Absorption Spectra",
                "slug": "emission-absorption"
              },
              {
                "name": "Hydrogen Spectral Series — Lyman, Balmer, Paschen, Brackett, Pfund",
                "slug": "spectral-series"
              },
              {
                "name": "Excitation Energy and Ionisation Energy",
                "slug": "excitation-ionisation"
              }
            ]
          },
          {
            "name": "Nuclei",
            "slug": "nuclei",
            "topics": [
              {
                "name": "Composition of Nucleus — Protons and Neutrons",
                "slug": "nucleus-composition"
              },
              {
                "name": "Atomic Mass Unit (amu) and Energy Equivalent",
                "slug": "amu-energy"
              },
              {
                "name": "Nuclear Size — R = R₀A^(1/3)",
                "slug": "nuclear-size"
              },
              {
                "name": "Nuclear Density",
                "slug": "nuclear-density"
              },
              {
                "name": "Mass Defect (Δm)",
                "slug": "mass-defect"
              },
              {
                "name": "Binding Energy (ΔmC²)",
                "slug": "binding-energy"
              },
              {
                "name": "Binding Energy per Nucleon — Graph and Significance",
                "slug": "be-nucleon-graph"
              },
              {
                "name": "Radioactivity — Discovery and Properties",
                "slug": "radioactivity"
              },
              {
                "name": "Alpha Decay — Equation and Q-Value",
                "slug": "alpha-decay"
              },
              {
                "name": "Beta Decay (β⁻ and β⁺) — Neutrino",
                "slug": "beta-decay"
              }
            ]
          },
          {
            "name": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
            "slug": "semiconductor-electronics",
            "topics": [
              {
                "name": "Energy Bands — Valence, Conduction, Band Gap",
                "slug": "energy-bands"
              },
              {
                "name": "Classification — Metals, Semiconductors, Insulators",
                "slug": "band-classification"
              },
              {
                "name": "Intrinsic Semiconductor — Electron-Hole Pair",
                "slug": "intrinsic-semiconductor"
              },
              {
                "name": "Extrinsic — n-Type Semiconductor (Donor Impurity)",
                "slug": "n-type"
              },
              {
                "name": "Extrinsic — p-Type Semiconductor (Acceptor Impurity)",
                "slug": "p-type"
              },
              {
                "name": "p-n Junction Formation and Depletion Layer",
                "slug": "pn-junction"
              },
              {
                "name": "Potential Barrier",
                "slug": "potential-barrier"
              },
              {
                "name": "Forward Bias and Reverse Bias",
                "slug": "forward-reverse-bias"
              },
              {
                "name": "I-V Characteristics of p-n Junction Diode",
                "slug": "diode-iv-char"
              },
              {
                "name": "Half-Wave Rectifier",
                "slug": "half-wave-rectifier"
              }
            ]
          }
        ]
      },
      {
        "name": "Chemistry",
        "slug": "chemistry",
        "chapters": [
          {
            "name": "Some Basic Concepts of Chemistry",
            "slug": "basic-concepts",
            "topics": [
              {
                "name": "Importance and Nature of Chemistry",
                "slug": "importance-chemistry"
              },
              {
                "name": "Laws of Chemical Combination",
                "slug": "laws-combination"
              },
              {
                "name": "Dalton's Atomic Theory",
                "slug": "daltons-theory"
              },
              {
                "name": "Atomic Mass and Molecular Mass",
                "slug": "atomic-molecular-mass"
              },
              {
                "name": "Mole Concept and Avogadro's Number",
                "slug": "mole-avogadro"
              },
              {
                "name": "Molar Mass",
                "slug": "molar-mass"
              },
              {
                "name": "Percentage Composition",
                "slug": "percentage-composition"
              },
              {
                "name": "Empirical Formula from Percentage Composition",
                "slug": "empirical-from-percent"
              },
              {
                "name": "Molecular Formula from Empirical Formula",
                "slug": "molecular-from-empirical"
              },
              {
                "name": "Stoichiometry and Mole-Mole Relationship",
                "slug": "stoichiometry"
              }
            ]
          },
          {
            "name": "Structure of Atom",
            "slug": "structure-of-atom",
            "topics": [
              {
                "name": "Discovery of Electron — Cathode Ray Experiment",
                "slug": "discovery-electron"
              },
              {
                "name": "Charge-to-Mass Ratio of Electron",
                "slug": "e-m-ratio"
              },
              {
                "name": "Millikan's Oil Drop Experiment — Charge of Electron",
                "slug": "millikan-experiment"
              },
              {
                "name": "Discovery of Proton and Neutron",
                "slug": "proton-neutron"
              },
              {
                "name": "Thomson's Plum Pudding Model",
                "slug": "thomson-model-chem"
              },
              {
                "name": "Rutherford's α-Scattering and Nuclear Model",
                "slug": "rutherford-chem"
              },
              {
                "name": "Atomic Number, Mass Number, Isotopes and Isobars",
                "slug": "atomic-number-isotopes"
              },
              {
                "name": "Electromagnetic Radiation — Wave Nature",
                "slug": "em-radiation-wave"
              },
              {
                "name": "Planck's Quantum Theory and Energy of Photon",
                "slug": "planck-theory"
              },
              {
                "name": "Photoelectric Effect",
                "slug": "photoelectric-chem"
              }
            ]
          },
          {
            "name": "Classification of Elements and Periodicity in Properties",
            "slug": "periodic-table",
            "topics": [
              {
                "name": "History — Döbereiner's Triads, Newlands' Law of Octaves",
                "slug": "history-triads-octaves"
              },
              {
                "name": "Mendeleev's Periodic Table and Its Limitations",
                "slug": "mendeleev-table"
              },
              {
                "name": "Modern Periodic Law and Long Form of Table",
                "slug": "modern-table"
              },
              {
                "name": "s, p, d, f Block Classification",
                "slug": "block-classification"
              },
              {
                "name": "Atomic Radius — Covalent, Metallic, Van der Waals",
                "slug": "atomic-radius-types"
              },
              {
                "name": "Trend of Atomic Radius in Period (Decreases)",
                "slug": "atomic-radius-period"
              },
              {
                "name": "Trend of Atomic Radius in Group (Increases)",
                "slug": "atomic-radius-group"
              },
              {
                "name": "Ionic Radius and Isoelectronic Species",
                "slug": "ionic-radius"
              },
              {
                "name": "Ionisation Enthalpy — Definition",
                "slug": "ie-def"
              },
              {
                "name": "Trends of IE in Period and Group",
                "slug": "ie-trends"
              }
            ]
          },
          {
            "name": "Chemical Bonding and Molecular Structure",
            "slug": "chemical-bonding",
            "topics": [
              {
                "name": "Kossel-Lewis Approach — Octet Rule",
                "slug": "octet-rule"
              },
              {
                "name": "Lewis Dot Structures",
                "slug": "lewis-dot"
              },
              {
                "name": "Exceptions to Octet Rule",
                "slug": "octet-exceptions"
              },
              {
                "name": "Formal Charge Calculation",
                "slug": "formal-charge"
              },
              {
                "name": "Ionic Bond — Formation and Conditions",
                "slug": "ionic-bond"
              },
              {
                "name": "Lattice Enthalpy and Born-Haber Cycle",
                "slug": "lattice-born-haber"
              },
              {
                "name": "Covalent Bond — σ and π Bonds",
                "slug": "sigma-pi-bonds"
              },
              {
                "name": "Bond Parameters — Length, Energy, Angle, Order",
                "slug": "bond-parameters"
              },
              {
                "name": "Polar Covalent Bond and Dipole Moment",
                "slug": "polar-dipole"
              },
              {
                "name": "Resonance Structures and Resonance Energy",
                "slug": "resonance"
              }
            ]
          },
          {
            "name": "States of Matter",
            "slug": "states-of-matter",
            "topics": [
              {
                "name": "Intermolecular Forces and Effect on State",
                "slug": "intermolecular-forces"
              },
              {
                "name": "Boyle's Law",
                "slug": "boyles-law"
              },
              {
                "name": "Charles's Law",
                "slug": "charless-law"
              },
              {
                "name": "Gay-Lussac's Law",
                "slug": "gay-lussac-law"
              },
              {
                "name": "Avogadro's Law and Molar Volume at STP",
                "slug": "avogadros-law"
              },
              {
                "name": "Ideal Gas Equation (PV = nRT)",
                "slug": "ideal-gas-eq"
              },
              {
                "name": "Dalton's Law of Partial Pressure",
                "slug": "daltons-partial-pressure"
              },
              {
                "name": "Kinetic Molecular Theory of Gases",
                "slug": "kmt"
              },
              {
                "name": "Molecular Speed Distribution — Maxwell",
                "slug": "maxwell-speed"
              },
              {
                "name": "RMS, Mean and Most Probable Speed",
                "slug": "speed-types"
              }
            ]
          },
          {
            "name": "Thermodynamics",
            "slug": "thermodynamics-chem",
            "topics": [
              {
                "name": "System, Surroundings — Open, Closed, Isolated",
                "slug": "system-types"
              },
              {
                "name": "Thermodynamic State Functions",
                "slug": "state-functions"
              },
              {
                "name": "Extensive and Intensive Properties",
                "slug": "extensive-intensive"
              },
              {
                "name": "Isothermal, Adiabatic, Isochoric, Isobaric Processes",
                "slug": "thermo-processes"
              },
              {
                "name": "Heat (q) and Work (w) — Sign Conventions",
                "slug": "heat-work-signs"
              },
              {
                "name": "First Law — ΔU = q + w",
                "slug": "first-law-chem"
              },
              {
                "name": "Enthalpy (H = U + pV)",
                "slug": "enthalpy"
              },
              {
                "name": "ΔH = ΔU + ΔngRT",
                "slug": "dh-du-relation"
              },
              {
                "name": "Standard Enthalpy of Formation (ΔfH°)",
                "slug": "standard-formation"
              },
              {
                "name": "Hess's Law of Constant Heat Summation",
                "slug": "hesss-law"
              }
            ]
          },
          {
            "name": "Equilibrium",
            "slug": "equilibrium",
            "topics": [
              {
                "name": "Physical and Chemical Equilibrium",
                "slug": "physical-chemical-eq"
              },
              {
                "name": "Law of Mass Action",
                "slug": "law-mass-action"
              },
              {
                "name": "Kc — Expression and Units",
                "slug": "kc-expression"
              },
              {
                "name": "Kp — Expression and Units",
                "slug": "kp-expression"
              },
              {
                "name": "Relation Between Kc and Kp (Kp = Kc(RT)^Δn)",
                "slug": "kc-kp-relation"
              },
              {
                "name": "Homogeneous and Heterogeneous Equilibrium",
                "slug": "homo-heterogeneous-eq"
              },
              {
                "name": "Characteristics of Equilibrium Constant",
                "slug": "k-characteristics"
              },
              {
                "name": "Reaction Quotient (Qc) and Direction of Reaction",
                "slug": "reaction-quotient"
              },
              {
                "name": "Le Chatelier's Principle",
                "slug": "le-chateliers"
              },
              {
                "name": "Effect of Concentration, Pressure, Temperature on K",
                "slug": "equilibrium-effects"
              }
            ]
          },
          {
            "name": "Redox Reactions",
            "slug": "redox-reactions",
            "topics": [
              {
                "name": "Oxidation and Reduction — Electronic Concept",
                "slug": "oxidation-reduction-def"
              },
              {
                "name": "Oxidation Number — Rules and Calculation",
                "slug": "oxidation-number-rules"
              },
              {
                "name": "Oxidising and Reducing Agents",
                "slug": "oxidising-reducing"
              },
              {
                "name": "Balancing by Oxidation Number Method",
                "slug": "ox-number-balancing"
              },
              {
                "name": "Half-Reaction Method — Acidic Medium",
                "slug": "half-reaction-acidic"
              },
              {
                "name": "Half-Reaction Method — Basic Medium",
                "slug": "half-reaction-basic"
              },
              {
                "name": "Types — Combination, Decomposition, Displacement, Disproportionation",
                "slug": "redox-types"
              },
              {
                "name": "Electrochemical Series and Standard Reduction Potential",
                "slug": "electrochemical-series"
              }
            ]
          },
          {
            "name": "Hydrogen",
            "slug": "hydrogen",
            "topics": [
              {
                "name": "Position of Hydrogen — Unique Character",
                "slug": "hydrogen-unique"
              },
              {
                "name": "Isotopes — Protium, Deuterium (D₂O), Tritium",
                "slug": "hydrogen-isotopes"
              },
              {
                "name": "Preparation of Hydrogen — Laboratory Methods",
                "slug": "hydrogen-lab-prep"
              },
              {
                "name": "Industrial Preparation — Steam Reforming",
                "slug": "hydrogen-industrial"
              },
              {
                "name": "Properties of Molecular Hydrogen",
                "slug": "hydrogen-properties"
              },
              {
                "name": "Hydrides — Ionic, Covalent, Metallic",
                "slug": "hydrides-types"
              },
              {
                "name": "Water — Structure and Unique Properties",
                "slug": "water-structure"
              },
              {
                "name": "Anomalous Expansion of Water",
                "slug": "water-anomalous"
              },
              {
                "name": "Hard Water — Temporary and Permanent",
                "slug": "hard-water"
              },
              {
                "name": "Removal of Hardness",
                "slug": "hardness-removal"
              }
            ]
          },
          {
            "name": "The s-Block Elements",
            "slug": "s-block",
            "topics": [
              {
                "name": "General Characteristics — Electronic Configuration, Properties",
                "slug": "s-block-general"
              },
              {
                "name": "Alkali Metals — Physical Properties and Trends",
                "slug": "alkali-physical"
              },
              {
                "name": "Alkali Metals — Chemical Properties",
                "slug": "alkali-chemical"
              },
              {
                "name": "Anomalous Behaviour of Lithium",
                "slug": "li-anomalous"
              },
              {
                "name": "Diagonal Relationship — Li and Mg",
                "slug": "li-mg-diagonal"
              },
              {
                "name": "NaOH — Preparation (Castner-Kellner) and Properties",
                "slug": "naoh"
              },
              {
                "name": "Na₂CO₃ — Solvay Process and Properties",
                "slug": "na2co3"
              },
              {
                "name": "NaHCO₃ and NaCl",
                "slug": "nahco3-nacl"
              },
              {
                "name": "Alkaline Earth Metals — Physical Properties",
                "slug": "ae-physical"
              },
              {
                "name": "Alkaline Earth Metals — Chemical Properties",
                "slug": "ae-chemical"
              }
            ]
          },
          {
            "name": "The p-Block Elements (Groups 13 and 14)",
            "slug": "p-block-11",
            "topics": [
              {
                "name": "Group 13 — General Properties and Trends",
                "slug": "group13-general"
              },
              {
                "name": "Boron — Allotropes, Structure and Properties",
                "slug": "boron-properties"
              },
              {
                "name": "Borax (Na₂B₄O₇) — Structure and Reactions",
                "slug": "borax"
              },
              {
                "name": "Boric Acid — Structure and Reactions",
                "slug": "boric-acid"
              },
              {
                "name": "Diborane — Structure and Preparation",
                "slug": "diborane"
              },
              {
                "name": "Aluminium — Properties and Reactions",
                "slug": "aluminium"
              },
              {
                "name": "Alums",
                "slug": "alums"
              },
              {
                "name": "Group 14 — General Properties and Trends",
                "slug": "group14-general"
              },
              {
                "name": "Catenation and Allotropy of Carbon",
                "slug": "catenation-allotropy"
              },
              {
                "name": "Diamond — Structure and Properties",
                "slug": "diamond"
              }
            ]
          },
          {
            "name": "Organic Chemistry: Some Basic Principles and Techniques",
            "slug": "organic-basics",
            "topics": [
              {
                "name": "Tetravalency of Carbon — Catenation",
                "slug": "tetravalency"
              },
              {
                "name": "Classification — Acyclic, Cyclic, Aromatic, Heterocyclic",
                "slug": "classification-organic"
              },
              {
                "name": "Functional Groups",
                "slug": "functional-groups"
              },
              {
                "name": "IUPAC Nomenclature — Alkanes",
                "slug": "iupac-alkanes"
              },
              {
                "name": "IUPAC Nomenclature — Alkenes and Alkynes",
                "slug": "iupac-alkenes-alkynes"
              },
              {
                "name": "IUPAC Nomenclature — Functional Group Compounds",
                "slug": "iupac-functional-groups"
              },
              {
                "name": "Chain, Position and Functional Group Isomerism",
                "slug": "structural-isomerism-types"
              },
              {
                "name": "Optical Isomerism — Chirality and Enantiomers",
                "slug": "optical-isomerism"
              },
              {
                "name": "R and S Configuration",
                "slug": "r-s-configuration"
              },
              {
                "name": "Geometrical Isomerism — cis-trans",
                "slug": "cis-trans-isomerism"
              }
            ]
          },
          {
            "name": "Hydrocarbons",
            "slug": "hydrocarbons",
            "topics": [
              {
                "name": "Alkanes — IUPAC Nomenclature and Isomers",
                "slug": "alkanes-nomenclature"
              },
              {
                "name": "Alkanes — Preparation",
                "slug": "alkanes-prep"
              },
              {
                "name": "Alkanes — Physical Properties",
                "slug": "alkanes-physical"
              },
              {
                "name": "Free Radical Halogenation — Mechanism and Selectivity",
                "slug": "free-radical-halogenation"
              },
              {
                "name": "Alkanes — Combustion",
                "slug": "alkanes-combustion"
              },
              {
                "name": "Alkenes — IUPAC and Structural Isomers",
                "slug": "alkenes-nomenclature"
              },
              {
                "name": "Alkenes — Preparation (Dehydration, Dehydrohalogenation)",
                "slug": "alkenes-prep"
              },
              {
                "name": "Mechanism of Electrophilic Addition",
                "slug": "eas-mechanism-alkenes"
              },
              {
                "name": "Markovnikov's Rule",
                "slug": "markovnikov-rule"
              },
              {
                "name": "Anti-Markovnikov (Peroxide Effect / HBr only)",
                "slug": "anti-markovnikov"
              }
            ]
          },
          {
            "name": "Environmental Chemistry",
            "slug": "environmental-chemistry",
            "topics": [
              {
                "name": "Troposphere, Stratosphere, Mesosphere, Thermosphere",
                "slug": "atmospheric-layers"
              },
              {
                "name": "Tropospheric Pollution — Gaseous Pollutants",
                "slug": "gaseous-pollutants"
              },
              {
                "name": "Particulate Pollutants",
                "slug": "particulate-pollutants"
              },
              {
                "name": "Smog — Classical and Photochemical",
                "slug": "smog-types"
              },
              {
                "name": "Acid Rain — Formation and Effects on Ecosystem",
                "slug": "acid-rain"
              },
              {
                "name": "Greenhouse Effect and Global Warming",
                "slug": "greenhouse-global-warming"
              },
              {
                "name": "Ozone Layer — Formation and Depletion (CFCs)",
                "slug": "ozone-layer-depletion"
              },
              {
                "name": "Water Pollution — Industrial, Domestic, Agricultural",
                "slug": "water-pollution-sources"
              },
              {
                "name": "BOD and COD",
                "slug": "bod-cod"
              },
              {
                "name": "Water Treatment",
                "slug": "water-treatment"
              }
            ]
          },
          {
            "name": "The Solid State",
            "slug": "solid-state",
            "topics": [
              {
                "name": "Crystalline vs Amorphous Solids",
                "slug": "crystalline-amorphous"
              },
              {
                "name": "Types of Solids — Ionic, Molecular, Covalent, Metallic",
                "slug": "solid-types"
              },
              {
                "name": "Crystal Lattice and Unit Cell",
                "slug": "crystal-lattice"
              },
              {
                "name": "Primitive (SCC), BCC and FCC Unit Cells",
                "slug": "unit-cell-types"
              },
              {
                "name": "Number of Atoms per Unit Cell",
                "slug": "atoms-per-cell"
              },
              {
                "name": "Packing Efficiency — SCC (52.4%), BCC (68%), FCC (74%)",
                "slug": "packing-efficiency"
              },
              {
                "name": "Tetrahedral and Octahedral Voids",
                "slug": "voids-types"
              },
              {
                "name": "Close Packing in 2D and 3D — HCP and CCP",
                "slug": "close-packing"
              },
              {
                "name": "Density Calculation from Unit Cell",
                "slug": "density-calculation"
              },
              {
                "name": "Structures — NaCl, ZnS (Zinc Blende and Wurtzite), CsCl, Diamond",
                "slug": "ionic-structures"
              }
            ]
          },
          {
            "name": "Solutions",
            "slug": "solutions",
            "topics": [
              {
                "name": "Types of Solutions — Solid, Liquid, Gas",
                "slug": "solution-types"
              },
              {
                "name": "Solubility of Solid in Liquid",
                "slug": "solubility-solid"
              },
              {
                "name": "Henry's Law for Gas Solubility",
                "slug": "henrys-law"
              },
              {
                "name": "Concentration Terms — Molarity, Molality, Mole Fraction, % w/v, ppm",
                "slug": "concentration-terms"
              },
              {
                "name": "Interconversion of Concentration Terms",
                "slug": "concentration-interconversion"
              },
              {
                "name": "Vapour Pressure and Raoult's Law",
                "slug": "raoults-law"
              },
              {
                "name": "Raoult's Law for Volatile-Volatile Mixtures",
                "slug": "raoult-volatile-mix"
              },
              {
                "name": "Ideal and Non-Ideal Solutions",
                "slug": "ideal-nonideal"
              },
              {
                "name": "Positive Deviation (PA > PA° xA)",
                "slug": "positive-deviation"
              },
              {
                "name": "Negative Deviation",
                "slug": "negative-deviation"
              }
            ]
          },
          {
            "name": "Electrochemistry",
            "slug": "electrochemistry",
            "topics": [
              {
                "name": "Electrochemical Cell — Galvanic vs Electrolytic",
                "slug": "cell-types"
              },
              {
                "name": "Daniel Cell — Working and Cell Reaction",
                "slug": "daniel-cell"
              },
              {
                "name": "Cell Notation and Salt Bridge Function",
                "slug": "cell-notation"
              },
              {
                "name": "Standard Electrode Potential (E° at SHE)",
                "slug": "standard-electrode"
              },
              {
                "name": "Cell Potential (E°cell = E°cathode - E°anode)",
                "slug": "cell-potential"
              },
              {
                "name": "Electrochemical Series and Applications",
                "slug": "electrochemical-series"
              },
              {
                "name": "Nernst Equation",
                "slug": "nernst-equation"
              },
              {
                "name": "Equilibrium Constant from E°cell (lnK = nFE°/RT)",
                "slug": "k-from-ecell"
              },
              {
                "name": "Relationship ΔG° = -nFE°",
                "slug": "delta-g-ecell"
              },
              {
                "name": "Electrolysis — Faraday's First Law",
                "slug": "faradays-first"
              }
            ]
          },
          {
            "name": "Chemical Kinetics",
            "slug": "chemical-kinetics",
            "topics": [
              {
                "name": "Rate of Reaction — Average and Instantaneous",
                "slug": "rate-of-reaction"
              },
              {
                "name": "Rate Expression and Rate Constant Units",
                "slug": "rate-expression-units"
              },
              {
                "name": "Factors Affecting Rate",
                "slug": "rate-factors"
              },
              {
                "name": "Rate Law (Rate = k[A]^m[B]^n)",
                "slug": "rate-law"
              },
              {
                "name": "Order of Reaction — Zero, First, Second",
                "slug": "order-types"
              },
              {
                "name": "Molecularity",
                "slug": "molecularity"
              },
              {
                "name": "Integrated Rate Law — Zero Order",
                "slug": "zero-order-integrated"
              },
              {
                "name": "Integrated Rate Law — First Order (k = (2.303/t)log(a/(a-x)))",
                "slug": "first-order-integrated"
              },
              {
                "name": "Half-Life — Zero Order (t₁/₂ = a/2k)",
                "slug": "half-life-zero"
              },
              {
                "name": "Half-Life — First Order (t₁/₂ = 0.693/k)",
                "slug": "half-life-first"
              }
            ]
          },
          {
            "name": "Surface Chemistry",
            "slug": "surface-chemistry",
            "topics": [
              {
                "name": "Adsorption — Physisorption vs Chemisorption",
                "slug": "adsorption-types"
              },
              {
                "name": "Freundlich Adsorption Isotherm",
                "slug": "freundlich-isotherm"
              },
              {
                "name": "Langmuir Adsorption Isotherm",
                "slug": "langmuir-isotherm"
              },
              {
                "name": "Factors Affecting Adsorption",
                "slug": "adsorption-factors"
              },
              {
                "name": "Homogeneous Catalysis",
                "slug": "homogeneous-catalysis"
              },
              {
                "name": "Heterogeneous Catalysis — Mechanism",
                "slug": "heterogeneous-catalysis"
              },
              {
                "name": "Enzyme Catalysis and Lock-Key Mechanism",
                "slug": "enzyme-catalysis"
              },
              {
                "name": "Zeolites",
                "slug": "zeolites"
              },
              {
                "name": "Colloid — Definition, Types and Classification",
                "slug": "colloid-types"
              },
              {
                "name": "Preparation of Colloids — Chemical, Bredig's Arc",
                "slug": "colloid-preparation"
              }
            ]
          },
          {
            "name": "General Principles and Processes of Isolation of Elements",
            "slug": "metallurgy",
            "topics": [
              {
                "name": "Minerals and Ores",
                "slug": "minerals-ores"
              },
              {
                "name": "Concentration — Gravity Separation, Froth Flotation",
                "slug": "concentration-methods"
              },
              {
                "name": "Electromagnetic Separation and Chemical Leaching",
                "slug": "electromagnetic-leaching"
              },
              {
                "name": "Calcination and Roasting",
                "slug": "calcination-roasting"
              },
              {
                "name": "Smelting and Carbon Reduction",
                "slug": "smelting-reduction"
              },
              {
                "name": "Thermodynamic Principles — Ellingham Diagram",
                "slug": "ellingham-diagram"
              },
              {
                "name": "Electrochemical Reduction",
                "slug": "electrochemical-reduction"
              },
              {
                "name": "Refining — Distillation, Liquation",
                "slug": "refining-distillation"
              },
              {
                "name": "Electrolytic Refining",
                "slug": "electrolytic-refining"
              },
              {
                "name": "Zone Refining",
                "slug": "zone-refining"
              }
            ]
          },
          {
            "name": "The p-Block Elements (Groups 15, 16, 17 and 18)",
            "slug": "p-block-12",
            "topics": [
              {
                "name": "Group 15 — General Properties",
                "slug": "group15-general"
              },
              {
                "name": "Nitrogen — Physical and Chemical Properties",
                "slug": "nitrogen-properties"
              },
              {
                "name": "Ammonia — Haber Process, Properties and Uses",
                "slug": "ammonia-haber"
              },
              {
                "name": "Nitric Acid — Ostwald Process, Properties",
                "slug": "nitric-acid-ostwald"
              },
              {
                "name": "Oxides of Nitrogen (N₂O to N₂O₅)",
                "slug": "nitrogen-oxides"
              },
              {
                "name": "Oxoacids of Nitrogen",
                "slug": "oxoacids-nitrogen"
              },
              {
                "name": "Phosphorus — Allotropes",
                "slug": "phosphorus-allotropes"
              },
              {
                "name": "Phosphine (PH₃) — Preparation and Properties",
                "slug": "phosphine"
              },
              {
                "name": "PCl₃ and PCl₅ — Structure and Properties",
                "slug": "pcl3-pcl5"
              },
              {
                "name": "Oxoacids of Phosphorus",
                "slug": "oxoacids-phosphorus"
              }
            ]
          },
          {
            "name": "The d- and f-Block Elements",
            "slug": "d-f-block",
            "topics": [
              {
                "name": "Position and Electronic Configuration",
                "slug": "transition-position"
              },
              {
                "name": "Metallic Character and Melting Point",
                "slug": "transition-metallic"
              },
              {
                "name": "Density and Atomic/Ionic Radius Trend",
                "slug": "transition-radius"
              },
              {
                "name": "Variable Oxidation States and Stability",
                "slug": "variable-oxidation"
              },
              {
                "name": "Ionisation Enthalpy of Transition Metals",
                "slug": "transition-ie"
              },
              {
                "name": "Colour of Transition Metal Compounds",
                "slug": "transition-colour"
              },
              {
                "name": "Magnetic Properties — Spin-Only Formula",
                "slug": "spin-only-formula"
              },
              {
                "name": "Catalytic Properties",
                "slug": "transition-catalysis"
              },
              {
                "name": "Interstitial Compounds",
                "slug": "interstitial-compounds"
              },
              {
                "name": "Alloy Formation",
                "slug": "alloy-formation"
              }
            ]
          },
          {
            "name": "Coordination Compounds",
            "slug": "coordination-compounds",
            "topics": [
              {
                "name": "Werner's Theory of Coordination",
                "slug": "werners-theory"
              },
              {
                "name": "Key Terms — Coordination Entity, Central Atom, Ligand, CN",
                "slug": "key-terms"
              },
              {
                "name": "Types of Ligands — Mono, Bi, Poly, Ambidentate, Chelate",
                "slug": "types-ligands"
              },
              {
                "name": "IUPAC Nomenclature Rules",
                "slug": "iupac-rules-coord"
              },
              {
                "name": "IUPAC Nomenclature — Worked Examples",
                "slug": "iupac-worked"
              },
              {
                "name": "Isomerism — Ionisation Isomerism",
                "slug": "ionisation-isomerism"
              },
              {
                "name": "Hydrate, Linkage, Coordination Isomerism",
                "slug": "hydrate-linkage-coord"
              },
              {
                "name": "Geometric Isomerism — Square Planar and Octahedral",
                "slug": "geometric-isomerism"
              },
              {
                "name": "Optical Isomerism in Coordination Compounds",
                "slug": "optical-isomerism-coord"
              },
              {
                "name": "Valence Bond Theory (VBT) — Inner and Outer Orbital",
                "slug": "vbt-inner-outer"
              }
            ]
          },
          {
            "name": "Haloalkanes and Haloarenes",
            "slug": "haloalkanes-haloarenes",
            "topics": [
              {
                "name": "Classification and IUPAC Nomenclature",
                "slug": "halo-classification-iupac"
              },
              {
                "name": "Nature of C-X Bond and Physical Properties",
                "slug": "cx-bond-properties"
              },
              {
                "name": "Preparation from Alcohols, Alkenes and Alkanes",
                "slug": "halo-preparation"
              },
              {
                "name": "SN1 Mechanism — Steps and Energy Profile",
                "slug": "sn1-mechanism"
              },
              {
                "name": "SN2 Mechanism — Steps and Stereochemistry",
                "slug": "sn2-mechanism"
              },
              {
                "name": "Factors — Substrate, Nucleophile, Solvent, Leaving Group",
                "slug": "sn-factors"
              },
              {
                "name": "Walden Inversion in SN2",
                "slug": "walden-inversion"
              },
              {
                "name": "E1 Elimination Mechanism",
                "slug": "e1-mechanism"
              },
              {
                "name": "E2 Elimination and Zaitsev's Rule",
                "slug": "e2-zaitsev"
              },
              {
                "name": "SN2 vs E2 Competition",
                "slug": "sn2-e2-competition"
              }
            ]
          },
          {
            "name": "Alcohols, Phenols and Ethers",
            "slug": "alcohols-phenols-ethers",
            "topics": [
              {
                "name": "Classification and IUPAC of Alcohols",
                "slug": "alcohol-classification-iupac"
              },
              {
                "name": "Preparation of Monohydric Alcohols",
                "slug": "alcohol-monohydric-prep"
              },
              {
                "name": "Preparation from Grignard Reagent",
                "slug": "grignard-prep"
              },
              {
                "name": "Physical Properties — Boiling Points, Hydrogen Bonding",
                "slug": "alcohol-physical"
              },
              {
                "name": "Chemical Reactions — Acidity of Alcohols",
                "slug": "alcohol-acidity"
              },
              {
                "name": "Esterification (Fischer-Speier)",
                "slug": "esterification"
              },
              {
                "name": "Dehydration — E1 and E2 Pathway",
                "slug": "dehydration"
              },
              {
                "name": "Lucas Test",
                "slug": "lucas-test"
              },
              {
                "name": "Oxidation — Primary to Aldehyde/Acid, Secondary to Ketone",
                "slug": "alcohol-oxidation"
              },
              {
                "name": "Preparation of Phenols",
                "slug": "phenol-prep"
              }
            ]
          },
          {
            "name": "Aldehydes, Ketones and Carboxylic Acids",
            "slug": "aldehydes-ketones-acids",
            "topics": [
              {
                "name": "Nomenclature and Classification",
                "slug": "carbonyl-nomenclature"
              },
              {
                "name": "Preparation of Aldehydes",
                "slug": "aldehyde-prep"
              },
              {
                "name": "Preparation of Ketones",
                "slug": "ketone-prep"
              },
              {
                "name": "Physical Properties",
                "slug": "carbonyl-physical"
              },
              {
                "name": "Nucleophilic Addition — Mechanism",
                "slug": "nucleophilic-addition"
              },
              {
                "name": "Addition of HCN",
                "slug": "addition-hcn"
              },
              {
                "name": "Addition of NaHSO₃",
                "slug": "addition-nahso3"
              },
              {
                "name": "Addition of Grignard Reagent",
                "slug": "addition-grignard"
              },
              {
                "name": "Addition of NH₃ Derivatives",
                "slug": "addition-nh3-derivatives"
              },
              {
                "name": "Reduction — Clemmensen and Wolff-Kishner",
                "slug": "clemmensen-wolff-kishner"
              }
            ]
          },
          {
            "name": "Amines",
            "slug": "amines",
            "topics": [
              {
                "name": "Classification and IUPAC Nomenclature",
                "slug": "amines-nomenclature"
              },
              {
                "name": "Preparation — Gabriel Synthesis",
                "slug": "gabriel-synthesis"
              },
              {
                "name": "Hoffmann Bromamide Degradation",
                "slug": "hoffmann-degradation"
              },
              {
                "name": "Reduction of Nitrogen Compounds",
                "slug": "reduction-nitrogen"
              },
              {
                "name": "Physical Properties",
                "slug": "amines-physical"
              },
              {
                "name": "Basicity — pKb Values",
                "slug": "amines-basicity"
              },
              {
                "name": "Comparison — Aliphatic vs Aromatic Amines",
                "slug": "aliphatic-aromatic-amines"
              },
              {
                "name": "Effect of Substituents on Basicity",
                "slug": "substituent-basicity"
              },
              {
                "name": "Reactions with Acids and Acylation",
                "slug": "amine-acylation"
              },
              {
                "name": "Reaction with Nitrous Acid (Diazotisation)",
                "slug": "diazotisation"
              }
            ]
          },
          {
            "name": "Biomolecules",
            "slug": "biomolecules",
            "topics": [
              {
                "name": "Carbohydrates — Definition and Classification",
                "slug": "carbohydrates-classification"
              },
              {
                "name": "Glucose — Open Chain and Cyclic (Haworth) Structure",
                "slug": "glucose-structure"
              },
              {
                "name": "Fructose Structure and Mutarotation",
                "slug": "fructose-mutarotation"
              },
              {
                "name": "Disaccharides — Sucrose, Maltose, Lactose",
                "slug": "disaccharides"
              },
              {
                "name": "Polysaccharides — Starch, Cellulose, Glycogen",
                "slug": "polysaccharides"
              },
              {
                "name": "Reducing and Non-Reducing Sugars",
                "slug": "reducing-non-reducing"
              },
              {
                "name": "Glycosidic Bond",
                "slug": "glycosidic-bond"
              },
              {
                "name": "Amino Acids — Structure and Classification",
                "slug": "amino-acids-structure"
              },
              {
                "name": "Essential Amino Acids",
                "slug": "essential-amino-acids"
              },
              {
                "name": "Zwitter Ion",
                "slug": "zwitter-ion"
              }
            ]
          },
          {
            "name": "Polymers",
            "slug": "polymers",
            "topics": [
              {
                "name": "Polymer Terminology — Monomer, Repeat Unit, Chain",
                "slug": "polymer-terminology"
              },
              {
                "name": "Classification — Natural, Synthetic, Semi-Synthetic",
                "slug": "polymer-classification-origin"
              },
              {
                "name": "Classification — Addition and Condensation",
                "slug": "polymer-addition-cond"
              },
              {
                "name": "Classification — Biodegradable and Non-Biodegradable",
                "slug": "polymer-biodegradable"
              },
              {
                "name": "Addition Polymerisation — Free Radical Mechanism",
                "slug": "addition-mechanism"
              },
              {
                "name": "Condensation Polymerisation — Mechanism",
                "slug": "condensation-mechanism"
              },
              {
                "name": "Copolymerisation",
                "slug": "copolymerisation"
              },
              {
                "name": "Natural Rubber and Vulcanisation",
                "slug": "rubber-vulcanisation"
              },
              {
                "name": "Synthetic Rubbers — Neoprene, Buna-S, Buna-N",
                "slug": "synthetic-rubbers"
              },
              {
                "name": "Polyethylene — LDPE and HDPE",
                "slug": "polyethylene"
              }
            ]
          },
          {
            "name": "Chemistry in Everyday Life",
            "slug": "chemistry-everyday-life",
            "topics": [
              {
                "name": "Drugs — Definition and Classification",
                "slug": "drugs-classification"
              },
              {
                "name": "Drug-Target Interaction — Enzyme and Receptor",
                "slug": "drug-target-interaction"
              },
              {
                "name": "Analgesics — Narcotics and Non-Narcotics",
                "slug": "analgesics"
              },
              {
                "name": "Tranquilisers",
                "slug": "tranquilisers"
              },
              {
                "name": "Antiseptics and Disinfectants",
                "slug": "antiseptics-disinfectants"
              },
              {
                "name": "Antibiotics — Bactericidal and Bacteriostatic",
                "slug": "antibiotics"
              },
              {
                "name": "Antacids and Antihistamines",
                "slug": "antacids-antihistamines"
              },
              {
                "name": "Antifertility Drugs",
                "slug": "antifertility"
              },
              {
                "name": "Chemicals in Food — Preservatives",
                "slug": "food-preservatives"
              },
              {
                "name": "Artificial Sweeteners",
                "slug": "artificial-sweeteners"
              }
            ]
          }
        ]
      },
      {
        "name": "Mathematics",
        "slug": "mathematics",
        "chapters": [
          {
            "name": "Sets",
            "slug": "sets",
            "topics": [
              {
                "name": "Sets — Definition and Representation (Roster, Set-Builder)",
                "slug": "sets-def-representation"
              },
              {
                "name": "Types of Sets — Empty, Finite, Infinite, Equal, Singleton",
                "slug": "types-sets"
              },
              {
                "name": "Subsets and Power Set",
                "slug": "subsets-power-set"
              },
              {
                "name": "Universal Set and Complement",
                "slug": "universal-complement"
              },
              {
                "name": "Union and Intersection of Sets",
                "slug": "union-intersection"
              },
              {
                "name": "Difference and Symmetric Difference",
                "slug": "difference-symmetric"
              },
              {
                "name": "De Morgan's Laws",
                "slug": "de-morgans-laws"
              },
              {
                "name": "Venn Diagrams and Problems",
                "slug": "venn-diagrams"
              },
              {
                "name": "Cartesian Product of Sets",
                "slug": "cartesian-product"
              },
              {
                "name": "Number of Elements in A∪B, A∩B (Inclusion-Exclusion)",
                "slug": "inclusion-exclusion"
              }
            ]
          },
          {
            "name": "Relations and Functions",
            "slug": "relations-functions",
            "topics": [
              {
                "name": "Ordered Pair and Cartesian Product",
                "slug": "ordered-pair"
              },
              {
                "name": "Relation — Definition, Domain, Range, Codomain",
                "slug": "relation-definition"
              },
              {
                "name": "Types of Relations — Reflexive, Symmetric, Transitive",
                "slug": "relation-types"
              },
              {
                "name": "Equivalence Relation",
                "slug": "equivalence-relation"
              },
              {
                "name": "Function — Definition and Examples",
                "slug": "function-definition"
              },
              {
                "name": "Domain, Codomain and Range",
                "slug": "domain-range"
              },
              {
                "name": "One-One (Injective) Functions",
                "slug": "one-one"
              },
              {
                "name": "Onto (Surjective) and Bijective Functions",
                "slug": "onto-bijective"
              },
              {
                "name": "Number of Functions and Bijections",
                "slug": "counting-functions"
              },
              {
                "name": "Algebra of Functions (Sum, Difference, Product, Quotient)",
                "slug": "algebra-functions"
              }
            ]
          },
          {
            "name": "Trigonometric Functions",
            "slug": "trigonometric-functions",
            "topics": [
              {
                "name": "Measurement of Angles — Radian and Degree",
                "slug": "radian-degree"
              },
              {
                "name": "Arc Length and Area of Sector",
                "slug": "arc-sector"
              },
              {
                "name": "Trigonometric Functions — Definition",
                "slug": "trig-def"
              },
              {
                "name": "Signs of Trig Functions in all Quadrants (ASTC)",
                "slug": "signs-quadrants"
              },
              {
                "name": "Values at Standard Angles (0°, 30°, 45°, 60°, 90°)",
                "slug": "standard-angle-values"
              },
              {
                "name": "Trig Functions of Allied Angles",
                "slug": "allied-angles"
              },
              {
                "name": "Fundamental Identities",
                "slug": "fundamental-identities"
              },
              {
                "name": "Compound Angle Formulae (A+B, A-B)",
                "slug": "compound-angles"
              },
              {
                "name": "Double Angle Formulae (2A)",
                "slug": "double-angle"
              },
              {
                "name": "Triple Angle Formulae (3A)",
                "slug": "triple-angle"
              }
            ]
          },
          {
            "name": "Principle of Mathematical Induction",
            "slug": "mathematical-induction",
            "topics": [
              {
                "name": "Motivation and Principle of Mathematical Induction",
                "slug": "pmi-motivation"
              },
              {
                "name": "Proving Summation Formulae by PMI",
                "slug": "pmi-summation"
              },
              {
                "name": "Proving Divisibility Results by PMI",
                "slug": "pmi-divisibility"
              },
              {
                "name": "Proving Inequalities by PMI",
                "slug": "pmi-inequalities"
              },
              {
                "name": "Second Principle of Induction",
                "slug": "pmi-second"
              }
            ]
          },
          {
            "name": "Complex Numbers and Quadratic Equations",
            "slug": "complex-numbers-quadratic",
            "topics": [
              {
                "name": "Need for Complex Numbers and Imaginary Unit i",
                "slug": "need-complex"
              },
              {
                "name": "Complex Number z = a + ib",
                "slug": "complex-form"
              },
              {
                "name": "Algebra — Addition, Subtraction, Multiplication, Division",
                "slug": "complex-algebra"
              },
              {
                "name": "Modulus and Argument (Principal Value)",
                "slug": "modulus-argument"
              },
              {
                "name": "Polar Form r(cosθ + i sinθ)",
                "slug": "polar-form"
              },
              {
                "name": "Euler's Form re^(iθ)",
                "slug": "euler-form"
              },
              {
                "name": "de Moivre's Theorem and Proof",
                "slug": "de-moivres"
              },
              {
                "name": "Cube Roots of Unity (ω and ω²) and Properties",
                "slug": "cube-roots-unity"
              },
              {
                "name": "nth Roots of Unity",
                "slug": "nth-roots-unity"
              },
              {
                "name": "Locus Problems in Argand Plane",
                "slug": "argand-locus"
              }
            ]
          },
          {
            "name": "Linear Inequalities",
            "slug": "linear-inequalities",
            "topics": [
              {
                "name": "Types of Inequalities and Notation",
                "slug": "inequality-notation"
              },
              {
                "name": "Properties of Inequalities",
                "slug": "inequality-properties"
              },
              {
                "name": "Linear Inequalities in One Variable — Solution",
                "slug": "one-var-ineq"
              },
              {
                "name": "Number Line Representation",
                "slug": "number-line-ineq"
              },
              {
                "name": "Linear Inequalities in Two Variables",
                "slug": "two-var-ineq"
              },
              {
                "name": "Graphical Representation — Half Plane",
                "slug": "half-plane"
              },
              {
                "name": "System of Linear Inequalities — Feasible Region",
                "slug": "feasible-region-ineq"
              },
              {
                "name": "Practical Problems on Inequalities",
                "slug": "practical-ineq"
              }
            ]
          },
          {
            "name": "Permutations and Combinations",
            "slug": "permutations-combinations",
            "topics": [
              {
                "name": "Fundamental Counting Principle",
                "slug": "counting-principle"
              },
              {
                "name": "Factorial Notation",
                "slug": "factorial"
              },
              {
                "name": "Permutation Formula (nPr)",
                "slug": "npr-formula"
              },
              {
                "name": "Permutations with All Objects",
                "slug": "all-objects-perm"
              },
              {
                "name": "Permutations with Restrictions",
                "slug": "restricted-perm"
              },
              {
                "name": "Circular Permutations",
                "slug": "circular-perm"
              },
              {
                "name": "Permutations of Identical Objects",
                "slug": "identical-perm"
              },
              {
                "name": "Combination Formula (nCr)",
                "slug": "ncr-formula"
              },
              {
                "name": "Combinations — Properties and Identities",
                "slug": "ncr-properties"
              },
              {
                "name": "Combinations with Restrictions",
                "slug": "restricted-comb"
              }
            ]
          },
          {
            "name": "Binomial Theorem",
            "slug": "binomial-theorem",
            "topics": [
              {
                "name": "Binomial Theorem for Positive Integer n",
                "slug": "binomial-positive-int"
              },
              {
                "name": "Pascal's Triangle",
                "slug": "pascals-triangle"
              },
              {
                "name": "General Term Tr+1 = nCr · x^(n-r) · y^r",
                "slug": "general-term"
              },
              {
                "name": "Finding a Specific Term",
                "slug": "specific-term"
              },
              {
                "name": "Middle Term(s)",
                "slug": "middle-term"
              },
              {
                "name": "Term Independent of x",
                "slug": "term-independent-x"
              },
              {
                "name": "Properties of Binomial Coefficients",
                "slug": "binomial-coeff-properties"
              },
              {
                "name": "Sum of Coefficients",
                "slug": "sum-coefficients"
              },
              {
                "name": "Binomial Theorem for Rational Index (Approximation)",
                "slug": "rational-index"
              },
              {
                "name": "Greatest Term in Binomial Expansion",
                "slug": "greatest-term"
              }
            ]
          },
          {
            "name": "Sequences and Series",
            "slug": "sequences-series",
            "topics": [
              {
                "name": "Sequence — General Term and Pattern",
                "slug": "sequence-general-term"
              },
              {
                "name": "AP — nth Term (an = a + (n-1)d)",
                "slug": "ap-nth-term"
              },
              {
                "name": "AP — Sum of n Terms (Sn = n/2(2a + (n-1)d))",
                "slug": "ap-sum"
              },
              {
                "name": "AP — Properties",
                "slug": "ap-properties"
              },
              {
                "name": "Insertion of Arithmetic Means",
                "slug": "am-insertion"
              },
              {
                "name": "GP — nth Term (an = ar^(n-1))",
                "slug": "gp-nth-term"
              },
              {
                "name": "GP — Sum of n Terms",
                "slug": "gp-sum"
              },
              {
                "name": "GP — Sum of Infinite Terms (S∞ = a/(1-r), |r|<1)",
                "slug": "gp-infinite-sum"
              },
              {
                "name": "Insertion of Geometric Means",
                "slug": "gm-insertion"
              },
              {
                "name": "HP — nth Term and Problems",
                "slug": "hp-nth-term"
              }
            ]
          },
          {
            "name": "Straight Lines",
            "slug": "straight-lines",
            "topics": [
              {
                "name": "Slope of a Line — Formula and Inclination",
                "slug": "slope-line"
              },
              {
                "name": "Conditions for Parallel and Perpendicular",
                "slug": "parallel-perpendicular-cond"
              },
              {
                "name": "Slope-Intercept Form (y = mx + c)",
                "slug": "slope-intercept-form"
              },
              {
                "name": "Point-Slope Form",
                "slug": "point-slope-form"
              },
              {
                "name": "Two-Point Form",
                "slug": "two-point-form"
              },
              {
                "name": "Intercept Form (x/a + y/b = 1)",
                "slug": "intercept-form"
              },
              {
                "name": "Normal Form (x cosα + y sinα = p)",
                "slug": "normal-form"
              },
              {
                "name": "General Form (ax + by + c = 0)",
                "slug": "general-form"
              },
              {
                "name": "Angle Between Two Lines (tanθ formula)",
                "slug": "angle-two-lines"
              },
              {
                "name": "Distance from Point to Line",
                "slug": "point-line-distance"
              }
            ]
          },
          {
            "name": "Conic Sections",
            "slug": "conic-sections",
            "topics": [
              {
                "name": "Circle — Standard Equation (x²+y²=r²)",
                "slug": "circle-standard"
              },
              {
                "name": "Circle — General Equation",
                "slug": "circle-general"
              },
              {
                "name": "Circle through 3 Points",
                "slug": "circle-3-points"
              },
              {
                "name": "Tangent to Circle — Condition and Equation",
                "slug": "circle-tangent"
              },
              {
                "name": "Normal to Circle",
                "slug": "circle-normal"
              },
              {
                "name": "Chord of Contact (T = 0)",
                "slug": "circle-chord-contact"
              },
              {
                "name": "Family of Circles",
                "slug": "circle-family"
              },
              {
                "name": "Radical Axis",
                "slug": "radical-axis"
              },
              {
                "name": "Parabola — Standard Forms (y²=4ax, x²=4ay)",
                "slug": "parabola-forms"
              },
              {
                "name": "Parabola — Parametric Equations",
                "slug": "parabola-parametric"
              }
            ]
          },
          {
            "name": "Introduction to Three Dimensional Geometry",
            "slug": "intro-3d-geometry",
            "topics": [
              {
                "name": "Coordinate Axes and Planes in 3D",
                "slug": "3d-axes-planes"
              },
              {
                "name": "Coordinates of a Point in Space",
                "slug": "3d-coordinates"
              },
              {
                "name": "Distance Formula in 3D",
                "slug": "3d-distance"
              },
              {
                "name": "Section Formula — Internal Division",
                "slug": "3d-section-internal"
              },
              {
                "name": "Section Formula — External Division",
                "slug": "3d-section-external"
              },
              {
                "name": "Midpoint Formula",
                "slug": "3d-midpoint"
              },
              {
                "name": "Centroid of Triangle and Tetrahedron",
                "slug": "3d-centroid"
              }
            ]
          },
          {
            "name": "Limits and Derivatives",
            "slug": "limits-derivatives",
            "topics": [
              {
                "name": "Intuitive Notion of Limit",
                "slug": "limit-intuition"
              },
              {
                "name": "Left-Hand Limit and Right-Hand Limit",
                "slug": "lhl-rhl"
              },
              {
                "name": "Existence of Limit",
                "slug": "limit-existence"
              },
              {
                "name": "Algebra of Limits",
                "slug": "algebra-limits"
              },
              {
                "name": "Standard Limits — sinx/x, tanx/x, (aˣ-1)/x, (xⁿ-aⁿ)/(x-a)",
                "slug": "standard-limits"
              },
              {
                "name": "Limit at Infinity and Infinite Limits",
                "slug": "limits-infinity"
              },
              {
                "name": "L'Hôpital's Rule",
                "slug": "lhopital-rule"
              },
              {
                "name": "Sandwich Theorem",
                "slug": "sandwich-theorem"
              },
              {
                "name": "Definition of Derivative — First Principles",
                "slug": "first-principles"
              },
              {
                "name": "Rules of Differentiation",
                "slug": "diff-rules"
              }
            ]
          },
          {
            "name": "Mathematical Reasoning",
            "slug": "mathematical-reasoning",
            "topics": [
              {
                "name": "Statements — Simple and Compound",
                "slug": "statements-types"
              },
              {
                "name": "Negation",
                "slug": "negation"
              },
              {
                "name": "Conjunction (∧) and Disjunction (∨)",
                "slug": "conjunction-disjunction"
              },
              {
                "name": "Implication (→) and Biconditional (↔)",
                "slug": "implication-biconditional"
              },
              {
                "name": "Truth Tables",
                "slug": "truth-tables"
              },
              {
                "name": "Tautology and Contradiction",
                "slug": "tautology-contradiction"
              },
              {
                "name": "Converse, Inverse and Contrapositive",
                "slug": "converse-inverse"
              },
              {
                "name": "Quantifiers — For All (∀) and There Exists (∃)",
                "slug": "quantifiers"
              },
              {
                "name": "Validity of Statements — Direct and Contradiction",
                "slug": "proof-methods"
              }
            ]
          },
          {
            "name": "Statistics",
            "slug": "statistics",
            "topics": [
              {
                "name": "Measures of Central Tendency — Mean, Median, Mode",
                "slug": "central-tendency"
              },
              {
                "name": "Mean for Grouped Data",
                "slug": "grouped-mean"
              },
              {
                "name": "Median for Grouped Data",
                "slug": "grouped-median"
              },
              {
                "name": "Mode for Grouped Data",
                "slug": "grouped-mode"
              },
              {
                "name": "Mean Deviation about Mean",
                "slug": "mean-deviation-mean"
              },
              {
                "name": "Mean Deviation about Median",
                "slug": "mean-deviation-median"
              },
              {
                "name": "Variance",
                "slug": "variance"
              },
              {
                "name": "Standard Deviation",
                "slug": "standard-deviation"
              },
              {
                "name": "Coefficient of Variation (CV)",
                "slug": "cv"
              },
              {
                "name": "Comparison of Two Distributions using CV",
                "slug": "compare-cv"
              }
            ]
          },
          {
            "name": "Probability",
            "slug": "probability-11",
            "topics": [
              {
                "name": "Random Experiment and Sample Space",
                "slug": "sample-space"
              },
              {
                "name": "Events — Simple, Compound, Complementary, Impossible",
                "slug": "event-types"
              },
              {
                "name": "Axiomatic Definition of Probability",
                "slug": "axiomatic-probability"
              },
              {
                "name": "Classical Definition — Equally Likely Outcomes",
                "slug": "classical-probability"
              },
              {
                "name": "Addition Theorem (P(A∪B) = P(A) + P(B) - P(A∩B))",
                "slug": "addition-theorem"
              },
              {
                "name": "Mutually Exclusive Events",
                "slug": "mutually-exclusive"
              },
              {
                "name": "Complement Rule (P(A') = 1 - P(A))",
                "slug": "complement-rule"
              },
              {
                "name": "Geometric Probability",
                "slug": "geometric-probability"
              }
            ]
          },
          {
            "name": "Relations and Functions",
            "slug": "relations-functions-12",
            "topics": [
              {
                "name": "Review — Types of Relations",
                "slug": "review-relations"
              },
              {
                "name": "Equivalence Relations and Classes",
                "slug": "equivalence-classes"
              },
              {
                "name": "One-One, Onto and Bijective Functions",
                "slug": "bijective-12"
              },
              {
                "name": "Composition of Functions and its Properties",
                "slug": "composition-12"
              },
              {
                "name": "Invertible Functions and Finding Inverse",
                "slug": "invertible-12"
              },
              {
                "name": "Binary Operations — Definition and Properties",
                "slug": "binary-operations"
              },
              {
                "name": "Commutativity, Associativity, Identity, Inverse",
                "slug": "binary-operation-properties"
              }
            ]
          },
          {
            "name": "Inverse Trigonometric Functions",
            "slug": "inverse-trig",
            "topics": [
              {
                "name": "Need for Restricted Domain",
                "slug": "restricted-domain"
              },
              {
                "name": "Domain and Range of sin⁻¹, cos⁻¹, tan⁻¹",
                "slug": "domain-range-main"
              },
              {
                "name": "Domain and Range of csc⁻¹, sec⁻¹, cot⁻¹",
                "slug": "domain-range-others"
              },
              {
                "name": "Graphs of Inverse Trig Functions",
                "slug": "graphs-inverse"
              },
              {
                "name": "Principal Value — Definition and Finding",
                "slug": "principal-value"
              },
              {
                "name": "Property — sin⁻¹(sinx) = x and sin(sin⁻¹x) = x",
                "slug": "inv-composition"
              },
              {
                "name": "Property — sin⁻¹x + cos⁻¹x = π/2",
                "slug": "complementary-inv"
              },
              {
                "name": "Property — tan⁻¹x + cot⁻¹x = π/2",
                "slug": "tan-cot-complementary"
              },
              {
                "name": "Addition Formula for tan⁻¹",
                "slug": "tan-addition"
              },
              {
                "name": "Double and Triple Angle Formulas in Inverse Trig",
                "slug": "double-triple-inv"
              }
            ]
          },
          {
            "name": "Matrices",
            "slug": "matrices",
            "topics": [
              {
                "name": "Matrix — Definition, Order and Types",
                "slug": "matrix-types"
              },
              {
                "name": "Matrix Equality",
                "slug": "matrix-equality"
              },
              {
                "name": "Addition and Subtraction of Matrices",
                "slug": "matrix-add-sub"
              },
              {
                "name": "Scalar Multiplication",
                "slug": "scalar-mult"
              },
              {
                "name": "Matrix Multiplication — Conditions and Rules",
                "slug": "matrix-multiplication"
              },
              {
                "name": "Properties of Matrix Multiplication",
                "slug": "mult-properties"
              },
              {
                "name": "Transpose of Matrix and Its Properties",
                "slug": "transpose"
              },
              {
                "name": "Symmetric and Skew-Symmetric Matrices",
                "slug": "symmetric-skew"
              },
              {
                "name": "Elementary Row Operations",
                "slug": "row-operations"
              },
              {
                "name": "Row Echelon Form",
                "slug": "row-echelon"
              }
            ]
          },
          {
            "name": "Determinants",
            "slug": "determinants",
            "topics": [
              {
                "name": "Determinant — Expansion along Row/Column (1×1, 2×2, 3×3)",
                "slug": "det-expansion"
              },
              {
                "name": "Properties of Determinants",
                "slug": "det-properties"
              },
              {
                "name": "Sarrus' Rule for 3×3 Determinant",
                "slug": "sarrus-rule"
              },
              {
                "name": "Minors and Cofactors",
                "slug": "minors-cofactors"
              },
              {
                "name": "Adjoint of a Matrix",
                "slug": "adjoint-matrix"
              },
              {
                "name": "Inverse of Matrix Using Adjoint (A⁻¹ = adj(A)/|A|)",
                "slug": "inverse-adjoint"
              },
              {
                "name": "Rank of a Matrix",
                "slug": "matrix-rank"
              },
              {
                "name": "System of Equations — Consistent and Inconsistent",
                "slug": "system-consistency"
              },
              {
                "name": "Cramer's Rule",
                "slug": "cramers-rule"
              },
              {
                "name": "Solving 3×3 System by Inverse Method",
                "slug": "inverse-method-system"
              }
            ]
          },
          {
            "name": "Continuity and Differentiability",
            "slug": "continuity-differentiability",
            "topics": [
              {
                "name": "Continuity at a Point — Definition",
                "slug": "continuity-def"
              },
              {
                "name": "Continuity from Left and Right",
                "slug": "continuity-left-right"
              },
              {
                "name": "Continuity of Common Functions",
                "slug": "continuity-common"
              },
              {
                "name": "Types of Discontinuities — Removable, Jump, Infinite",
                "slug": "discontinuity-types"
              },
              {
                "name": "Continuity on Closed Interval",
                "slug": "continuity-interval"
              },
              {
                "name": "Differentiability at a Point",
                "slug": "differentiability"
              },
              {
                "name": "Relation Between Continuity and Differentiability",
                "slug": "cont-diff-relation"
              },
              {
                "name": "Derivatives of Exponential Functions",
                "slug": "exp-derivatives"
              },
              {
                "name": "Derivatives of Logarithmic Functions",
                "slug": "log-derivatives"
              },
              {
                "name": "Derivatives of Inverse Trig Functions",
                "slug": "inv-trig-derivatives"
              }
            ]
          },
          {
            "name": "Application of Derivatives",
            "slug": "application-derivatives",
            "topics": [
              {
                "name": "Rate of Change of Quantities",
                "slug": "rate-of-change"
              },
              {
                "name": "Slope of Tangent and Normal",
                "slug": "slope-tangent-normal"
              },
              {
                "name": "Equation of Tangent",
                "slug": "equation-tangent"
              },
              {
                "name": "Equation of Normal",
                "slug": "equation-normal"
              },
              {
                "name": "Angle of Intersection of Two Curves",
                "slug": "angle-intersection-curves"
              },
              {
                "name": "Orthogonal Curves",
                "slug": "orthogonal-curves"
              },
              {
                "name": "Increasing and Decreasing Functions — Test",
                "slug": "increasing-decreasing"
              },
              {
                "name": "Monotonicity in Interval",
                "slug": "monotonicity"
              },
              {
                "name": "Critical Points",
                "slug": "critical-points"
              },
              {
                "name": "First Derivative Test for Extrema",
                "slug": "first-derivative-test"
              }
            ]
          },
          {
            "name": "Integrals",
            "slug": "integrals",
            "topics": [
              {
                "name": "Integration as Anti-Differentiation",
                "slug": "anti-diff"
              },
              {
                "name": "Standard Integrals — Power, Trig, Exp, Log",
                "slug": "standard-integrals"
              },
              {
                "name": "Integration by Substitution",
                "slug": "substitution"
              },
              {
                "name": "Integration of sin^m(x)·cos^n(x) forms",
                "slug": "sinm-cosn-forms"
              },
              {
                "name": "Integration Using Partial Fractions (All Cases)",
                "slug": "partial-fractions-all"
              },
              {
                "name": "Integration by Parts (ILATE)",
                "slug": "integration-by-parts"
              },
              {
                "name": "Special Integrals — ∫√(a²-x²)dx, ∫√(a²+x²)dx",
                "slug": "special-integrals"
              },
              {
                "name": "Integration of Rational Functions",
                "slug": "rational-integrals"
              },
              {
                "name": "Reduction Formulae",
                "slug": "reduction-formulae"
              },
              {
                "name": "Definite Integrals — Riemann Sum",
                "slug": "definite-riemann"
              }
            ]
          },
          {
            "name": "Application of Integrals",
            "slug": "application-integrals",
            "topics": [
              {
                "name": "Area Under Curve Using Definite Integral",
                "slug": "area-under-curve"
              },
              {
                "name": "Area Between Two Curves",
                "slug": "area-two-curves"
              },
              {
                "name": "Area Bounded by Parabola and Line",
                "slug": "area-parabola-line"
              },
              {
                "name": "Area Bounded by Circle",
                "slug": "area-circle"
              },
              {
                "name": "Area Using Horizontal and Vertical Strips",
                "slug": "horizontal-vertical-strips"
              }
            ]
          },
          {
            "name": "Differential Equations",
            "slug": "differential-equations",
            "topics": [
              {
                "name": "Ordinary Differential Equations — Order and Degree",
                "slug": "ode-order-degree"
              },
              {
                "name": "Formation of Differential Equation",
                "slug": "de-formation"
              },
              {
                "name": "Variable Separable Method",
                "slug": "variable-separable-de"
              },
              {
                "name": "Homogeneous Differential Equations",
                "slug": "homogeneous-de"
              },
              {
                "name": "Linear DE of First Order — dy/dx + Py = Q",
                "slug": "linear-de-first"
              },
              {
                "name": "Integrating Factor",
                "slug": "integrating-factor"
              },
              {
                "name": "Bernoulli's Equation",
                "slug": "bernoulli-de"
              },
              {
                "name": "Applications — Growth and Decay",
                "slug": "growth-decay"
              },
              {
                "name": "Applications — Newton's Law of Cooling",
                "slug": "cooling-de"
              },
              {
                "name": "Applications — Population Models",
                "slug": "population-de"
              }
            ]
          },
          {
            "name": "Vector Algebra",
            "slug": "vector-algebra",
            "topics": [
              {
                "name": "Vectors — Definition and Types",
                "slug": "vector-types"
              },
              {
                "name": "Addition of Vectors — Triangle and Parallelogram Law",
                "slug": "vector-addition-laws"
              },
              {
                "name": "Subtraction of Vectors",
                "slug": "vector-subtraction"
              },
              {
                "name": "Scalar Multiplication",
                "slug": "vector-scalar-mult"
              },
              {
                "name": "Position Vector",
                "slug": "position-vector"
              },
              {
                "name": "Components of Vector (i, j, k)",
                "slug": "vector-components"
              },
              {
                "name": "Magnitude of Vector",
                "slug": "vector-magnitude"
              },
              {
                "name": "Unit Vector",
                "slug": "unit-vector"
              },
              {
                "name": "Section Formula — Internal and External",
                "slug": "section-formula"
              },
              {
                "name": "Dot Product — Definition (a·b = |a||b|cosθ)",
                "slug": "dot-product-def"
              }
            ]
          },
          {
            "name": "Three Dimensional Geometry",
            "slug": "3d-geometry",
            "topics": [
              {
                "name": "Direction Cosines (l, m, n) and Properties",
                "slug": "direction-cosines"
              },
              {
                "name": "Direction Ratios and Conversion",
                "slug": "direction-ratios"
              },
              {
                "name": "Angle Between Two Lines using DC/DR",
                "slug": "angle-using-dc"
              },
              {
                "name": "Equation of Line — Vector Form",
                "slug": "line-vector"
              },
              {
                "name": "Equation of Line — Symmetric/Cartesian Form",
                "slug": "line-cartesian"
              },
              {
                "name": "Passing Through Two Points",
                "slug": "line-two-points"
              },
              {
                "name": "Angle Between Two Lines",
                "slug": "angle-two-lines-3d"
              },
              {
                "name": "Distance Between Point and Line",
                "slug": "point-line-3d"
              },
              {
                "name": "Skew Lines — Shortest Distance",
                "slug": "skew-shortest-distance"
              },
              {
                "name": "Distance Between Parallel Lines",
                "slug": "parallel-lines-3d"
              }
            ]
          },
          {
            "name": "Linear Programming",
            "slug": "linear-programming",
            "topics": [
              {
                "name": "LPP — Formulation from Word Problems",
                "slug": "lpp-formulation"
              },
              {
                "name": "Corner Point Method",
                "slug": "corner-point-method"
              },
              {
                "name": "Bounded and Unbounded Feasible Region",
                "slug": "feasible-region-types"
              },
              {
                "name": "Optimal Solution",
                "slug": "optimal-solution"
              },
              {
                "name": "Problems — Diet, Allocation, Transport",
                "slug": "lpp-problem-types"
              },
              {
                "name": "No Optimal Solution Case",
                "slug": "no-optimal-solution"
              }
            ]
          },
          {
            "name": "Probability",
            "slug": "probability-12",
            "topics": [
              {
                "name": "Conditional Probability — Definition and Formula",
                "slug": "conditional-prob"
              },
              {
                "name": "Properties of Conditional Probability",
                "slug": "conditional-properties"
              },
              {
                "name": "Multiplication Theorem (P(A∩B) = P(A)·P(B|A))",
                "slug": "multiplication-theorem"
              },
              {
                "name": "Independent Events — Condition",
                "slug": "independent-events"
              },
              {
                "name": "Total Probability Theorem",
                "slug": "total-probability"
              },
              {
                "name": "Bayes' Theorem",
                "slug": "bayes-theorem"
              },
              {
                "name": "Partition of Sample Space",
                "slug": "partition-sample-space"
              },
              {
                "name": "Random Variable — Discrete and Continuous",
                "slug": "random-variable"
              },
              {
                "name": "Probability Distribution Table",
                "slug": "prob-distribution-table"
              },
              {
                "name": "Mean (Expected Value) of RV",
                "slug": "mean-rv"
              }
            ]
          }
        ]
      }
    ]
  },
  "jee-advanced": {
    "name": "JEE Advanced",
    "subjects": [
      {
        "name": "Physics",
        "slug": "physics",
        "chapters": [
          {
            "name": "Physical World",
            "slug": "physical-world",
            "topics": [
              {
                "name": "Physics and Its Scope",
                "slug": "physics-scope"
              },
              {
                "name": "Fundamental Forces — Gravitational, Electromagnetic, Strong, Weak",
                "slug": "fundamental-forces"
              },
              {
                "name": "Nature of Physical Laws",
                "slug": "physical-laws"
              }
            ]
          },
          {
            "name": "Units and Measurements",
            "slug": "units-and-measurements",
            "topics": [
              {
                "name": "Physical Quantities — Fundamental and Derived",
                "slug": "fundamental-derived"
              },
              {
                "name": "SI Units and Their Definitions",
                "slug": "si-units"
              },
              {
                "name": "Dimensional Formula and Dimensional Equation",
                "slug": "dimensional-formula"
              },
              {
                "name": "Dimensional Analysis — Checking Consistency",
                "slug": "dimensional-consistency"
              },
              {
                "name": "Dimensional Analysis — Deriving Relations",
                "slug": "dimensional-deriving"
              },
              {
                "name": "Dimensional Analysis — Conversion of Units",
                "slug": "dimensional-conversion"
              },
              {
                "name": "Significant Figures and Rules",
                "slug": "significant-figures"
              },
              {
                "name": "Rounding Off Numbers",
                "slug": "rounding-off"
              },
              {
                "name": "Types of Errors — Systematic and Random",
                "slug": "error-types"
              },
              {
                "name": "Absolute, Relative and Percentage Error",
                "slug": "absolute-relative-error"
              }
            ]
          },
          {
            "name": "Motion in a Straight Line",
            "slug": "motion-straight-line",
            "topics": [
              {
                "name": "Position, Path Length and Displacement",
                "slug": "position-displacement"
              },
              {
                "name": "Average Velocity and Instantaneous Velocity",
                "slug": "velocity-types"
              },
              {
                "name": "Average Acceleration and Instantaneous Acceleration",
                "slug": "acceleration-types"
              },
              {
                "name": "Uniformly Accelerated Motion",
                "slug": "uniformly-accelerated"
              },
              {
                "name": "Kinematic Equations (v=u+at, s=ut+½at², v²=u²+2as)",
                "slug": "kinematic-equations"
              },
              {
                "name": "x-t, v-t and a-t Graphs — Analysis",
                "slug": "motion-graphs"
              },
              {
                "name": "Area under v-t Graph (Displacement)",
                "slug": "area-vt-graph"
              },
              {
                "name": "Free Fall and Motion Under Gravity",
                "slug": "free-fall"
              },
              {
                "name": "Reaction Time",
                "slug": "reaction-time"
              },
              {
                "name": "Relative Motion in 1D",
                "slug": "relative-motion-1d"
              }
            ]
          },
          {
            "name": "Motion in a Plane",
            "slug": "motion-plane",
            "topics": [
              {
                "name": "Scalars and Vectors — Definitions and Types",
                "slug": "scalars-vectors"
              },
              {
                "name": "Vector Addition — Triangle Law and Parallelogram Law",
                "slug": "vector-addition-laws"
              },
              {
                "name": "Resolution of Vectors into Components",
                "slug": "vector-resolution"
              },
              {
                "name": "Unit Vector and Position Vector",
                "slug": "unit-position-vector"
              },
              {
                "name": "Dot Product — Definition, Formula and Properties",
                "slug": "dot-product"
              },
              {
                "name": "Cross Product — Definition, Formula and Properties",
                "slug": "cross-product"
              },
              {
                "name": "Projectile Motion — Derivations (ToF, Range, Hmax)",
                "slug": "projectile-tof-range"
              },
              {
                "name": "Equation of Trajectory",
                "slug": "trajectory-equation"
              },
              {
                "name": "Projectile on Inclined Plane",
                "slug": "projectile-inclined"
              },
              {
                "name": "Uniform Circular Motion — Angular Quantities",
                "slug": "ucm-angular"
              }
            ]
          },
          {
            "name": "Laws of Motion",
            "slug": "laws-of-motion",
            "topics": [
              {
                "name": "Aristotle's Fallacy and Galileo's Law of Inertia",
                "slug": "aristotle-galileo"
              },
              {
                "name": "Newton's First Law — Inertia and Its Types",
                "slug": "first-law-inertia"
              },
              {
                "name": "Newton's Second Law — F = ma",
                "slug": "second-law-fma"
              },
              {
                "name": "Newton's Third Law and Action-Reaction Pairs",
                "slug": "third-law"
              },
              {
                "name": "Impulse and Impulsive Force",
                "slug": "impulse"
              },
              {
                "name": "Law of Conservation of Linear Momentum",
                "slug": "conservation-momentum"
              },
              {
                "name": "Free Body Diagram (FBD)",
                "slug": "fbd"
              },
              {
                "name": "Normal Force, Tension and Spring Force",
                "slug": "normal-tension-spring"
              },
              {
                "name": "Friction — Static, Kinetic and Rolling",
                "slug": "friction-types"
              },
              {
                "name": "Coefficient of Friction, Angle of Friction and Repose",
                "slug": "friction-coefficients"
              }
            ]
          },
          {
            "name": "Work, Energy and Power",
            "slug": "work-energy-power",
            "topics": [
              {
                "name": "Work Done by Constant and Variable Force",
                "slug": "work-constant-variable"
              },
              {
                "name": "Work-Energy Theorem",
                "slug": "work-energy-theorem"
              },
              {
                "name": "Kinetic Energy",
                "slug": "kinetic-energy"
              },
              {
                "name": "Gravitational Potential Energy",
                "slug": "gravitational-pe"
              },
              {
                "name": "Elastic Potential Energy in Spring (½kx²)",
                "slug": "spring-pe"
              },
              {
                "name": "Conservative and Non-Conservative Forces",
                "slug": "conservative-forces"
              },
              {
                "name": "Conservation of Mechanical Energy",
                "slug": "conservation-mech-energy"
              },
              {
                "name": "Power — Average and Instantaneous",
                "slug": "power-avg-inst"
              },
              {
                "name": "Collisions — Elastic and Inelastic in 1D",
                "slug": "elastic-inelastic-1d"
              },
              {
                "name": "Oblique Collisions (2D)",
                "slug": "oblique-collisions"
              }
            ]
          },
          {
            "name": "System of Particles and Rotational Motion",
            "slug": "rotational-motion",
            "topics": [
              {
                "name": "Centre of Mass — Discrete and Continuous Systems",
                "slug": "centre-of-mass"
              },
              {
                "name": "COM of Standard Bodies (Rod, Disc, Sphere, Cone, Triangle)",
                "slug": "com-standard-bodies"
              },
              {
                "name": "Motion of Centre of Mass",
                "slug": "com-motion"
              },
              {
                "name": "Angular Displacement, Velocity and Acceleration",
                "slug": "angular-kinematics"
              },
              {
                "name": "Equations of Rotational Motion",
                "slug": "rotational-equations"
              },
              {
                "name": "Torque — Definition and τ = Iα",
                "slug": "torque"
              },
              {
                "name": "Moment of Inertia — Definition and Physical Significance",
                "slug": "moi-definition"
              },
              {
                "name": "MI of Standard Bodies — Rod, Ring, Disc, Sphere, Cylinder",
                "slug": "moi-standard-bodies"
              },
              {
                "name": "Theorem of Parallel Axes",
                "slug": "parallel-axis-theorem"
              },
              {
                "name": "Theorem of Perpendicular Axes",
                "slug": "perpendicular-axis-theorem"
              }
            ]
          },
          {
            "name": "Gravitation",
            "slug": "gravitation",
            "topics": [
              {
                "name": "Kepler's Laws of Planetary Motion",
                "slug": "keplers-laws"
              },
              {
                "name": "Newton's Universal Law of Gravitation",
                "slug": "newtons-gravitation"
              },
              {
                "name": "Acceleration Due to Gravity (g) on Earth's Surface",
                "slug": "g-surface"
              },
              {
                "name": "Variation of g with Altitude",
                "slug": "g-altitude"
              },
              {
                "name": "Variation of g with Depth",
                "slug": "g-depth"
              },
              {
                "name": "Variation of g with Latitude and Rotation of Earth",
                "slug": "g-latitude-rotation"
              },
              {
                "name": "Gravitational Field Intensity",
                "slug": "gravitational-field"
              },
              {
                "name": "Gravitational Potential",
                "slug": "gravitational-potential"
              },
              {
                "name": "Gravitational Potential Energy",
                "slug": "gravitational-pe"
              },
              {
                "name": "Escape Velocity",
                "slug": "escape-velocity"
              }
            ]
          },
          {
            "name": "Mechanical Properties of Solids",
            "slug": "mechanical-properties-solids",
            "topics": [
              {
                "name": "Elasticity and Plasticity",
                "slug": "elasticity-plasticity"
              },
              {
                "name": "Types of Stress — Tensile, Compressive, Shear, Bulk",
                "slug": "stress-types"
              },
              {
                "name": "Types of Strain — Longitudinal, Shear, Volumetric",
                "slug": "strain-types"
              },
              {
                "name": "Stress-Strain Curve — Elastic Limit, Yield Point, UTS",
                "slug": "stress-strain-curve"
              },
              {
                "name": "Hooke's Law",
                "slug": "hookes-law"
              },
              {
                "name": "Young's Modulus — Definition and Numericals",
                "slug": "youngs-modulus"
              },
              {
                "name": "Bulk Modulus — Definition and Compressibility",
                "slug": "bulk-modulus"
              },
              {
                "name": "Shear Modulus (Modulus of Rigidity)",
                "slug": "shear-modulus"
              },
              {
                "name": "Poisson's Ratio",
                "slug": "poissons-ratio"
              },
              {
                "name": "Relations Among Elastic Constants",
                "slug": "elastic-constants-relation"
              }
            ]
          },
          {
            "name": "Mechanical Properties of Fluids",
            "slug": "mechanical-properties-fluids",
            "topics": [
              {
                "name": "Pressure — Thrust and Pressure in Fluid",
                "slug": "pressure-fluid"
              },
              {
                "name": "Pascal's Law and Its Applications",
                "slug": "pascals-law"
              },
              {
                "name": "Atmospheric Pressure — Gauge and Absolute",
                "slug": "atmospheric-gauge"
              },
              {
                "name": "Archimedes' Principle",
                "slug": "archimedes-principle"
              },
              {
                "name": "Buoyancy, Apparent Weight and Law of Floatation",
                "slug": "buoyancy-floatation"
              },
              {
                "name": "Equation of Continuity (A₁v₁ = A₂v₂)",
                "slug": "continuity-equation"
              },
              {
                "name": "Bernoulli's Theorem — Derivation and Applications",
                "slug": "bernoullis-theorem"
              },
              {
                "name": "Venturimeter and Pitot Tube",
                "slug": "venturimeter-pitot"
              },
              {
                "name": "Torricelli's Theorem and Speed of Efflux",
                "slug": "torricelli-efflux"
              },
              {
                "name": "Dynamic Lift — Magnus Effect, Aerofoil",
                "slug": "dynamic-lift"
              }
            ]
          },
          {
            "name": "Thermal Properties of Matter",
            "slug": "thermal-properties",
            "topics": [
              {
                "name": "Temperature Scales — Celsius, Kelvin, Fahrenheit",
                "slug": "temperature-scales"
              },
              {
                "name": "Thermal Expansion of Solids — α (Linear), β (Superficial), γ (Volumetric)",
                "slug": "expansion-solids"
              },
              {
                "name": "Thermal Expansion of Liquids — Absolute and Apparent",
                "slug": "expansion-liquids"
              },
              {
                "name": "Anomalous Expansion of Water",
                "slug": "anomalous-expansion"
              },
              {
                "name": "Thermal Expansion of Gases",
                "slug": "expansion-gases"
              },
              {
                "name": "Specific Heat Capacity and Heat Capacity",
                "slug": "specific-heat"
              },
              {
                "name": "Calorimetry — Principle and Numericals",
                "slug": "calorimetry"
              },
              {
                "name": "Latent Heat of Fusion and Vaporisation",
                "slug": "latent-heat"
              },
              {
                "name": "Heating and Cooling Curves",
                "slug": "heating-cooling-curve"
              },
              {
                "name": "Change of State — Melting, Boiling, Sublimation",
                "slug": "change-of-state"
              }
            ]
          },
          {
            "name": "Thermodynamics",
            "slug": "thermodynamics",
            "topics": [
              {
                "name": "Thermodynamic System — Types and State Variables",
                "slug": "system-state-variables"
              },
              {
                "name": "Zeroth Law and Thermal Equilibrium",
                "slug": "zeroth-law"
              },
              {
                "name": "Internal Energy",
                "slug": "internal-energy"
              },
              {
                "name": "First Law — ΔU = Q - W (Both Sign Conventions)",
                "slug": "first-law"
              },
              {
                "name": "Work Done by Gas — PV Diagram Analysis",
                "slug": "work-pv-diagram"
              },
              {
                "name": "Isothermal Process",
                "slug": "isothermal"
              },
              {
                "name": "Adiabatic Process — γ, Relations and Equations",
                "slug": "adiabatic"
              },
              {
                "name": "Isochoric Process",
                "slug": "isochoric"
              },
              {
                "name": "Isobaric Process",
                "slug": "isobaric"
              },
              {
                "name": "Polytropic Process",
                "slug": "polytropic"
              }
            ]
          },
          {
            "name": "Kinetic Theory",
            "slug": "kinetic-theory",
            "topics": [
              {
                "name": "Molecular Nature of Matter",
                "slug": "molecular-nature"
              },
              {
                "name": "Assumptions of Kinetic Theory of Gases",
                "slug": "kinetic-assumptions"
              },
              {
                "name": "Pressure Exerted by an Ideal Gas",
                "slug": "pressure-ideal-gas"
              },
              {
                "name": "Kinetic Interpretation of Temperature",
                "slug": "temperature-kinetic"
              },
              {
                "name": "RMS Speed (vrms)",
                "slug": "rms-speed"
              },
              {
                "name": "Mean Speed (v̄)",
                "slug": "mean-speed"
              },
              {
                "name": "Most Probable Speed (vp)",
                "slug": "most-probable-speed"
              },
              {
                "name": "Ratio of Speeds — vp : v̄ : vrms",
                "slug": "speed-ratios"
              },
              {
                "name": "Maxwell's Distribution of Speeds",
                "slug": "maxwell-distribution"
              },
              {
                "name": "Degrees of Freedom",
                "slug": "degrees-of-freedom"
              }
            ]
          },
          {
            "name": "Oscillations",
            "slug": "oscillations",
            "topics": [
              {
                "name": "Periodic and Oscillatory Motion",
                "slug": "periodic-oscillatory"
              },
              {
                "name": "SHM — Definition and Examples",
                "slug": "shm-definition"
              },
              {
                "name": "SHM — Differential Equation (d²x/dt² = -ω²x)",
                "slug": "shm-diff-equation"
              },
              {
                "name": "Displacement, Velocity and Acceleration in SHM",
                "slug": "shm-dva"
              },
              {
                "name": "Phase — Initial Phase and Phase Difference",
                "slug": "shm-phase"
              },
              {
                "name": "KE and PE in SHM",
                "slug": "ke-pe-shm"
              },
              {
                "name": "Total Energy in SHM (E = ½mω²A²)",
                "slug": "total-energy-shm"
              },
              {
                "name": "Spring-Mass System — T = 2π√(m/k)",
                "slug": "spring-mass-system"
              },
              {
                "name": "Springs in Series and Parallel",
                "slug": "springs-combinations"
              },
              {
                "name": "Simple Pendulum — T = 2π√(L/g)",
                "slug": "simple-pendulum"
              }
            ]
          },
          {
            "name": "Waves",
            "slug": "waves",
            "topics": [
              {
                "name": "Transverse and Longitudinal Waves",
                "slug": "transverse-longitudinal"
              },
              {
                "name": "Wave Parameters — Amplitude, Wavelength, Frequency, Period",
                "slug": "wave-parameters"
              },
              {
                "name": "Wave Equation — y = A sin(kx - ωt)",
                "slug": "wave-equation"
              },
              {
                "name": "Speed of Transverse Wave in String (v = √T/μ)",
                "slug": "speed-string"
              },
              {
                "name": "Speed of Longitudinal Wave in Medium",
                "slug": "speed-longitudinal"
              },
              {
                "name": "Speed of Sound — Newton and Laplace Formula",
                "slug": "speed-sound"
              },
              {
                "name": "Intensity of Wave (I ∝ A²)",
                "slug": "wave-intensity"
              },
              {
                "name": "Principle of Superposition of Waves",
                "slug": "superposition"
              },
              {
                "name": "Reflection at Fixed End (Phase Change) and Free End",
                "slug": "wave-reflection"
              },
              {
                "name": "Standing Waves — Condition and Formation",
                "slug": "standing-waves"
              }
            ]
          },
          {
            "name": "Electric Charges and Fields",
            "slug": "electric-charges-fields",
            "topics": [
              {
                "name": "Electric Charge — Properties and Conservation",
                "slug": "charge-properties"
              },
              {
                "name": "Conductors, Insulators and Semiconductors",
                "slug": "conductors-insulators"
              },
              {
                "name": "Methods of Charging — Friction, Conduction, Induction",
                "slug": "charging-methods"
              },
              {
                "name": "Coulomb's Law in Free Space and Medium",
                "slug": "coulombs-law"
              },
              {
                "name": "Superposition Principle for Multiple Charges",
                "slug": "superposition-principle"
              },
              {
                "name": "Electric Field — Definition and Formula",
                "slug": "electric-field-def"
              },
              {
                "name": "Electric Field due to Point Charge",
                "slug": "field-point-charge"
              },
              {
                "name": "Electric Field Lines — Properties",
                "slug": "field-lines"
              },
              {
                "name": "Electric Dipole — Definition and Dipole Moment",
                "slug": "electric-dipole"
              },
              {
                "name": "Field on Axial Line of Dipole",
                "slug": "field-axial-dipole"
              }
            ]
          },
          {
            "name": "Electrostatic Potential and Capacitance",
            "slug": "electrostatic-potential-capacitance",
            "topics": [
              {
                "name": "Electric Potential — Definition, Unit and Formula",
                "slug": "potential-definition"
              },
              {
                "name": "Relation Between E and V (E = -dV/dr)",
                "slug": "e-v-relation"
              },
              {
                "name": "Potential due to Point Charge",
                "slug": "potential-point"
              },
              {
                "name": "Potential due to Electric Dipole — Axial and Equatorial",
                "slug": "potential-dipole"
              },
              {
                "name": "Potential due to System of Charges",
                "slug": "potential-system"
              },
              {
                "name": "Equipotential Surfaces — Properties and Examples",
                "slug": "equipotential-surfaces"
              },
              {
                "name": "Potential Energy of System of Charges",
                "slug": "pe-system-charges"
              },
              {
                "name": "Potential Energy of Dipole in External Field",
                "slug": "pe-dipole-field"
              },
              {
                "name": "Conductors in Electrostatic Equilibrium",
                "slug": "conductors-equilibrium"
              },
              {
                "name": "Dielectrics — Polar and Non-Polar",
                "slug": "dielectrics-types"
              }
            ]
          },
          {
            "name": "Current Electricity",
            "slug": "current-electricity",
            "topics": [
              {
                "name": "Electric Current and Conventional Current",
                "slug": "electric-current"
              },
              {
                "name": "Drift Velocity and Mobility",
                "slug": "drift-velocity-mobility"
              },
              {
                "name": "Relation Between Current and Drift Velocity",
                "slug": "current-drift-relation"
              },
              {
                "name": "Ohm's Law — Statement and Limitations",
                "slug": "ohms-law"
              },
              {
                "name": "Resistance — Definition, Resistivity and Conductivity",
                "slug": "resistance-resistivity"
              },
              {
                "name": "Variation of Resistance with Temperature — α",
                "slug": "resistance-temperature"
              },
              {
                "name": "Colour Code for Resistors",
                "slug": "colour-code"
              },
              {
                "name": "Resistors in Series",
                "slug": "resistors-series"
              },
              {
                "name": "Resistors in Parallel",
                "slug": "resistors-parallel"
              },
              {
                "name": "Kirchhoff's Current Law (KCL / Junction Rule)",
                "slug": "kcl"
              }
            ]
          },
          {
            "name": "Moving Charges and Magnetism",
            "slug": "moving-charges-magnetism",
            "topics": [
              {
                "name": "Magnetic Field — Concept, Biot-Savart Law",
                "slug": "biot-savart-law"
              },
              {
                "name": "Magnetic Field due to Straight Finite and Infinite Wire",
                "slug": "field-wire"
              },
              {
                "name": "Magnetic Field on Axis of Circular Current Loop",
                "slug": "field-circular-loop"
              },
              {
                "name": "Ampere's Circuital Law",
                "slug": "amperes-law"
              },
              {
                "name": "Magnetic Field Inside Solenoid",
                "slug": "field-solenoid"
              },
              {
                "name": "Magnetic Field of Toroid",
                "slug": "field-toroid"
              },
              {
                "name": "Force on Moving Charge in Magnetic Field (F = qv × B)",
                "slug": "force-charge"
              },
              {
                "name": "Motion of Charged Particle — Circle, Helix",
                "slug": "particle-motion"
              },
              {
                "name": "Cyclotron — Principle, Working and Limitations",
                "slug": "cyclotron"
              },
              {
                "name": "Force on Current-Carrying Conductor in B",
                "slug": "force-conductor"
              }
            ]
          },
          {
            "name": "Magnetism and Matter",
            "slug": "magnetism-matter",
            "topics": [
              {
                "name": "Bar Magnet — Properties and Pole Strength",
                "slug": "bar-magnet"
              },
              {
                "name": "Axial Field of Bar Magnet",
                "slug": "magnet-axial-field"
              },
              {
                "name": "Equatorial Field of Bar Magnet",
                "slug": "magnet-equatorial-field"
              },
              {
                "name": "Torque on Magnetic Dipole in Uniform B",
                "slug": "magnet-torque"
              },
              {
                "name": "Potential Energy of Dipole in B",
                "slug": "dipole-pe"
              },
              {
                "name": "Gauss's Law for Magnetism",
                "slug": "gauss-magnetism"
              },
              {
                "name": "Bar Magnet as Equivalent Solenoid",
                "slug": "magnet-solenoid-equiv"
              },
              {
                "name": "Earth's Magnetic Field — Components (BH, BV, δ, I)",
                "slug": "earth-field-components"
              },
              {
                "name": "Magnetic Properties — I, H, χ, μ",
                "slug": "magnetic-properties"
              },
              {
                "name": "Diamagnetic Materials",
                "slug": "diamagnetic"
              }
            ]
          },
          {
            "name": "Electromagnetic Induction",
            "slug": "em-induction",
            "topics": [
              {
                "name": "Magnetic Flux (Φ = B·A cosθ)",
                "slug": "magnetic-flux"
              },
              {
                "name": "Faraday's First and Second Laws of Induction",
                "slug": "faradays-laws"
              },
              {
                "name": "Lenz's Law and Conservation of Energy",
                "slug": "lenzs-law"
              },
              {
                "name": "Motional EMF (ε = Bvl)",
                "slug": "motional-emf"
              },
              {
                "name": "EMF in Rotating Coil",
                "slug": "rotating-coil-emf"
              },
              {
                "name": "Eddy Currents — Causes, Effects and Uses",
                "slug": "eddy-currents"
              },
              {
                "name": "Self-Inductance (L) and Self-Induced EMF",
                "slug": "self-inductance"
              },
              {
                "name": "Self-Inductance of Solenoid (L = μ₀n²V)",
                "slug": "self-inductance-solenoid"
              },
              {
                "name": "Mutual Inductance (M) and Mutually Induced EMF",
                "slug": "mutual-inductance"
              },
              {
                "name": "Coefficient of Coupling",
                "slug": "coupling-coefficient"
              }
            ]
          },
          {
            "name": "Alternating Current",
            "slug": "alternating-current",
            "topics": [
              {
                "name": "AC Voltage — Amplitude, Angular Frequency, Phase",
                "slug": "ac-basics"
              },
              {
                "name": "Peak, RMS and Average Value",
                "slug": "ac-peak-rms-avg"
              },
              {
                "name": "AC through Pure Resistor",
                "slug": "ac-resistor"
              },
              {
                "name": "AC through Pure Inductor — Inductive Reactance (XL)",
                "slug": "ac-inductor"
              },
              {
                "name": "AC through Pure Capacitor — Capacitive Reactance (XC)",
                "slug": "ac-capacitor"
              },
              {
                "name": "Phasor Diagram — LR, RC and LC Circuits",
                "slug": "phasor-diagrams"
              },
              {
                "name": "Series RLC Circuit — Impedance Z",
                "slug": "series-rlc-impedance"
              },
              {
                "name": "Resonance in Series RLC — f₀ = 1/(2π√LC)",
                "slug": "series-resonance"
              },
              {
                "name": "Bandwidth and Quality Factor (Q)",
                "slug": "bandwidth-q-factor"
              },
              {
                "name": "Power in AC — Apparent, Real and Reactive Power",
                "slug": "power-ac-types"
              }
            ]
          },
          {
            "name": "Electromagnetic Waves",
            "slug": "em-waves",
            "topics": [
              {
                "name": "Need for Displacement Current — Limitation of Ampere's Law",
                "slug": "displacement-current-need"
              },
              {
                "name": "Displacement Current (Id = ε₀ dΦE/dt)",
                "slug": "displacement-current"
              },
              {
                "name": "Maxwell's Equations (Qualitative)",
                "slug": "maxwells-equations"
              },
              {
                "name": "EM Wave — Transverse Nature and Properties",
                "slug": "em-wave-properties"
              },
              {
                "name": "Speed of EM Waves (c = 1/√μ₀ε₀)",
                "slug": "em-wave-speed"
              },
              {
                "name": "Energy, Intensity and Momentum of EM Waves",
                "slug": "em-energy-momentum"
              },
              {
                "name": "EM Spectrum — Gamma, X-ray, UV, Visible, IR, Microwave, Radio",
                "slug": "em-spectrum-regions"
              },
              {
                "name": "Wavelength Range and Applications of Each Region",
                "slug": "em-spectrum-applications"
              }
            ]
          },
          {
            "name": "Ray Optics and Optical Instruments",
            "slug": "ray-optics",
            "topics": [
              {
                "name": "Reflection at Plane Mirror — Image Properties",
                "slug": "plane-mirror-image"
              },
              {
                "name": "Reflection at Spherical Mirror — Sign Convention",
                "slug": "spherical-mirror-convention"
              },
              {
                "name": "Mirror Formula (1/v + 1/u = 1/f)",
                "slug": "mirror-formula"
              },
              {
                "name": "Magnification by Spherical Mirror",
                "slug": "mirror-magnification"
              },
              {
                "name": "Refraction — Snell's Law",
                "slug": "snells-law"
              },
              {
                "name": "Refractive Index — Absolute and Relative",
                "slug": "refractive-index"
              },
              {
                "name": "Total Internal Reflection and Critical Angle",
                "slug": "tir-critical-angle"
              },
              {
                "name": "Applications of TIR — Optical Fibre, Diamond, Mirage",
                "slug": "tir-applications"
              },
              {
                "name": "Refraction at Spherical Surfaces",
                "slug": "refraction-spherical"
              },
              {
                "name": "Thin Lens Formula (1/v - 1/u = 1/f)",
                "slug": "thin-lens-formula"
              }
            ]
          },
          {
            "name": "Wave Optics",
            "slug": "wave-optics",
            "topics": [
              {
                "name": "Huygens' Principle",
                "slug": "huygens-principle"
              },
              {
                "name": "Coherent Sources",
                "slug": "coherent-sources"
              },
              {
                "name": "Young's Double Slit Experiment (YDSE) — Setup",
                "slug": "ydse-setup"
              },
              {
                "name": "Fringe Width β = λD/d",
                "slug": "fringe-width"
              },
              {
                "name": "Conditions for Bright and Dark Fringes",
                "slug": "bright-dark-fringes"
              },
              {
                "name": "Intensity Distribution in YDSE",
                "slug": "ydse-intensity"
              },
              {
                "name": "Effect of Thin Film in YDSE Path",
                "slug": "ydse-thin-film"
              },
              {
                "name": "Diffraction at Single Slit",
                "slug": "single-slit-diffraction"
              },
              {
                "name": "Width of Central Maximum (2λD/d)",
                "slug": "central-max-width"
              },
              {
                "name": "Resolving Power of Microscope and Telescope",
                "slug": "resolving-power"
              }
            ]
          },
          {
            "name": "Dual Nature of Radiation and Matter",
            "slug": "dual-nature",
            "topics": [
              {
                "name": "Photoelectric Effect — Discovery and Observations",
                "slug": "pe-discovery"
              },
              {
                "name": "Effect of Intensity, Frequency and Potential",
                "slug": "pe-effects"
              },
              {
                "name": "Failure of Classical Wave Theory",
                "slug": "wave-theory-failure"
              },
              {
                "name": "Einstein's Photoelectric Equation (Kmax = hν - φ)",
                "slug": "einsteins-equation"
              },
              {
                "name": "Work Function and Threshold Frequency",
                "slug": "work-function"
              },
              {
                "name": "Stopping Potential and Its Significance",
                "slug": "stopping-potential"
              },
              {
                "name": "de Broglie's Hypothesis (λ = h/mv)",
                "slug": "de-broglie-hypothesis"
              },
              {
                "name": "de Broglie Wavelength of Electron (λ = h/√2mK)",
                "slug": "de-broglie-electron"
              },
              {
                "name": "Davisson-Germer Experiment",
                "slug": "davisson-germer"
              },
              {
                "name": "Heisenberg's Uncertainty Principle (Δx·Δp ≥ h/4π)",
                "slug": "uncertainty-principle"
              }
            ]
          },
          {
            "name": "Atoms",
            "slug": "atoms",
            "topics": [
              {
                "name": "Thomson's Model and Its Failure",
                "slug": "thomson-model"
              },
              {
                "name": "Rutherford's α-Scattering Experiment",
                "slug": "alpha-scattering"
              },
              {
                "name": "Rutherford's Nuclear Model and Limitations",
                "slug": "rutherford-model"
              },
              {
                "name": "Bohr's Postulates",
                "slug": "bohr-postulates"
              },
              {
                "name": "Bohr's Radii (rn = n²a₀)",
                "slug": "bohr-radii"
              },
              {
                "name": "Bohr's Velocities (vn = v₀/n)",
                "slug": "bohr-velocities"
              },
              {
                "name": "Bohr's Energy Levels (En = -13.6/n² eV)",
                "slug": "bohr-energy-levels"
              },
              {
                "name": "Emission and Absorption Spectra",
                "slug": "emission-absorption"
              },
              {
                "name": "Hydrogen Spectral Series — Lyman, Balmer, Paschen, Brackett, Pfund",
                "slug": "spectral-series"
              },
              {
                "name": "Excitation Energy and Ionisation Energy",
                "slug": "excitation-ionisation"
              }
            ]
          },
          {
            "name": "Nuclei",
            "slug": "nuclei",
            "topics": [
              {
                "name": "Composition of Nucleus — Protons and Neutrons",
                "slug": "nucleus-composition"
              },
              {
                "name": "Atomic Mass Unit (amu) and Energy Equivalent",
                "slug": "amu-energy"
              },
              {
                "name": "Nuclear Size — R = R₀A^(1/3)",
                "slug": "nuclear-size"
              },
              {
                "name": "Nuclear Density",
                "slug": "nuclear-density"
              },
              {
                "name": "Mass Defect (Δm)",
                "slug": "mass-defect"
              },
              {
                "name": "Binding Energy (ΔmC²)",
                "slug": "binding-energy"
              },
              {
                "name": "Binding Energy per Nucleon — Graph and Significance",
                "slug": "be-nucleon-graph"
              },
              {
                "name": "Radioactivity — Discovery and Properties",
                "slug": "radioactivity"
              },
              {
                "name": "Alpha Decay — Equation and Q-Value",
                "slug": "alpha-decay"
              },
              {
                "name": "Beta Decay (β⁻ and β⁺) — Neutrino",
                "slug": "beta-decay"
              }
            ]
          },
          {
            "name": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
            "slug": "semiconductor-electronics",
            "topics": [
              {
                "name": "Energy Bands — Valence, Conduction, Band Gap",
                "slug": "energy-bands"
              },
              {
                "name": "Classification — Metals, Semiconductors, Insulators",
                "slug": "band-classification"
              },
              {
                "name": "Intrinsic Semiconductor — Electron-Hole Pair",
                "slug": "intrinsic-semiconductor"
              },
              {
                "name": "Extrinsic — n-Type Semiconductor (Donor Impurity)",
                "slug": "n-type"
              },
              {
                "name": "Extrinsic — p-Type Semiconductor (Acceptor Impurity)",
                "slug": "p-type"
              },
              {
                "name": "p-n Junction Formation and Depletion Layer",
                "slug": "pn-junction"
              },
              {
                "name": "Potential Barrier",
                "slug": "potential-barrier"
              },
              {
                "name": "Forward Bias and Reverse Bias",
                "slug": "forward-reverse-bias"
              },
              {
                "name": "I-V Characteristics of p-n Junction Diode",
                "slug": "diode-iv-char"
              },
              {
                "name": "Half-Wave Rectifier",
                "slug": "half-wave-rectifier"
              }
            ]
          }
        ]
      },
      {
        "name": "Chemistry",
        "slug": "chemistry",
        "chapters": [
          {
            "name": "Some Basic Concepts of Chemistry",
            "slug": "basic-concepts",
            "topics": [
              {
                "name": "Importance and Nature of Chemistry",
                "slug": "importance-chemistry"
              },
              {
                "name": "Laws of Chemical Combination",
                "slug": "laws-combination"
              },
              {
                "name": "Dalton's Atomic Theory",
                "slug": "daltons-theory"
              },
              {
                "name": "Atomic Mass and Molecular Mass",
                "slug": "atomic-molecular-mass"
              },
              {
                "name": "Mole Concept and Avogadro's Number",
                "slug": "mole-avogadro"
              },
              {
                "name": "Molar Mass",
                "slug": "molar-mass"
              },
              {
                "name": "Percentage Composition",
                "slug": "percentage-composition"
              },
              {
                "name": "Empirical Formula from Percentage Composition",
                "slug": "empirical-from-percent"
              },
              {
                "name": "Molecular Formula from Empirical Formula",
                "slug": "molecular-from-empirical"
              },
              {
                "name": "Stoichiometry and Mole-Mole Relationship",
                "slug": "stoichiometry"
              }
            ]
          },
          {
            "name": "Structure of Atom",
            "slug": "structure-of-atom",
            "topics": [
              {
                "name": "Discovery of Electron — Cathode Ray Experiment",
                "slug": "discovery-electron"
              },
              {
                "name": "Charge-to-Mass Ratio of Electron",
                "slug": "e-m-ratio"
              },
              {
                "name": "Millikan's Oil Drop Experiment — Charge of Electron",
                "slug": "millikan-experiment"
              },
              {
                "name": "Discovery of Proton and Neutron",
                "slug": "proton-neutron"
              },
              {
                "name": "Thomson's Plum Pudding Model",
                "slug": "thomson-model-chem"
              },
              {
                "name": "Rutherford's α-Scattering and Nuclear Model",
                "slug": "rutherford-chem"
              },
              {
                "name": "Atomic Number, Mass Number, Isotopes and Isobars",
                "slug": "atomic-number-isotopes"
              },
              {
                "name": "Electromagnetic Radiation — Wave Nature",
                "slug": "em-radiation-wave"
              },
              {
                "name": "Planck's Quantum Theory and Energy of Photon",
                "slug": "planck-theory"
              },
              {
                "name": "Photoelectric Effect",
                "slug": "photoelectric-chem"
              }
            ]
          },
          {
            "name": "Classification of Elements and Periodicity in Properties",
            "slug": "periodic-table",
            "topics": [
              {
                "name": "History — Döbereiner's Triads, Newlands' Law of Octaves",
                "slug": "history-triads-octaves"
              },
              {
                "name": "Mendeleev's Periodic Table and Its Limitations",
                "slug": "mendeleev-table"
              },
              {
                "name": "Modern Periodic Law and Long Form of Table",
                "slug": "modern-table"
              },
              {
                "name": "s, p, d, f Block Classification",
                "slug": "block-classification"
              },
              {
                "name": "Atomic Radius — Covalent, Metallic, Van der Waals",
                "slug": "atomic-radius-types"
              },
              {
                "name": "Trend of Atomic Radius in Period (Decreases)",
                "slug": "atomic-radius-period"
              },
              {
                "name": "Trend of Atomic Radius in Group (Increases)",
                "slug": "atomic-radius-group"
              },
              {
                "name": "Ionic Radius and Isoelectronic Species",
                "slug": "ionic-radius"
              },
              {
                "name": "Ionisation Enthalpy — Definition",
                "slug": "ie-def"
              },
              {
                "name": "Trends of IE in Period and Group",
                "slug": "ie-trends"
              }
            ]
          },
          {
            "name": "Chemical Bonding and Molecular Structure",
            "slug": "chemical-bonding",
            "topics": [
              {
                "name": "Kossel-Lewis Approach — Octet Rule",
                "slug": "octet-rule"
              },
              {
                "name": "Lewis Dot Structures",
                "slug": "lewis-dot"
              },
              {
                "name": "Exceptions to Octet Rule",
                "slug": "octet-exceptions"
              },
              {
                "name": "Formal Charge Calculation",
                "slug": "formal-charge"
              },
              {
                "name": "Ionic Bond — Formation and Conditions",
                "slug": "ionic-bond"
              },
              {
                "name": "Lattice Enthalpy and Born-Haber Cycle",
                "slug": "lattice-born-haber"
              },
              {
                "name": "Covalent Bond — σ and π Bonds",
                "slug": "sigma-pi-bonds"
              },
              {
                "name": "Bond Parameters — Length, Energy, Angle, Order",
                "slug": "bond-parameters"
              },
              {
                "name": "Polar Covalent Bond and Dipole Moment",
                "slug": "polar-dipole"
              },
              {
                "name": "Resonance Structures and Resonance Energy",
                "slug": "resonance"
              }
            ]
          },
          {
            "name": "States of Matter",
            "slug": "states-of-matter",
            "topics": [
              {
                "name": "Intermolecular Forces and Effect on State",
                "slug": "intermolecular-forces"
              },
              {
                "name": "Boyle's Law",
                "slug": "boyles-law"
              },
              {
                "name": "Charles's Law",
                "slug": "charless-law"
              },
              {
                "name": "Gay-Lussac's Law",
                "slug": "gay-lussac-law"
              },
              {
                "name": "Avogadro's Law and Molar Volume at STP",
                "slug": "avogadros-law"
              },
              {
                "name": "Ideal Gas Equation (PV = nRT)",
                "slug": "ideal-gas-eq"
              },
              {
                "name": "Dalton's Law of Partial Pressure",
                "slug": "daltons-partial-pressure"
              },
              {
                "name": "Kinetic Molecular Theory of Gases",
                "slug": "kmt"
              },
              {
                "name": "Molecular Speed Distribution — Maxwell",
                "slug": "maxwell-speed"
              },
              {
                "name": "RMS, Mean and Most Probable Speed",
                "slug": "speed-types"
              }
            ]
          },
          {
            "name": "Thermodynamics",
            "slug": "thermodynamics-chem",
            "topics": [
              {
                "name": "System, Surroundings — Open, Closed, Isolated",
                "slug": "system-types"
              },
              {
                "name": "Thermodynamic State Functions",
                "slug": "state-functions"
              },
              {
                "name": "Extensive and Intensive Properties",
                "slug": "extensive-intensive"
              },
              {
                "name": "Isothermal, Adiabatic, Isochoric, Isobaric Processes",
                "slug": "thermo-processes"
              },
              {
                "name": "Heat (q) and Work (w) — Sign Conventions",
                "slug": "heat-work-signs"
              },
              {
                "name": "First Law — ΔU = q + w",
                "slug": "first-law-chem"
              },
              {
                "name": "Enthalpy (H = U + pV)",
                "slug": "enthalpy"
              },
              {
                "name": "ΔH = ΔU + ΔngRT",
                "slug": "dh-du-relation"
              },
              {
                "name": "Standard Enthalpy of Formation (ΔfH°)",
                "slug": "standard-formation"
              },
              {
                "name": "Hess's Law of Constant Heat Summation",
                "slug": "hesss-law"
              }
            ]
          },
          {
            "name": "Equilibrium",
            "slug": "equilibrium",
            "topics": [
              {
                "name": "Physical and Chemical Equilibrium",
                "slug": "physical-chemical-eq"
              },
              {
                "name": "Law of Mass Action",
                "slug": "law-mass-action"
              },
              {
                "name": "Kc — Expression and Units",
                "slug": "kc-expression"
              },
              {
                "name": "Kp — Expression and Units",
                "slug": "kp-expression"
              },
              {
                "name": "Relation Between Kc and Kp (Kp = Kc(RT)^Δn)",
                "slug": "kc-kp-relation"
              },
              {
                "name": "Homogeneous and Heterogeneous Equilibrium",
                "slug": "homo-heterogeneous-eq"
              },
              {
                "name": "Characteristics of Equilibrium Constant",
                "slug": "k-characteristics"
              },
              {
                "name": "Reaction Quotient (Qc) and Direction of Reaction",
                "slug": "reaction-quotient"
              },
              {
                "name": "Le Chatelier's Principle",
                "slug": "le-chateliers"
              },
              {
                "name": "Effect of Concentration, Pressure, Temperature on K",
                "slug": "equilibrium-effects"
              }
            ]
          },
          {
            "name": "Redox Reactions",
            "slug": "redox-reactions",
            "topics": [
              {
                "name": "Oxidation and Reduction — Electronic Concept",
                "slug": "oxidation-reduction-def"
              },
              {
                "name": "Oxidation Number — Rules and Calculation",
                "slug": "oxidation-number-rules"
              },
              {
                "name": "Oxidising and Reducing Agents",
                "slug": "oxidising-reducing"
              },
              {
                "name": "Balancing by Oxidation Number Method",
                "slug": "ox-number-balancing"
              },
              {
                "name": "Half-Reaction Method — Acidic Medium",
                "slug": "half-reaction-acidic"
              },
              {
                "name": "Half-Reaction Method — Basic Medium",
                "slug": "half-reaction-basic"
              },
              {
                "name": "Types — Combination, Decomposition, Displacement, Disproportionation",
                "slug": "redox-types"
              },
              {
                "name": "Electrochemical Series and Standard Reduction Potential",
                "slug": "electrochemical-series"
              }
            ]
          },
          {
            "name": "Hydrogen",
            "slug": "hydrogen",
            "topics": [
              {
                "name": "Position of Hydrogen — Unique Character",
                "slug": "hydrogen-unique"
              },
              {
                "name": "Isotopes — Protium, Deuterium (D₂O), Tritium",
                "slug": "hydrogen-isotopes"
              },
              {
                "name": "Preparation of Hydrogen — Laboratory Methods",
                "slug": "hydrogen-lab-prep"
              },
              {
                "name": "Industrial Preparation — Steam Reforming",
                "slug": "hydrogen-industrial"
              },
              {
                "name": "Properties of Molecular Hydrogen",
                "slug": "hydrogen-properties"
              },
              {
                "name": "Hydrides — Ionic, Covalent, Metallic",
                "slug": "hydrides-types"
              },
              {
                "name": "Water — Structure and Unique Properties",
                "slug": "water-structure"
              },
              {
                "name": "Anomalous Expansion of Water",
                "slug": "water-anomalous"
              },
              {
                "name": "Hard Water — Temporary and Permanent",
                "slug": "hard-water"
              },
              {
                "name": "Removal of Hardness",
                "slug": "hardness-removal"
              }
            ]
          },
          {
            "name": "The s-Block Elements",
            "slug": "s-block",
            "topics": [
              {
                "name": "General Characteristics — Electronic Configuration, Properties",
                "slug": "s-block-general"
              },
              {
                "name": "Alkali Metals — Physical Properties and Trends",
                "slug": "alkali-physical"
              },
              {
                "name": "Alkali Metals — Chemical Properties",
                "slug": "alkali-chemical"
              },
              {
                "name": "Anomalous Behaviour of Lithium",
                "slug": "li-anomalous"
              },
              {
                "name": "Diagonal Relationship — Li and Mg",
                "slug": "li-mg-diagonal"
              },
              {
                "name": "NaOH — Preparation (Castner-Kellner) and Properties",
                "slug": "naoh"
              },
              {
                "name": "Na₂CO₃ — Solvay Process and Properties",
                "slug": "na2co3"
              },
              {
                "name": "NaHCO₃ and NaCl",
                "slug": "nahco3-nacl"
              },
              {
                "name": "Alkaline Earth Metals — Physical Properties",
                "slug": "ae-physical"
              },
              {
                "name": "Alkaline Earth Metals — Chemical Properties",
                "slug": "ae-chemical"
              }
            ]
          },
          {
            "name": "The p-Block Elements (Groups 13 and 14)",
            "slug": "p-block-11",
            "topics": [
              {
                "name": "Group 13 — General Properties and Trends",
                "slug": "group13-general"
              },
              {
                "name": "Boron — Allotropes, Structure and Properties",
                "slug": "boron-properties"
              },
              {
                "name": "Borax (Na₂B₄O₇) — Structure and Reactions",
                "slug": "borax"
              },
              {
                "name": "Boric Acid — Structure and Reactions",
                "slug": "boric-acid"
              },
              {
                "name": "Diborane — Structure and Preparation",
                "slug": "diborane"
              },
              {
                "name": "Aluminium — Properties and Reactions",
                "slug": "aluminium"
              },
              {
                "name": "Alums",
                "slug": "alums"
              },
              {
                "name": "Group 14 — General Properties and Trends",
                "slug": "group14-general"
              },
              {
                "name": "Catenation and Allotropy of Carbon",
                "slug": "catenation-allotropy"
              },
              {
                "name": "Diamond — Structure and Properties",
                "slug": "diamond"
              }
            ]
          },
          {
            "name": "Organic Chemistry: Some Basic Principles and Techniques",
            "slug": "organic-basics",
            "topics": [
              {
                "name": "Tetravalency of Carbon — Catenation",
                "slug": "tetravalency"
              },
              {
                "name": "Classification — Acyclic, Cyclic, Aromatic, Heterocyclic",
                "slug": "classification-organic"
              },
              {
                "name": "Functional Groups",
                "slug": "functional-groups"
              },
              {
                "name": "IUPAC Nomenclature — Alkanes",
                "slug": "iupac-alkanes"
              },
              {
                "name": "IUPAC Nomenclature — Alkenes and Alkynes",
                "slug": "iupac-alkenes-alkynes"
              },
              {
                "name": "IUPAC Nomenclature — Functional Group Compounds",
                "slug": "iupac-functional-groups"
              },
              {
                "name": "Chain, Position and Functional Group Isomerism",
                "slug": "structural-isomerism-types"
              },
              {
                "name": "Optical Isomerism — Chirality and Enantiomers",
                "slug": "optical-isomerism"
              },
              {
                "name": "R and S Configuration",
                "slug": "r-s-configuration"
              },
              {
                "name": "Geometrical Isomerism — cis-trans",
                "slug": "cis-trans-isomerism"
              }
            ]
          },
          {
            "name": "Hydrocarbons",
            "slug": "hydrocarbons",
            "topics": [
              {
                "name": "Alkanes — IUPAC Nomenclature and Isomers",
                "slug": "alkanes-nomenclature"
              },
              {
                "name": "Alkanes — Preparation",
                "slug": "alkanes-prep"
              },
              {
                "name": "Alkanes — Physical Properties",
                "slug": "alkanes-physical"
              },
              {
                "name": "Free Radical Halogenation — Mechanism and Selectivity",
                "slug": "free-radical-halogenation"
              },
              {
                "name": "Alkanes — Combustion",
                "slug": "alkanes-combustion"
              },
              {
                "name": "Alkenes — IUPAC and Structural Isomers",
                "slug": "alkenes-nomenclature"
              },
              {
                "name": "Alkenes — Preparation (Dehydration, Dehydrohalogenation)",
                "slug": "alkenes-prep"
              },
              {
                "name": "Mechanism of Electrophilic Addition",
                "slug": "eas-mechanism-alkenes"
              },
              {
                "name": "Markovnikov's Rule",
                "slug": "markovnikov-rule"
              },
              {
                "name": "Anti-Markovnikov (Peroxide Effect / HBr only)",
                "slug": "anti-markovnikov"
              }
            ]
          },
          {
            "name": "Environmental Chemistry",
            "slug": "environmental-chemistry",
            "topics": [
              {
                "name": "Troposphere, Stratosphere, Mesosphere, Thermosphere",
                "slug": "atmospheric-layers"
              },
              {
                "name": "Tropospheric Pollution — Gaseous Pollutants",
                "slug": "gaseous-pollutants"
              },
              {
                "name": "Particulate Pollutants",
                "slug": "particulate-pollutants"
              },
              {
                "name": "Smog — Classical and Photochemical",
                "slug": "smog-types"
              },
              {
                "name": "Acid Rain — Formation and Effects on Ecosystem",
                "slug": "acid-rain"
              },
              {
                "name": "Greenhouse Effect and Global Warming",
                "slug": "greenhouse-global-warming"
              },
              {
                "name": "Ozone Layer — Formation and Depletion (CFCs)",
                "slug": "ozone-layer-depletion"
              },
              {
                "name": "Water Pollution — Industrial, Domestic, Agricultural",
                "slug": "water-pollution-sources"
              },
              {
                "name": "BOD and COD",
                "slug": "bod-cod"
              },
              {
                "name": "Water Treatment",
                "slug": "water-treatment"
              }
            ]
          },
          {
            "name": "The Solid State",
            "slug": "solid-state",
            "topics": [
              {
                "name": "Crystalline vs Amorphous Solids",
                "slug": "crystalline-amorphous"
              },
              {
                "name": "Types of Solids — Ionic, Molecular, Covalent, Metallic",
                "slug": "solid-types"
              },
              {
                "name": "Crystal Lattice and Unit Cell",
                "slug": "crystal-lattice"
              },
              {
                "name": "Primitive (SCC), BCC and FCC Unit Cells",
                "slug": "unit-cell-types"
              },
              {
                "name": "Number of Atoms per Unit Cell",
                "slug": "atoms-per-cell"
              },
              {
                "name": "Packing Efficiency — SCC (52.4%), BCC (68%), FCC (74%)",
                "slug": "packing-efficiency"
              },
              {
                "name": "Tetrahedral and Octahedral Voids",
                "slug": "voids-types"
              },
              {
                "name": "Close Packing in 2D and 3D — HCP and CCP",
                "slug": "close-packing"
              },
              {
                "name": "Density Calculation from Unit Cell",
                "slug": "density-calculation"
              },
              {
                "name": "Structures — NaCl, ZnS (Zinc Blende and Wurtzite), CsCl, Diamond",
                "slug": "ionic-structures"
              }
            ]
          },
          {
            "name": "Solutions",
            "slug": "solutions",
            "topics": [
              {
                "name": "Types of Solutions — Solid, Liquid, Gas",
                "slug": "solution-types"
              },
              {
                "name": "Solubility of Solid in Liquid",
                "slug": "solubility-solid"
              },
              {
                "name": "Henry's Law for Gas Solubility",
                "slug": "henrys-law"
              },
              {
                "name": "Concentration Terms — Molarity, Molality, Mole Fraction, % w/v, ppm",
                "slug": "concentration-terms"
              },
              {
                "name": "Interconversion of Concentration Terms",
                "slug": "concentration-interconversion"
              },
              {
                "name": "Vapour Pressure and Raoult's Law",
                "slug": "raoults-law"
              },
              {
                "name": "Raoult's Law for Volatile-Volatile Mixtures",
                "slug": "raoult-volatile-mix"
              },
              {
                "name": "Ideal and Non-Ideal Solutions",
                "slug": "ideal-nonideal"
              },
              {
                "name": "Positive Deviation (PA > PA° xA)",
                "slug": "positive-deviation"
              },
              {
                "name": "Negative Deviation",
                "slug": "negative-deviation"
              }
            ]
          },
          {
            "name": "Electrochemistry",
            "slug": "electrochemistry",
            "topics": [
              {
                "name": "Electrochemical Cell — Galvanic vs Electrolytic",
                "slug": "cell-types"
              },
              {
                "name": "Daniel Cell — Working and Cell Reaction",
                "slug": "daniel-cell"
              },
              {
                "name": "Cell Notation and Salt Bridge Function",
                "slug": "cell-notation"
              },
              {
                "name": "Standard Electrode Potential (E° at SHE)",
                "slug": "standard-electrode"
              },
              {
                "name": "Cell Potential (E°cell = E°cathode - E°anode)",
                "slug": "cell-potential"
              },
              {
                "name": "Electrochemical Series and Applications",
                "slug": "electrochemical-series"
              },
              {
                "name": "Nernst Equation",
                "slug": "nernst-equation"
              },
              {
                "name": "Equilibrium Constant from E°cell (lnK = nFE°/RT)",
                "slug": "k-from-ecell"
              },
              {
                "name": "Relationship ΔG° = -nFE°",
                "slug": "delta-g-ecell"
              },
              {
                "name": "Electrolysis — Faraday's First Law",
                "slug": "faradays-first"
              }
            ]
          },
          {
            "name": "Chemical Kinetics",
            "slug": "chemical-kinetics",
            "topics": [
              {
                "name": "Rate of Reaction — Average and Instantaneous",
                "slug": "rate-of-reaction"
              },
              {
                "name": "Rate Expression and Rate Constant Units",
                "slug": "rate-expression-units"
              },
              {
                "name": "Factors Affecting Rate",
                "slug": "rate-factors"
              },
              {
                "name": "Rate Law (Rate = k[A]^m[B]^n)",
                "slug": "rate-law"
              },
              {
                "name": "Order of Reaction — Zero, First, Second",
                "slug": "order-types"
              },
              {
                "name": "Molecularity",
                "slug": "molecularity"
              },
              {
                "name": "Integrated Rate Law — Zero Order",
                "slug": "zero-order-integrated"
              },
              {
                "name": "Integrated Rate Law — First Order (k = (2.303/t)log(a/(a-x)))",
                "slug": "first-order-integrated"
              },
              {
                "name": "Half-Life — Zero Order (t₁/₂ = a/2k)",
                "slug": "half-life-zero"
              },
              {
                "name": "Half-Life — First Order (t₁/₂ = 0.693/k)",
                "slug": "half-life-first"
              }
            ]
          },
          {
            "name": "Surface Chemistry",
            "slug": "surface-chemistry",
            "topics": [
              {
                "name": "Adsorption — Physisorption vs Chemisorption",
                "slug": "adsorption-types"
              },
              {
                "name": "Freundlich Adsorption Isotherm",
                "slug": "freundlich-isotherm"
              },
              {
                "name": "Langmuir Adsorption Isotherm",
                "slug": "langmuir-isotherm"
              },
              {
                "name": "Factors Affecting Adsorption",
                "slug": "adsorption-factors"
              },
              {
                "name": "Homogeneous Catalysis",
                "slug": "homogeneous-catalysis"
              },
              {
                "name": "Heterogeneous Catalysis — Mechanism",
                "slug": "heterogeneous-catalysis"
              },
              {
                "name": "Enzyme Catalysis and Lock-Key Mechanism",
                "slug": "enzyme-catalysis"
              },
              {
                "name": "Zeolites",
                "slug": "zeolites"
              },
              {
                "name": "Colloid — Definition, Types and Classification",
                "slug": "colloid-types"
              },
              {
                "name": "Preparation of Colloids — Chemical, Bredig's Arc",
                "slug": "colloid-preparation"
              }
            ]
          },
          {
            "name": "General Principles and Processes of Isolation of Elements",
            "slug": "metallurgy",
            "topics": [
              {
                "name": "Minerals and Ores",
                "slug": "minerals-ores"
              },
              {
                "name": "Concentration — Gravity Separation, Froth Flotation",
                "slug": "concentration-methods"
              },
              {
                "name": "Electromagnetic Separation and Chemical Leaching",
                "slug": "electromagnetic-leaching"
              },
              {
                "name": "Calcination and Roasting",
                "slug": "calcination-roasting"
              },
              {
                "name": "Smelting and Carbon Reduction",
                "slug": "smelting-reduction"
              },
              {
                "name": "Thermodynamic Principles — Ellingham Diagram",
                "slug": "ellingham-diagram"
              },
              {
                "name": "Electrochemical Reduction",
                "slug": "electrochemical-reduction"
              },
              {
                "name": "Refining — Distillation, Liquation",
                "slug": "refining-distillation"
              },
              {
                "name": "Electrolytic Refining",
                "slug": "electrolytic-refining"
              },
              {
                "name": "Zone Refining",
                "slug": "zone-refining"
              }
            ]
          },
          {
            "name": "The p-Block Elements (Groups 15, 16, 17 and 18)",
            "slug": "p-block-12",
            "topics": [
              {
                "name": "Group 15 — General Properties",
                "slug": "group15-general"
              },
              {
                "name": "Nitrogen — Physical and Chemical Properties",
                "slug": "nitrogen-properties"
              },
              {
                "name": "Ammonia — Haber Process, Properties and Uses",
                "slug": "ammonia-haber"
              },
              {
                "name": "Nitric Acid — Ostwald Process, Properties",
                "slug": "nitric-acid-ostwald"
              },
              {
                "name": "Oxides of Nitrogen (N₂O to N₂O₅)",
                "slug": "nitrogen-oxides"
              },
              {
                "name": "Oxoacids of Nitrogen",
                "slug": "oxoacids-nitrogen"
              },
              {
                "name": "Phosphorus — Allotropes",
                "slug": "phosphorus-allotropes"
              },
              {
                "name": "Phosphine (PH₃) — Preparation and Properties",
                "slug": "phosphine"
              },
              {
                "name": "PCl₃ and PCl₅ — Structure and Properties",
                "slug": "pcl3-pcl5"
              },
              {
                "name": "Oxoacids of Phosphorus",
                "slug": "oxoacids-phosphorus"
              }
            ]
          },
          {
            "name": "The d- and f-Block Elements",
            "slug": "d-f-block",
            "topics": [
              {
                "name": "Position and Electronic Configuration",
                "slug": "transition-position"
              },
              {
                "name": "Metallic Character and Melting Point",
                "slug": "transition-metallic"
              },
              {
                "name": "Density and Atomic/Ionic Radius Trend",
                "slug": "transition-radius"
              },
              {
                "name": "Variable Oxidation States and Stability",
                "slug": "variable-oxidation"
              },
              {
                "name": "Ionisation Enthalpy of Transition Metals",
                "slug": "transition-ie"
              },
              {
                "name": "Colour of Transition Metal Compounds",
                "slug": "transition-colour"
              },
              {
                "name": "Magnetic Properties — Spin-Only Formula",
                "slug": "spin-only-formula"
              },
              {
                "name": "Catalytic Properties",
                "slug": "transition-catalysis"
              },
              {
                "name": "Interstitial Compounds",
                "slug": "interstitial-compounds"
              },
              {
                "name": "Alloy Formation",
                "slug": "alloy-formation"
              }
            ]
          },
          {
            "name": "Coordination Compounds",
            "slug": "coordination-compounds",
            "topics": [
              {
                "name": "Werner's Theory of Coordination",
                "slug": "werners-theory"
              },
              {
                "name": "Key Terms — Coordination Entity, Central Atom, Ligand, CN",
                "slug": "key-terms"
              },
              {
                "name": "Types of Ligands — Mono, Bi, Poly, Ambidentate, Chelate",
                "slug": "types-ligands"
              },
              {
                "name": "IUPAC Nomenclature Rules",
                "slug": "iupac-rules-coord"
              },
              {
                "name": "IUPAC Nomenclature — Worked Examples",
                "slug": "iupac-worked"
              },
              {
                "name": "Isomerism — Ionisation Isomerism",
                "slug": "ionisation-isomerism"
              },
              {
                "name": "Hydrate, Linkage, Coordination Isomerism",
                "slug": "hydrate-linkage-coord"
              },
              {
                "name": "Geometric Isomerism — Square Planar and Octahedral",
                "slug": "geometric-isomerism"
              },
              {
                "name": "Optical Isomerism in Coordination Compounds",
                "slug": "optical-isomerism-coord"
              },
              {
                "name": "Valence Bond Theory (VBT) — Inner and Outer Orbital",
                "slug": "vbt-inner-outer"
              }
            ]
          },
          {
            "name": "Haloalkanes and Haloarenes",
            "slug": "haloalkanes-haloarenes",
            "topics": [
              {
                "name": "Classification and IUPAC Nomenclature",
                "slug": "halo-classification-iupac"
              },
              {
                "name": "Nature of C-X Bond and Physical Properties",
                "slug": "cx-bond-properties"
              },
              {
                "name": "Preparation from Alcohols, Alkenes and Alkanes",
                "slug": "halo-preparation"
              },
              {
                "name": "SN1 Mechanism — Steps and Energy Profile",
                "slug": "sn1-mechanism"
              },
              {
                "name": "SN2 Mechanism — Steps and Stereochemistry",
                "slug": "sn2-mechanism"
              },
              {
                "name": "Factors — Substrate, Nucleophile, Solvent, Leaving Group",
                "slug": "sn-factors"
              },
              {
                "name": "Walden Inversion in SN2",
                "slug": "walden-inversion"
              },
              {
                "name": "E1 Elimination Mechanism",
                "slug": "e1-mechanism"
              },
              {
                "name": "E2 Elimination and Zaitsev's Rule",
                "slug": "e2-zaitsev"
              },
              {
                "name": "SN2 vs E2 Competition",
                "slug": "sn2-e2-competition"
              }
            ]
          },
          {
            "name": "Alcohols, Phenols and Ethers",
            "slug": "alcohols-phenols-ethers",
            "topics": [
              {
                "name": "Classification and IUPAC of Alcohols",
                "slug": "alcohol-classification-iupac"
              },
              {
                "name": "Preparation of Monohydric Alcohols",
                "slug": "alcohol-monohydric-prep"
              },
              {
                "name": "Preparation from Grignard Reagent",
                "slug": "grignard-prep"
              },
              {
                "name": "Physical Properties — Boiling Points, Hydrogen Bonding",
                "slug": "alcohol-physical"
              },
              {
                "name": "Chemical Reactions — Acidity of Alcohols",
                "slug": "alcohol-acidity"
              },
              {
                "name": "Esterification (Fischer-Speier)",
                "slug": "esterification"
              },
              {
                "name": "Dehydration — E1 and E2 Pathway",
                "slug": "dehydration"
              },
              {
                "name": "Lucas Test",
                "slug": "lucas-test"
              },
              {
                "name": "Oxidation — Primary to Aldehyde/Acid, Secondary to Ketone",
                "slug": "alcohol-oxidation"
              },
              {
                "name": "Preparation of Phenols",
                "slug": "phenol-prep"
              }
            ]
          },
          {
            "name": "Aldehydes, Ketones and Carboxylic Acids",
            "slug": "aldehydes-ketones-acids",
            "topics": [
              {
                "name": "Nomenclature and Classification",
                "slug": "carbonyl-nomenclature"
              },
              {
                "name": "Preparation of Aldehydes",
                "slug": "aldehyde-prep"
              },
              {
                "name": "Preparation of Ketones",
                "slug": "ketone-prep"
              },
              {
                "name": "Physical Properties",
                "slug": "carbonyl-physical"
              },
              {
                "name": "Nucleophilic Addition — Mechanism",
                "slug": "nucleophilic-addition"
              },
              {
                "name": "Addition of HCN",
                "slug": "addition-hcn"
              },
              {
                "name": "Addition of NaHSO₃",
                "slug": "addition-nahso3"
              },
              {
                "name": "Addition of Grignard Reagent",
                "slug": "addition-grignard"
              },
              {
                "name": "Addition of NH₃ Derivatives",
                "slug": "addition-nh3-derivatives"
              },
              {
                "name": "Reduction — Clemmensen and Wolff-Kishner",
                "slug": "clemmensen-wolff-kishner"
              }
            ]
          },
          {
            "name": "Amines",
            "slug": "amines",
            "topics": [
              {
                "name": "Classification and IUPAC Nomenclature",
                "slug": "amines-nomenclature"
              },
              {
                "name": "Preparation — Gabriel Synthesis",
                "slug": "gabriel-synthesis"
              },
              {
                "name": "Hoffmann Bromamide Degradation",
                "slug": "hoffmann-degradation"
              },
              {
                "name": "Reduction of Nitrogen Compounds",
                "slug": "reduction-nitrogen"
              },
              {
                "name": "Physical Properties",
                "slug": "amines-physical"
              },
              {
                "name": "Basicity — pKb Values",
                "slug": "amines-basicity"
              },
              {
                "name": "Comparison — Aliphatic vs Aromatic Amines",
                "slug": "aliphatic-aromatic-amines"
              },
              {
                "name": "Effect of Substituents on Basicity",
                "slug": "substituent-basicity"
              },
              {
                "name": "Reactions with Acids and Acylation",
                "slug": "amine-acylation"
              },
              {
                "name": "Reaction with Nitrous Acid (Diazotisation)",
                "slug": "diazotisation"
              }
            ]
          },
          {
            "name": "Biomolecules",
            "slug": "biomolecules",
            "topics": [
              {
                "name": "Carbohydrates — Definition and Classification",
                "slug": "carbohydrates-classification"
              },
              {
                "name": "Glucose — Open Chain and Cyclic (Haworth) Structure",
                "slug": "glucose-structure"
              },
              {
                "name": "Fructose Structure and Mutarotation",
                "slug": "fructose-mutarotation"
              },
              {
                "name": "Disaccharides — Sucrose, Maltose, Lactose",
                "slug": "disaccharides"
              },
              {
                "name": "Polysaccharides — Starch, Cellulose, Glycogen",
                "slug": "polysaccharides"
              },
              {
                "name": "Reducing and Non-Reducing Sugars",
                "slug": "reducing-non-reducing"
              },
              {
                "name": "Glycosidic Bond",
                "slug": "glycosidic-bond"
              },
              {
                "name": "Amino Acids — Structure and Classification",
                "slug": "amino-acids-structure"
              },
              {
                "name": "Essential Amino Acids",
                "slug": "essential-amino-acids"
              },
              {
                "name": "Zwitter Ion",
                "slug": "zwitter-ion"
              }
            ]
          },
          {
            "name": "Polymers",
            "slug": "polymers",
            "topics": [
              {
                "name": "Polymer Terminology — Monomer, Repeat Unit, Chain",
                "slug": "polymer-terminology"
              },
              {
                "name": "Classification — Natural, Synthetic, Semi-Synthetic",
                "slug": "polymer-classification-origin"
              },
              {
                "name": "Classification — Addition and Condensation",
                "slug": "polymer-addition-cond"
              },
              {
                "name": "Classification — Biodegradable and Non-Biodegradable",
                "slug": "polymer-biodegradable"
              },
              {
                "name": "Addition Polymerisation — Free Radical Mechanism",
                "slug": "addition-mechanism"
              },
              {
                "name": "Condensation Polymerisation — Mechanism",
                "slug": "condensation-mechanism"
              },
              {
                "name": "Copolymerisation",
                "slug": "copolymerisation"
              },
              {
                "name": "Natural Rubber and Vulcanisation",
                "slug": "rubber-vulcanisation"
              },
              {
                "name": "Synthetic Rubbers — Neoprene, Buna-S, Buna-N",
                "slug": "synthetic-rubbers"
              },
              {
                "name": "Polyethylene — LDPE and HDPE",
                "slug": "polyethylene"
              }
            ]
          },
          {
            "name": "Chemistry in Everyday Life",
            "slug": "chemistry-everyday-life",
            "topics": [
              {
                "name": "Drugs — Definition and Classification",
                "slug": "drugs-classification"
              },
              {
                "name": "Drug-Target Interaction — Enzyme and Receptor",
                "slug": "drug-target-interaction"
              },
              {
                "name": "Analgesics — Narcotics and Non-Narcotics",
                "slug": "analgesics"
              },
              {
                "name": "Tranquilisers",
                "slug": "tranquilisers"
              },
              {
                "name": "Antiseptics and Disinfectants",
                "slug": "antiseptics-disinfectants"
              },
              {
                "name": "Antibiotics — Bactericidal and Bacteriostatic",
                "slug": "antibiotics"
              },
              {
                "name": "Antacids and Antihistamines",
                "slug": "antacids-antihistamines"
              },
              {
                "name": "Antifertility Drugs",
                "slug": "antifertility"
              },
              {
                "name": "Chemicals in Food — Preservatives",
                "slug": "food-preservatives"
              },
              {
                "name": "Artificial Sweeteners",
                "slug": "artificial-sweeteners"
              }
            ]
          }
        ]
      },
      {
        "name": "Mathematics",
        "slug": "mathematics",
        "chapters": [
          {
            "name": "Sets",
            "slug": "sets",
            "topics": [
              {
                "name": "Sets — Definition and Representation (Roster, Set-Builder)",
                "slug": "sets-def-representation"
              },
              {
                "name": "Types of Sets — Empty, Finite, Infinite, Equal, Singleton",
                "slug": "types-sets"
              },
              {
                "name": "Subsets and Power Set",
                "slug": "subsets-power-set"
              },
              {
                "name": "Universal Set and Complement",
                "slug": "universal-complement"
              },
              {
                "name": "Union and Intersection of Sets",
                "slug": "union-intersection"
              },
              {
                "name": "Difference and Symmetric Difference",
                "slug": "difference-symmetric"
              },
              {
                "name": "De Morgan's Laws",
                "slug": "de-morgans-laws"
              },
              {
                "name": "Venn Diagrams and Problems",
                "slug": "venn-diagrams"
              },
              {
                "name": "Cartesian Product of Sets",
                "slug": "cartesian-product"
              },
              {
                "name": "Number of Elements in A∪B, A∩B (Inclusion-Exclusion)",
                "slug": "inclusion-exclusion"
              }
            ]
          },
          {
            "name": "Relations and Functions",
            "slug": "relations-functions",
            "topics": [
              {
                "name": "Ordered Pair and Cartesian Product",
                "slug": "ordered-pair"
              },
              {
                "name": "Relation — Definition, Domain, Range, Codomain",
                "slug": "relation-definition"
              },
              {
                "name": "Types of Relations — Reflexive, Symmetric, Transitive",
                "slug": "relation-types"
              },
              {
                "name": "Equivalence Relation",
                "slug": "equivalence-relation"
              },
              {
                "name": "Function — Definition and Examples",
                "slug": "function-definition"
              },
              {
                "name": "Domain, Codomain and Range",
                "slug": "domain-range"
              },
              {
                "name": "One-One (Injective) Functions",
                "slug": "one-one"
              },
              {
                "name": "Onto (Surjective) and Bijective Functions",
                "slug": "onto-bijective"
              },
              {
                "name": "Number of Functions and Bijections",
                "slug": "counting-functions"
              },
              {
                "name": "Algebra of Functions (Sum, Difference, Product, Quotient)",
                "slug": "algebra-functions"
              }
            ]
          },
          {
            "name": "Trigonometric Functions",
            "slug": "trigonometric-functions",
            "topics": [
              {
                "name": "Measurement of Angles — Radian and Degree",
                "slug": "radian-degree"
              },
              {
                "name": "Arc Length and Area of Sector",
                "slug": "arc-sector"
              },
              {
                "name": "Trigonometric Functions — Definition",
                "slug": "trig-def"
              },
              {
                "name": "Signs of Trig Functions in all Quadrants (ASTC)",
                "slug": "signs-quadrants"
              },
              {
                "name": "Values at Standard Angles (0°, 30°, 45°, 60°, 90°)",
                "slug": "standard-angle-values"
              },
              {
                "name": "Trig Functions of Allied Angles",
                "slug": "allied-angles"
              },
              {
                "name": "Fundamental Identities",
                "slug": "fundamental-identities"
              },
              {
                "name": "Compound Angle Formulae (A+B, A-B)",
                "slug": "compound-angles"
              },
              {
                "name": "Double Angle Formulae (2A)",
                "slug": "double-angle"
              },
              {
                "name": "Triple Angle Formulae (3A)",
                "slug": "triple-angle"
              }
            ]
          },
          {
            "name": "Principle of Mathematical Induction",
            "slug": "mathematical-induction",
            "topics": [
              {
                "name": "Motivation and Principle of Mathematical Induction",
                "slug": "pmi-motivation"
              },
              {
                "name": "Proving Summation Formulae by PMI",
                "slug": "pmi-summation"
              },
              {
                "name": "Proving Divisibility Results by PMI",
                "slug": "pmi-divisibility"
              },
              {
                "name": "Proving Inequalities by PMI",
                "slug": "pmi-inequalities"
              },
              {
                "name": "Second Principle of Induction",
                "slug": "pmi-second"
              }
            ]
          },
          {
            "name": "Complex Numbers and Quadratic Equations",
            "slug": "complex-numbers-quadratic",
            "topics": [
              {
                "name": "Need for Complex Numbers and Imaginary Unit i",
                "slug": "need-complex"
              },
              {
                "name": "Complex Number z = a + ib",
                "slug": "complex-form"
              },
              {
                "name": "Algebra — Addition, Subtraction, Multiplication, Division",
                "slug": "complex-algebra"
              },
              {
                "name": "Modulus and Argument (Principal Value)",
                "slug": "modulus-argument"
              },
              {
                "name": "Polar Form r(cosθ + i sinθ)",
                "slug": "polar-form"
              },
              {
                "name": "Euler's Form re^(iθ)",
                "slug": "euler-form"
              },
              {
                "name": "de Moivre's Theorem and Proof",
                "slug": "de-moivres"
              },
              {
                "name": "Cube Roots of Unity (ω and ω²) and Properties",
                "slug": "cube-roots-unity"
              },
              {
                "name": "nth Roots of Unity",
                "slug": "nth-roots-unity"
              },
              {
                "name": "Locus Problems in Argand Plane",
                "slug": "argand-locus"
              }
            ]
          },
          {
            "name": "Linear Inequalities",
            "slug": "linear-inequalities",
            "topics": [
              {
                "name": "Types of Inequalities and Notation",
                "slug": "inequality-notation"
              },
              {
                "name": "Properties of Inequalities",
                "slug": "inequality-properties"
              },
              {
                "name": "Linear Inequalities in One Variable — Solution",
                "slug": "one-var-ineq"
              },
              {
                "name": "Number Line Representation",
                "slug": "number-line-ineq"
              },
              {
                "name": "Linear Inequalities in Two Variables",
                "slug": "two-var-ineq"
              },
              {
                "name": "Graphical Representation — Half Plane",
                "slug": "half-plane"
              },
              {
                "name": "System of Linear Inequalities — Feasible Region",
                "slug": "feasible-region-ineq"
              },
              {
                "name": "Practical Problems on Inequalities",
                "slug": "practical-ineq"
              }
            ]
          },
          {
            "name": "Permutations and Combinations",
            "slug": "permutations-combinations",
            "topics": [
              {
                "name": "Fundamental Counting Principle",
                "slug": "counting-principle"
              },
              {
                "name": "Factorial Notation",
                "slug": "factorial"
              },
              {
                "name": "Permutation Formula (nPr)",
                "slug": "npr-formula"
              },
              {
                "name": "Permutations with All Objects",
                "slug": "all-objects-perm"
              },
              {
                "name": "Permutations with Restrictions",
                "slug": "restricted-perm"
              },
              {
                "name": "Circular Permutations",
                "slug": "circular-perm"
              },
              {
                "name": "Permutations of Identical Objects",
                "slug": "identical-perm"
              },
              {
                "name": "Combination Formula (nCr)",
                "slug": "ncr-formula"
              },
              {
                "name": "Combinations — Properties and Identities",
                "slug": "ncr-properties"
              },
              {
                "name": "Combinations with Restrictions",
                "slug": "restricted-comb"
              }
            ]
          },
          {
            "name": "Binomial Theorem",
            "slug": "binomial-theorem",
            "topics": [
              {
                "name": "Binomial Theorem for Positive Integer n",
                "slug": "binomial-positive-int"
              },
              {
                "name": "Pascal's Triangle",
                "slug": "pascals-triangle"
              },
              {
                "name": "General Term Tr+1 = nCr · x^(n-r) · y^r",
                "slug": "general-term"
              },
              {
                "name": "Finding a Specific Term",
                "slug": "specific-term"
              },
              {
                "name": "Middle Term(s)",
                "slug": "middle-term"
              },
              {
                "name": "Term Independent of x",
                "slug": "term-independent-x"
              },
              {
                "name": "Properties of Binomial Coefficients",
                "slug": "binomial-coeff-properties"
              },
              {
                "name": "Sum of Coefficients",
                "slug": "sum-coefficients"
              },
              {
                "name": "Binomial Theorem for Rational Index (Approximation)",
                "slug": "rational-index"
              },
              {
                "name": "Greatest Term in Binomial Expansion",
                "slug": "greatest-term"
              }
            ]
          },
          {
            "name": "Sequences and Series",
            "slug": "sequences-series",
            "topics": [
              {
                "name": "Sequence — General Term and Pattern",
                "slug": "sequence-general-term"
              },
              {
                "name": "AP — nth Term (an = a + (n-1)d)",
                "slug": "ap-nth-term"
              },
              {
                "name": "AP — Sum of n Terms (Sn = n/2(2a + (n-1)d))",
                "slug": "ap-sum"
              },
              {
                "name": "AP — Properties",
                "slug": "ap-properties"
              },
              {
                "name": "Insertion of Arithmetic Means",
                "slug": "am-insertion"
              },
              {
                "name": "GP — nth Term (an = ar^(n-1))",
                "slug": "gp-nth-term"
              },
              {
                "name": "GP — Sum of n Terms",
                "slug": "gp-sum"
              },
              {
                "name": "GP — Sum of Infinite Terms (S∞ = a/(1-r), |r|<1)",
                "slug": "gp-infinite-sum"
              },
              {
                "name": "Insertion of Geometric Means",
                "slug": "gm-insertion"
              },
              {
                "name": "HP — nth Term and Problems",
                "slug": "hp-nth-term"
              }
            ]
          },
          {
            "name": "Straight Lines",
            "slug": "straight-lines",
            "topics": [
              {
                "name": "Slope of a Line — Formula and Inclination",
                "slug": "slope-line"
              },
              {
                "name": "Conditions for Parallel and Perpendicular",
                "slug": "parallel-perpendicular-cond"
              },
              {
                "name": "Slope-Intercept Form (y = mx + c)",
                "slug": "slope-intercept-form"
              },
              {
                "name": "Point-Slope Form",
                "slug": "point-slope-form"
              },
              {
                "name": "Two-Point Form",
                "slug": "two-point-form"
              },
              {
                "name": "Intercept Form (x/a + y/b = 1)",
                "slug": "intercept-form"
              },
              {
                "name": "Normal Form (x cosα + y sinα = p)",
                "slug": "normal-form"
              },
              {
                "name": "General Form (ax + by + c = 0)",
                "slug": "general-form"
              },
              {
                "name": "Angle Between Two Lines (tanθ formula)",
                "slug": "angle-two-lines"
              },
              {
                "name": "Distance from Point to Line",
                "slug": "point-line-distance"
              }
            ]
          },
          {
            "name": "Conic Sections",
            "slug": "conic-sections",
            "topics": [
              {
                "name": "Circle — Standard Equation (x²+y²=r²)",
                "slug": "circle-standard"
              },
              {
                "name": "Circle — General Equation",
                "slug": "circle-general"
              },
              {
                "name": "Circle through 3 Points",
                "slug": "circle-3-points"
              },
              {
                "name": "Tangent to Circle — Condition and Equation",
                "slug": "circle-tangent"
              },
              {
                "name": "Normal to Circle",
                "slug": "circle-normal"
              },
              {
                "name": "Chord of Contact (T = 0)",
                "slug": "circle-chord-contact"
              },
              {
                "name": "Family of Circles",
                "slug": "circle-family"
              },
              {
                "name": "Radical Axis",
                "slug": "radical-axis"
              },
              {
                "name": "Parabola — Standard Forms (y²=4ax, x²=4ay)",
                "slug": "parabola-forms"
              },
              {
                "name": "Parabola — Parametric Equations",
                "slug": "parabola-parametric"
              }
            ]
          },
          {
            "name": "Introduction to Three Dimensional Geometry",
            "slug": "intro-3d-geometry",
            "topics": [
              {
                "name": "Coordinate Axes and Planes in 3D",
                "slug": "3d-axes-planes"
              },
              {
                "name": "Coordinates of a Point in Space",
                "slug": "3d-coordinates"
              },
              {
                "name": "Distance Formula in 3D",
                "slug": "3d-distance"
              },
              {
                "name": "Section Formula — Internal Division",
                "slug": "3d-section-internal"
              },
              {
                "name": "Section Formula — External Division",
                "slug": "3d-section-external"
              },
              {
                "name": "Midpoint Formula",
                "slug": "3d-midpoint"
              },
              {
                "name": "Centroid of Triangle and Tetrahedron",
                "slug": "3d-centroid"
              }
            ]
          },
          {
            "name": "Limits and Derivatives",
            "slug": "limits-derivatives",
            "topics": [
              {
                "name": "Intuitive Notion of Limit",
                "slug": "limit-intuition"
              },
              {
                "name": "Left-Hand Limit and Right-Hand Limit",
                "slug": "lhl-rhl"
              },
              {
                "name": "Existence of Limit",
                "slug": "limit-existence"
              },
              {
                "name": "Algebra of Limits",
                "slug": "algebra-limits"
              },
              {
                "name": "Standard Limits — sinx/x, tanx/x, (aˣ-1)/x, (xⁿ-aⁿ)/(x-a)",
                "slug": "standard-limits"
              },
              {
                "name": "Limit at Infinity and Infinite Limits",
                "slug": "limits-infinity"
              },
              {
                "name": "L'Hôpital's Rule",
                "slug": "lhopital-rule"
              },
              {
                "name": "Sandwich Theorem",
                "slug": "sandwich-theorem"
              },
              {
                "name": "Definition of Derivative — First Principles",
                "slug": "first-principles"
              },
              {
                "name": "Rules of Differentiation",
                "slug": "diff-rules"
              }
            ]
          },
          {
            "name": "Mathematical Reasoning",
            "slug": "mathematical-reasoning",
            "topics": [
              {
                "name": "Statements — Simple and Compound",
                "slug": "statements-types"
              },
              {
                "name": "Negation",
                "slug": "negation"
              },
              {
                "name": "Conjunction (∧) and Disjunction (∨)",
                "slug": "conjunction-disjunction"
              },
              {
                "name": "Implication (→) and Biconditional (↔)",
                "slug": "implication-biconditional"
              },
              {
                "name": "Truth Tables",
                "slug": "truth-tables"
              },
              {
                "name": "Tautology and Contradiction",
                "slug": "tautology-contradiction"
              },
              {
                "name": "Converse, Inverse and Contrapositive",
                "slug": "converse-inverse"
              },
              {
                "name": "Quantifiers — For All (∀) and There Exists (∃)",
                "slug": "quantifiers"
              },
              {
                "name": "Validity of Statements — Direct and Contradiction",
                "slug": "proof-methods"
              }
            ]
          },
          {
            "name": "Statistics",
            "slug": "statistics",
            "topics": [
              {
                "name": "Measures of Central Tendency — Mean, Median, Mode",
                "slug": "central-tendency"
              },
              {
                "name": "Mean for Grouped Data",
                "slug": "grouped-mean"
              },
              {
                "name": "Median for Grouped Data",
                "slug": "grouped-median"
              },
              {
                "name": "Mode for Grouped Data",
                "slug": "grouped-mode"
              },
              {
                "name": "Mean Deviation about Mean",
                "slug": "mean-deviation-mean"
              },
              {
                "name": "Mean Deviation about Median",
                "slug": "mean-deviation-median"
              },
              {
                "name": "Variance",
                "slug": "variance"
              },
              {
                "name": "Standard Deviation",
                "slug": "standard-deviation"
              },
              {
                "name": "Coefficient of Variation (CV)",
                "slug": "cv"
              },
              {
                "name": "Comparison of Two Distributions using CV",
                "slug": "compare-cv"
              }
            ]
          },
          {
            "name": "Probability",
            "slug": "probability-11",
            "topics": [
              {
                "name": "Random Experiment and Sample Space",
                "slug": "sample-space"
              },
              {
                "name": "Events — Simple, Compound, Complementary, Impossible",
                "slug": "event-types"
              },
              {
                "name": "Axiomatic Definition of Probability",
                "slug": "axiomatic-probability"
              },
              {
                "name": "Classical Definition — Equally Likely Outcomes",
                "slug": "classical-probability"
              },
              {
                "name": "Addition Theorem (P(A∪B) = P(A) + P(B) - P(A∩B))",
                "slug": "addition-theorem"
              },
              {
                "name": "Mutually Exclusive Events",
                "slug": "mutually-exclusive"
              },
              {
                "name": "Complement Rule (P(A') = 1 - P(A))",
                "slug": "complement-rule"
              },
              {
                "name": "Geometric Probability",
                "slug": "geometric-probability"
              }
            ]
          },
          {
            "name": "Relations and Functions",
            "slug": "relations-functions-12",
            "topics": [
              {
                "name": "Review — Types of Relations",
                "slug": "review-relations"
              },
              {
                "name": "Equivalence Relations and Classes",
                "slug": "equivalence-classes"
              },
              {
                "name": "One-One, Onto and Bijective Functions",
                "slug": "bijective-12"
              },
              {
                "name": "Composition of Functions and its Properties",
                "slug": "composition-12"
              },
              {
                "name": "Invertible Functions and Finding Inverse",
                "slug": "invertible-12"
              },
              {
                "name": "Binary Operations — Definition and Properties",
                "slug": "binary-operations"
              },
              {
                "name": "Commutativity, Associativity, Identity, Inverse",
                "slug": "binary-operation-properties"
              }
            ]
          },
          {
            "name": "Inverse Trigonometric Functions",
            "slug": "inverse-trig",
            "topics": [
              {
                "name": "Need for Restricted Domain",
                "slug": "restricted-domain"
              },
              {
                "name": "Domain and Range of sin⁻¹, cos⁻¹, tan⁻¹",
                "slug": "domain-range-main"
              },
              {
                "name": "Domain and Range of csc⁻¹, sec⁻¹, cot⁻¹",
                "slug": "domain-range-others"
              },
              {
                "name": "Graphs of Inverse Trig Functions",
                "slug": "graphs-inverse"
              },
              {
                "name": "Principal Value — Definition and Finding",
                "slug": "principal-value"
              },
              {
                "name": "Property — sin⁻¹(sinx) = x and sin(sin⁻¹x) = x",
                "slug": "inv-composition"
              },
              {
                "name": "Property — sin⁻¹x + cos⁻¹x = π/2",
                "slug": "complementary-inv"
              },
              {
                "name": "Property — tan⁻¹x + cot⁻¹x = π/2",
                "slug": "tan-cot-complementary"
              },
              {
                "name": "Addition Formula for tan⁻¹",
                "slug": "tan-addition"
              },
              {
                "name": "Double and Triple Angle Formulas in Inverse Trig",
                "slug": "double-triple-inv"
              }
            ]
          },
          {
            "name": "Matrices",
            "slug": "matrices",
            "topics": [
              {
                "name": "Matrix — Definition, Order and Types",
                "slug": "matrix-types"
              },
              {
                "name": "Matrix Equality",
                "slug": "matrix-equality"
              },
              {
                "name": "Addition and Subtraction of Matrices",
                "slug": "matrix-add-sub"
              },
              {
                "name": "Scalar Multiplication",
                "slug": "scalar-mult"
              },
              {
                "name": "Matrix Multiplication — Conditions and Rules",
                "slug": "matrix-multiplication"
              },
              {
                "name": "Properties of Matrix Multiplication",
                "slug": "mult-properties"
              },
              {
                "name": "Transpose of Matrix and Its Properties",
                "slug": "transpose"
              },
              {
                "name": "Symmetric and Skew-Symmetric Matrices",
                "slug": "symmetric-skew"
              },
              {
                "name": "Elementary Row Operations",
                "slug": "row-operations"
              },
              {
                "name": "Row Echelon Form",
                "slug": "row-echelon"
              }
            ]
          },
          {
            "name": "Determinants",
            "slug": "determinants",
            "topics": [
              {
                "name": "Determinant — Expansion along Row/Column (1×1, 2×2, 3×3)",
                "slug": "det-expansion"
              },
              {
                "name": "Properties of Determinants",
                "slug": "det-properties"
              },
              {
                "name": "Sarrus' Rule for 3×3 Determinant",
                "slug": "sarrus-rule"
              },
              {
                "name": "Minors and Cofactors",
                "slug": "minors-cofactors"
              },
              {
                "name": "Adjoint of a Matrix",
                "slug": "adjoint-matrix"
              },
              {
                "name": "Inverse of Matrix Using Adjoint (A⁻¹ = adj(A)/|A|)",
                "slug": "inverse-adjoint"
              },
              {
                "name": "Rank of a Matrix",
                "slug": "matrix-rank"
              },
              {
                "name": "System of Equations — Consistent and Inconsistent",
                "slug": "system-consistency"
              },
              {
                "name": "Cramer's Rule",
                "slug": "cramers-rule"
              },
              {
                "name": "Solving 3×3 System by Inverse Method",
                "slug": "inverse-method-system"
              }
            ]
          },
          {
            "name": "Continuity and Differentiability",
            "slug": "continuity-differentiability",
            "topics": [
              {
                "name": "Continuity at a Point — Definition",
                "slug": "continuity-def"
              },
              {
                "name": "Continuity from Left and Right",
                "slug": "continuity-left-right"
              },
              {
                "name": "Continuity of Common Functions",
                "slug": "continuity-common"
              },
              {
                "name": "Types of Discontinuities — Removable, Jump, Infinite",
                "slug": "discontinuity-types"
              },
              {
                "name": "Continuity on Closed Interval",
                "slug": "continuity-interval"
              },
              {
                "name": "Differentiability at a Point",
                "slug": "differentiability"
              },
              {
                "name": "Relation Between Continuity and Differentiability",
                "slug": "cont-diff-relation"
              },
              {
                "name": "Derivatives of Exponential Functions",
                "slug": "exp-derivatives"
              },
              {
                "name": "Derivatives of Logarithmic Functions",
                "slug": "log-derivatives"
              },
              {
                "name": "Derivatives of Inverse Trig Functions",
                "slug": "inv-trig-derivatives"
              }
            ]
          },
          {
            "name": "Application of Derivatives",
            "slug": "application-derivatives",
            "topics": [
              {
                "name": "Rate of Change of Quantities",
                "slug": "rate-of-change"
              },
              {
                "name": "Slope of Tangent and Normal",
                "slug": "slope-tangent-normal"
              },
              {
                "name": "Equation of Tangent",
                "slug": "equation-tangent"
              },
              {
                "name": "Equation of Normal",
                "slug": "equation-normal"
              },
              {
                "name": "Angle of Intersection of Two Curves",
                "slug": "angle-intersection-curves"
              },
              {
                "name": "Orthogonal Curves",
                "slug": "orthogonal-curves"
              },
              {
                "name": "Increasing and Decreasing Functions — Test",
                "slug": "increasing-decreasing"
              },
              {
                "name": "Monotonicity in Interval",
                "slug": "monotonicity"
              },
              {
                "name": "Critical Points",
                "slug": "critical-points"
              },
              {
                "name": "First Derivative Test for Extrema",
                "slug": "first-derivative-test"
              }
            ]
          },
          {
            "name": "Integrals",
            "slug": "integrals",
            "topics": [
              {
                "name": "Integration as Anti-Differentiation",
                "slug": "anti-diff"
              },
              {
                "name": "Standard Integrals — Power, Trig, Exp, Log",
                "slug": "standard-integrals"
              },
              {
                "name": "Integration by Substitution",
                "slug": "substitution"
              },
              {
                "name": "Integration of sin^m(x)·cos^n(x) forms",
                "slug": "sinm-cosn-forms"
              },
              {
                "name": "Integration Using Partial Fractions (All Cases)",
                "slug": "partial-fractions-all"
              },
              {
                "name": "Integration by Parts (ILATE)",
                "slug": "integration-by-parts"
              },
              {
                "name": "Special Integrals — ∫√(a²-x²)dx, ∫√(a²+x²)dx",
                "slug": "special-integrals"
              },
              {
                "name": "Integration of Rational Functions",
                "slug": "rational-integrals"
              },
              {
                "name": "Reduction Formulae",
                "slug": "reduction-formulae"
              },
              {
                "name": "Definite Integrals — Riemann Sum",
                "slug": "definite-riemann"
              }
            ]
          },
          {
            "name": "Application of Integrals",
            "slug": "application-integrals",
            "topics": [
              {
                "name": "Area Under Curve Using Definite Integral",
                "slug": "area-under-curve"
              },
              {
                "name": "Area Between Two Curves",
                "slug": "area-two-curves"
              },
              {
                "name": "Area Bounded by Parabola and Line",
                "slug": "area-parabola-line"
              },
              {
                "name": "Area Bounded by Circle",
                "slug": "area-circle"
              },
              {
                "name": "Area Using Horizontal and Vertical Strips",
                "slug": "horizontal-vertical-strips"
              }
            ]
          },
          {
            "name": "Differential Equations",
            "slug": "differential-equations",
            "topics": [
              {
                "name": "Ordinary Differential Equations — Order and Degree",
                "slug": "ode-order-degree"
              },
              {
                "name": "Formation of Differential Equation",
                "slug": "de-formation"
              },
              {
                "name": "Variable Separable Method",
                "slug": "variable-separable-de"
              },
              {
                "name": "Homogeneous Differential Equations",
                "slug": "homogeneous-de"
              },
              {
                "name": "Linear DE of First Order — dy/dx + Py = Q",
                "slug": "linear-de-first"
              },
              {
                "name": "Integrating Factor",
                "slug": "integrating-factor"
              },
              {
                "name": "Bernoulli's Equation",
                "slug": "bernoulli-de"
              },
              {
                "name": "Applications — Growth and Decay",
                "slug": "growth-decay"
              },
              {
                "name": "Applications — Newton's Law of Cooling",
                "slug": "cooling-de"
              },
              {
                "name": "Applications — Population Models",
                "slug": "population-de"
              }
            ]
          },
          {
            "name": "Vector Algebra",
            "slug": "vector-algebra",
            "topics": [
              {
                "name": "Vectors — Definition and Types",
                "slug": "vector-types"
              },
              {
                "name": "Addition of Vectors — Triangle and Parallelogram Law",
                "slug": "vector-addition-laws"
              },
              {
                "name": "Subtraction of Vectors",
                "slug": "vector-subtraction"
              },
              {
                "name": "Scalar Multiplication",
                "slug": "vector-scalar-mult"
              },
              {
                "name": "Position Vector",
                "slug": "position-vector"
              },
              {
                "name": "Components of Vector (i, j, k)",
                "slug": "vector-components"
              },
              {
                "name": "Magnitude of Vector",
                "slug": "vector-magnitude"
              },
              {
                "name": "Unit Vector",
                "slug": "unit-vector"
              },
              {
                "name": "Section Formula — Internal and External",
                "slug": "section-formula"
              },
              {
                "name": "Dot Product — Definition (a·b = |a||b|cosθ)",
                "slug": "dot-product-def"
              }
            ]
          },
          {
            "name": "Three Dimensional Geometry",
            "slug": "3d-geometry",
            "topics": [
              {
                "name": "Direction Cosines (l, m, n) and Properties",
                "slug": "direction-cosines"
              },
              {
                "name": "Direction Ratios and Conversion",
                "slug": "direction-ratios"
              },
              {
                "name": "Angle Between Two Lines using DC/DR",
                "slug": "angle-using-dc"
              },
              {
                "name": "Equation of Line — Vector Form",
                "slug": "line-vector"
              },
              {
                "name": "Equation of Line — Symmetric/Cartesian Form",
                "slug": "line-cartesian"
              },
              {
                "name": "Passing Through Two Points",
                "slug": "line-two-points"
              },
              {
                "name": "Angle Between Two Lines",
                "slug": "angle-two-lines-3d"
              },
              {
                "name": "Distance Between Point and Line",
                "slug": "point-line-3d"
              },
              {
                "name": "Skew Lines — Shortest Distance",
                "slug": "skew-shortest-distance"
              },
              {
                "name": "Distance Between Parallel Lines",
                "slug": "parallel-lines-3d"
              }
            ]
          },
          {
            "name": "Linear Programming",
            "slug": "linear-programming",
            "topics": [
              {
                "name": "LPP — Formulation from Word Problems",
                "slug": "lpp-formulation"
              },
              {
                "name": "Corner Point Method",
                "slug": "corner-point-method"
              },
              {
                "name": "Bounded and Unbounded Feasible Region",
                "slug": "feasible-region-types"
              },
              {
                "name": "Optimal Solution",
                "slug": "optimal-solution"
              },
              {
                "name": "Problems — Diet, Allocation, Transport",
                "slug": "lpp-problem-types"
              },
              {
                "name": "No Optimal Solution Case",
                "slug": "no-optimal-solution"
              }
            ]
          },
          {
            "name": "Probability",
            "slug": "probability-12",
            "topics": [
              {
                "name": "Conditional Probability — Definition and Formula",
                "slug": "conditional-prob"
              },
              {
                "name": "Properties of Conditional Probability",
                "slug": "conditional-properties"
              },
              {
                "name": "Multiplication Theorem (P(A∩B) = P(A)·P(B|A))",
                "slug": "multiplication-theorem"
              },
              {
                "name": "Independent Events — Condition",
                "slug": "independent-events"
              },
              {
                "name": "Total Probability Theorem",
                "slug": "total-probability"
              },
              {
                "name": "Bayes' Theorem",
                "slug": "bayes-theorem"
              },
              {
                "name": "Partition of Sample Space",
                "slug": "partition-sample-space"
              },
              {
                "name": "Random Variable — Discrete and Continuous",
                "slug": "random-variable"
              },
              {
                "name": "Probability Distribution Table",
                "slug": "prob-distribution-table"
              },
              {
                "name": "Mean (Expected Value) of RV",
                "slug": "mean-rv"
              }
            ]
          }
        ]
      }
    ]
  },
  "neet": {
    "name": "NEET",
    "subjects": [
      {
        "name": "Physics",
        "slug": "physics",
        "chapters": [
          {
            "name": "Physical World",
            "slug": "physical-world",
            "topics": [
              {
                "name": "Physics and Its Scope",
                "slug": "physics-scope"
              },
              {
                "name": "Fundamental Forces — Gravitational, Electromagnetic, Strong, Weak",
                "slug": "fundamental-forces"
              },
              {
                "name": "Nature of Physical Laws",
                "slug": "physical-laws"
              }
            ]
          },
          {
            "name": "Units and Measurements",
            "slug": "units-and-measurements",
            "topics": [
              {
                "name": "Physical Quantities — Fundamental and Derived",
                "slug": "fundamental-derived"
              },
              {
                "name": "SI Units and Their Definitions",
                "slug": "si-units"
              },
              {
                "name": "Dimensional Formula and Dimensional Equation",
                "slug": "dimensional-formula"
              },
              {
                "name": "Dimensional Analysis — Checking Consistency",
                "slug": "dimensional-consistency"
              },
              {
                "name": "Dimensional Analysis — Deriving Relations",
                "slug": "dimensional-deriving"
              },
              {
                "name": "Dimensional Analysis — Conversion of Units",
                "slug": "dimensional-conversion"
              },
              {
                "name": "Significant Figures and Rules",
                "slug": "significant-figures"
              },
              {
                "name": "Rounding Off Numbers",
                "slug": "rounding-off"
              },
              {
                "name": "Types of Errors — Systematic and Random",
                "slug": "error-types"
              },
              {
                "name": "Absolute, Relative and Percentage Error",
                "slug": "absolute-relative-error"
              }
            ]
          },
          {
            "name": "Motion in a Straight Line",
            "slug": "motion-straight-line",
            "topics": [
              {
                "name": "Position, Path Length and Displacement",
                "slug": "position-displacement"
              },
              {
                "name": "Average Velocity and Instantaneous Velocity",
                "slug": "velocity-types"
              },
              {
                "name": "Average Acceleration and Instantaneous Acceleration",
                "slug": "acceleration-types"
              },
              {
                "name": "Uniformly Accelerated Motion",
                "slug": "uniformly-accelerated"
              },
              {
                "name": "Kinematic Equations (v=u+at, s=ut+½at², v²=u²+2as)",
                "slug": "kinematic-equations"
              },
              {
                "name": "x-t, v-t and a-t Graphs — Analysis",
                "slug": "motion-graphs"
              },
              {
                "name": "Area under v-t Graph (Displacement)",
                "slug": "area-vt-graph"
              },
              {
                "name": "Free Fall and Motion Under Gravity",
                "slug": "free-fall"
              },
              {
                "name": "Reaction Time",
                "slug": "reaction-time"
              },
              {
                "name": "Relative Motion in 1D",
                "slug": "relative-motion-1d"
              }
            ]
          },
          {
            "name": "Motion in a Plane",
            "slug": "motion-plane",
            "topics": [
              {
                "name": "Scalars and Vectors — Definitions and Types",
                "slug": "scalars-vectors"
              },
              {
                "name": "Vector Addition — Triangle Law and Parallelogram Law",
                "slug": "vector-addition-laws"
              },
              {
                "name": "Resolution of Vectors into Components",
                "slug": "vector-resolution"
              },
              {
                "name": "Unit Vector and Position Vector",
                "slug": "unit-position-vector"
              },
              {
                "name": "Dot Product — Definition, Formula and Properties",
                "slug": "dot-product"
              },
              {
                "name": "Cross Product — Definition, Formula and Properties",
                "slug": "cross-product"
              },
              {
                "name": "Projectile Motion — Derivations (ToF, Range, Hmax)",
                "slug": "projectile-tof-range"
              },
              {
                "name": "Equation of Trajectory",
                "slug": "trajectory-equation"
              },
              {
                "name": "Projectile on Inclined Plane",
                "slug": "projectile-inclined"
              },
              {
                "name": "Uniform Circular Motion — Angular Quantities",
                "slug": "ucm-angular"
              }
            ]
          },
          {
            "name": "Laws of Motion",
            "slug": "laws-of-motion",
            "topics": [
              {
                "name": "Aristotle's Fallacy and Galileo's Law of Inertia",
                "slug": "aristotle-galileo"
              },
              {
                "name": "Newton's First Law — Inertia and Its Types",
                "slug": "first-law-inertia"
              },
              {
                "name": "Newton's Second Law — F = ma",
                "slug": "second-law-fma"
              },
              {
                "name": "Newton's Third Law and Action-Reaction Pairs",
                "slug": "third-law"
              },
              {
                "name": "Impulse and Impulsive Force",
                "slug": "impulse"
              },
              {
                "name": "Law of Conservation of Linear Momentum",
                "slug": "conservation-momentum"
              },
              {
                "name": "Free Body Diagram (FBD)",
                "slug": "fbd"
              },
              {
                "name": "Normal Force, Tension and Spring Force",
                "slug": "normal-tension-spring"
              },
              {
                "name": "Friction — Static, Kinetic and Rolling",
                "slug": "friction-types"
              },
              {
                "name": "Coefficient of Friction, Angle of Friction and Repose",
                "slug": "friction-coefficients"
              }
            ]
          },
          {
            "name": "Work, Energy and Power",
            "slug": "work-energy-power",
            "topics": [
              {
                "name": "Work Done by Constant and Variable Force",
                "slug": "work-constant-variable"
              },
              {
                "name": "Work-Energy Theorem",
                "slug": "work-energy-theorem"
              },
              {
                "name": "Kinetic Energy",
                "slug": "kinetic-energy"
              },
              {
                "name": "Gravitational Potential Energy",
                "slug": "gravitational-pe"
              },
              {
                "name": "Elastic Potential Energy in Spring (½kx²)",
                "slug": "spring-pe"
              },
              {
                "name": "Conservative and Non-Conservative Forces",
                "slug": "conservative-forces"
              },
              {
                "name": "Conservation of Mechanical Energy",
                "slug": "conservation-mech-energy"
              },
              {
                "name": "Power — Average and Instantaneous",
                "slug": "power-avg-inst"
              },
              {
                "name": "Collisions — Elastic and Inelastic in 1D",
                "slug": "elastic-inelastic-1d"
              },
              {
                "name": "Oblique Collisions (2D)",
                "slug": "oblique-collisions"
              }
            ]
          },
          {
            "name": "System of Particles and Rotational Motion",
            "slug": "rotational-motion",
            "topics": [
              {
                "name": "Centre of Mass — Discrete and Continuous Systems",
                "slug": "centre-of-mass"
              },
              {
                "name": "COM of Standard Bodies (Rod, Disc, Sphere, Cone, Triangle)",
                "slug": "com-standard-bodies"
              },
              {
                "name": "Motion of Centre of Mass",
                "slug": "com-motion"
              },
              {
                "name": "Angular Displacement, Velocity and Acceleration",
                "slug": "angular-kinematics"
              },
              {
                "name": "Equations of Rotational Motion",
                "slug": "rotational-equations"
              },
              {
                "name": "Torque — Definition and τ = Iα",
                "slug": "torque"
              },
              {
                "name": "Moment of Inertia — Definition and Physical Significance",
                "slug": "moi-definition"
              },
              {
                "name": "MI of Standard Bodies — Rod, Ring, Disc, Sphere, Cylinder",
                "slug": "moi-standard-bodies"
              },
              {
                "name": "Theorem of Parallel Axes",
                "slug": "parallel-axis-theorem"
              },
              {
                "name": "Theorem of Perpendicular Axes",
                "slug": "perpendicular-axis-theorem"
              }
            ]
          },
          {
            "name": "Gravitation",
            "slug": "gravitation",
            "topics": [
              {
                "name": "Kepler's Laws of Planetary Motion",
                "slug": "keplers-laws"
              },
              {
                "name": "Newton's Universal Law of Gravitation",
                "slug": "newtons-gravitation"
              },
              {
                "name": "Acceleration Due to Gravity (g) on Earth's Surface",
                "slug": "g-surface"
              },
              {
                "name": "Variation of g with Altitude",
                "slug": "g-altitude"
              },
              {
                "name": "Variation of g with Depth",
                "slug": "g-depth"
              },
              {
                "name": "Variation of g with Latitude and Rotation of Earth",
                "slug": "g-latitude-rotation"
              },
              {
                "name": "Gravitational Field Intensity",
                "slug": "gravitational-field"
              },
              {
                "name": "Gravitational Potential",
                "slug": "gravitational-potential"
              },
              {
                "name": "Gravitational Potential Energy",
                "slug": "gravitational-pe"
              },
              {
                "name": "Escape Velocity",
                "slug": "escape-velocity"
              }
            ]
          },
          {
            "name": "Mechanical Properties of Solids",
            "slug": "mechanical-properties-solids",
            "topics": [
              {
                "name": "Elasticity and Plasticity",
                "slug": "elasticity-plasticity"
              },
              {
                "name": "Types of Stress — Tensile, Compressive, Shear, Bulk",
                "slug": "stress-types"
              },
              {
                "name": "Types of Strain — Longitudinal, Shear, Volumetric",
                "slug": "strain-types"
              },
              {
                "name": "Stress-Strain Curve — Elastic Limit, Yield Point, UTS",
                "slug": "stress-strain-curve"
              },
              {
                "name": "Hooke's Law",
                "slug": "hookes-law"
              },
              {
                "name": "Young's Modulus — Definition and Numericals",
                "slug": "youngs-modulus"
              },
              {
                "name": "Bulk Modulus — Definition and Compressibility",
                "slug": "bulk-modulus"
              },
              {
                "name": "Shear Modulus (Modulus of Rigidity)",
                "slug": "shear-modulus"
              },
              {
                "name": "Poisson's Ratio",
                "slug": "poissons-ratio"
              },
              {
                "name": "Relations Among Elastic Constants",
                "slug": "elastic-constants-relation"
              }
            ]
          },
          {
            "name": "Mechanical Properties of Fluids",
            "slug": "mechanical-properties-fluids",
            "topics": [
              {
                "name": "Pressure — Thrust and Pressure in Fluid",
                "slug": "pressure-fluid"
              },
              {
                "name": "Pascal's Law and Its Applications",
                "slug": "pascals-law"
              },
              {
                "name": "Atmospheric Pressure — Gauge and Absolute",
                "slug": "atmospheric-gauge"
              },
              {
                "name": "Archimedes' Principle",
                "slug": "archimedes-principle"
              },
              {
                "name": "Buoyancy, Apparent Weight and Law of Floatation",
                "slug": "buoyancy-floatation"
              },
              {
                "name": "Equation of Continuity (A₁v₁ = A₂v₂)",
                "slug": "continuity-equation"
              },
              {
                "name": "Bernoulli's Theorem — Derivation and Applications",
                "slug": "bernoullis-theorem"
              },
              {
                "name": "Venturimeter and Pitot Tube",
                "slug": "venturimeter-pitot"
              },
              {
                "name": "Torricelli's Theorem and Speed of Efflux",
                "slug": "torricelli-efflux"
              },
              {
                "name": "Dynamic Lift — Magnus Effect, Aerofoil",
                "slug": "dynamic-lift"
              }
            ]
          },
          {
            "name": "Thermal Properties of Matter",
            "slug": "thermal-properties",
            "topics": [
              {
                "name": "Temperature Scales — Celsius, Kelvin, Fahrenheit",
                "slug": "temperature-scales"
              },
              {
                "name": "Thermal Expansion of Solids — α (Linear), β (Superficial), γ (Volumetric)",
                "slug": "expansion-solids"
              },
              {
                "name": "Thermal Expansion of Liquids — Absolute and Apparent",
                "slug": "expansion-liquids"
              },
              {
                "name": "Anomalous Expansion of Water",
                "slug": "anomalous-expansion"
              },
              {
                "name": "Thermal Expansion of Gases",
                "slug": "expansion-gases"
              },
              {
                "name": "Specific Heat Capacity and Heat Capacity",
                "slug": "specific-heat"
              },
              {
                "name": "Calorimetry — Principle and Numericals",
                "slug": "calorimetry"
              },
              {
                "name": "Latent Heat of Fusion and Vaporisation",
                "slug": "latent-heat"
              },
              {
                "name": "Heating and Cooling Curves",
                "slug": "heating-cooling-curve"
              },
              {
                "name": "Change of State — Melting, Boiling, Sublimation",
                "slug": "change-of-state"
              }
            ]
          },
          {
            "name": "Thermodynamics",
            "slug": "thermodynamics",
            "topics": [
              {
                "name": "Thermodynamic System — Types and State Variables",
                "slug": "system-state-variables"
              },
              {
                "name": "Zeroth Law and Thermal Equilibrium",
                "slug": "zeroth-law"
              },
              {
                "name": "Internal Energy",
                "slug": "internal-energy"
              },
              {
                "name": "First Law — ΔU = Q - W (Both Sign Conventions)",
                "slug": "first-law"
              },
              {
                "name": "Work Done by Gas — PV Diagram Analysis",
                "slug": "work-pv-diagram"
              },
              {
                "name": "Isothermal Process",
                "slug": "isothermal"
              },
              {
                "name": "Adiabatic Process — γ, Relations and Equations",
                "slug": "adiabatic"
              },
              {
                "name": "Isochoric Process",
                "slug": "isochoric"
              },
              {
                "name": "Isobaric Process",
                "slug": "isobaric"
              },
              {
                "name": "Polytropic Process",
                "slug": "polytropic"
              }
            ]
          },
          {
            "name": "Kinetic Theory",
            "slug": "kinetic-theory",
            "topics": [
              {
                "name": "Molecular Nature of Matter",
                "slug": "molecular-nature"
              },
              {
                "name": "Assumptions of Kinetic Theory of Gases",
                "slug": "kinetic-assumptions"
              },
              {
                "name": "Pressure Exerted by an Ideal Gas",
                "slug": "pressure-ideal-gas"
              },
              {
                "name": "Kinetic Interpretation of Temperature",
                "slug": "temperature-kinetic"
              },
              {
                "name": "RMS Speed (vrms)",
                "slug": "rms-speed"
              },
              {
                "name": "Mean Speed (v̄)",
                "slug": "mean-speed"
              },
              {
                "name": "Most Probable Speed (vp)",
                "slug": "most-probable-speed"
              },
              {
                "name": "Ratio of Speeds — vp : v̄ : vrms",
                "slug": "speed-ratios"
              },
              {
                "name": "Maxwell's Distribution of Speeds",
                "slug": "maxwell-distribution"
              },
              {
                "name": "Degrees of Freedom",
                "slug": "degrees-of-freedom"
              }
            ]
          },
          {
            "name": "Oscillations",
            "slug": "oscillations",
            "topics": [
              {
                "name": "Periodic and Oscillatory Motion",
                "slug": "periodic-oscillatory"
              },
              {
                "name": "SHM — Definition and Examples",
                "slug": "shm-definition"
              },
              {
                "name": "SHM — Differential Equation (d²x/dt² = -ω²x)",
                "slug": "shm-diff-equation"
              },
              {
                "name": "Displacement, Velocity and Acceleration in SHM",
                "slug": "shm-dva"
              },
              {
                "name": "Phase — Initial Phase and Phase Difference",
                "slug": "shm-phase"
              },
              {
                "name": "KE and PE in SHM",
                "slug": "ke-pe-shm"
              },
              {
                "name": "Total Energy in SHM (E = ½mω²A²)",
                "slug": "total-energy-shm"
              },
              {
                "name": "Spring-Mass System — T = 2π√(m/k)",
                "slug": "spring-mass-system"
              },
              {
                "name": "Springs in Series and Parallel",
                "slug": "springs-combinations"
              },
              {
                "name": "Simple Pendulum — T = 2π√(L/g)",
                "slug": "simple-pendulum"
              }
            ]
          },
          {
            "name": "Waves",
            "slug": "waves",
            "topics": [
              {
                "name": "Transverse and Longitudinal Waves",
                "slug": "transverse-longitudinal"
              },
              {
                "name": "Wave Parameters — Amplitude, Wavelength, Frequency, Period",
                "slug": "wave-parameters"
              },
              {
                "name": "Wave Equation — y = A sin(kx - ωt)",
                "slug": "wave-equation"
              },
              {
                "name": "Speed of Transverse Wave in String (v = √T/μ)",
                "slug": "speed-string"
              },
              {
                "name": "Speed of Longitudinal Wave in Medium",
                "slug": "speed-longitudinal"
              },
              {
                "name": "Speed of Sound — Newton and Laplace Formula",
                "slug": "speed-sound"
              },
              {
                "name": "Intensity of Wave (I ∝ A²)",
                "slug": "wave-intensity"
              },
              {
                "name": "Principle of Superposition of Waves",
                "slug": "superposition"
              },
              {
                "name": "Reflection at Fixed End (Phase Change) and Free End",
                "slug": "wave-reflection"
              },
              {
                "name": "Standing Waves — Condition and Formation",
                "slug": "standing-waves"
              }
            ]
          },
          {
            "name": "Electric Charges and Fields",
            "slug": "electric-charges-fields",
            "topics": [
              {
                "name": "Electric Charge — Properties and Conservation",
                "slug": "charge-properties"
              },
              {
                "name": "Conductors, Insulators and Semiconductors",
                "slug": "conductors-insulators"
              },
              {
                "name": "Methods of Charging — Friction, Conduction, Induction",
                "slug": "charging-methods"
              },
              {
                "name": "Coulomb's Law in Free Space and Medium",
                "slug": "coulombs-law"
              },
              {
                "name": "Superposition Principle for Multiple Charges",
                "slug": "superposition-principle"
              },
              {
                "name": "Electric Field — Definition and Formula",
                "slug": "electric-field-def"
              },
              {
                "name": "Electric Field due to Point Charge",
                "slug": "field-point-charge"
              },
              {
                "name": "Electric Field Lines — Properties",
                "slug": "field-lines"
              },
              {
                "name": "Electric Dipole — Definition and Dipole Moment",
                "slug": "electric-dipole"
              },
              {
                "name": "Field on Axial Line of Dipole",
                "slug": "field-axial-dipole"
              }
            ]
          },
          {
            "name": "Electrostatic Potential and Capacitance",
            "slug": "electrostatic-potential-capacitance",
            "topics": [
              {
                "name": "Electric Potential — Definition, Unit and Formula",
                "slug": "potential-definition"
              },
              {
                "name": "Relation Between E and V (E = -dV/dr)",
                "slug": "e-v-relation"
              },
              {
                "name": "Potential due to Point Charge",
                "slug": "potential-point"
              },
              {
                "name": "Potential due to Electric Dipole — Axial and Equatorial",
                "slug": "potential-dipole"
              },
              {
                "name": "Potential due to System of Charges",
                "slug": "potential-system"
              },
              {
                "name": "Equipotential Surfaces — Properties and Examples",
                "slug": "equipotential-surfaces"
              },
              {
                "name": "Potential Energy of System of Charges",
                "slug": "pe-system-charges"
              },
              {
                "name": "Potential Energy of Dipole in External Field",
                "slug": "pe-dipole-field"
              },
              {
                "name": "Conductors in Electrostatic Equilibrium",
                "slug": "conductors-equilibrium"
              },
              {
                "name": "Dielectrics — Polar and Non-Polar",
                "slug": "dielectrics-types"
              }
            ]
          },
          {
            "name": "Current Electricity",
            "slug": "current-electricity",
            "topics": [
              {
                "name": "Electric Current and Conventional Current",
                "slug": "electric-current"
              },
              {
                "name": "Drift Velocity and Mobility",
                "slug": "drift-velocity-mobility"
              },
              {
                "name": "Relation Between Current and Drift Velocity",
                "slug": "current-drift-relation"
              },
              {
                "name": "Ohm's Law — Statement and Limitations",
                "slug": "ohms-law"
              },
              {
                "name": "Resistance — Definition, Resistivity and Conductivity",
                "slug": "resistance-resistivity"
              },
              {
                "name": "Variation of Resistance with Temperature — α",
                "slug": "resistance-temperature"
              },
              {
                "name": "Colour Code for Resistors",
                "slug": "colour-code"
              },
              {
                "name": "Resistors in Series",
                "slug": "resistors-series"
              },
              {
                "name": "Resistors in Parallel",
                "slug": "resistors-parallel"
              },
              {
                "name": "Kirchhoff's Current Law (KCL / Junction Rule)",
                "slug": "kcl"
              }
            ]
          },
          {
            "name": "Moving Charges and Magnetism",
            "slug": "moving-charges-magnetism",
            "topics": [
              {
                "name": "Magnetic Field — Concept, Biot-Savart Law",
                "slug": "biot-savart-law"
              },
              {
                "name": "Magnetic Field due to Straight Finite and Infinite Wire",
                "slug": "field-wire"
              },
              {
                "name": "Magnetic Field on Axis of Circular Current Loop",
                "slug": "field-circular-loop"
              },
              {
                "name": "Ampere's Circuital Law",
                "slug": "amperes-law"
              },
              {
                "name": "Magnetic Field Inside Solenoid",
                "slug": "field-solenoid"
              },
              {
                "name": "Magnetic Field of Toroid",
                "slug": "field-toroid"
              },
              {
                "name": "Force on Moving Charge in Magnetic Field (F = qv × B)",
                "slug": "force-charge"
              },
              {
                "name": "Motion of Charged Particle — Circle, Helix",
                "slug": "particle-motion"
              },
              {
                "name": "Cyclotron — Principle, Working and Limitations",
                "slug": "cyclotron"
              },
              {
                "name": "Force on Current-Carrying Conductor in B",
                "slug": "force-conductor"
              }
            ]
          },
          {
            "name": "Magnetism and Matter",
            "slug": "magnetism-matter",
            "topics": [
              {
                "name": "Bar Magnet — Properties and Pole Strength",
                "slug": "bar-magnet"
              },
              {
                "name": "Axial Field of Bar Magnet",
                "slug": "magnet-axial-field"
              },
              {
                "name": "Equatorial Field of Bar Magnet",
                "slug": "magnet-equatorial-field"
              },
              {
                "name": "Torque on Magnetic Dipole in Uniform B",
                "slug": "magnet-torque"
              },
              {
                "name": "Potential Energy of Dipole in B",
                "slug": "dipole-pe"
              },
              {
                "name": "Gauss's Law for Magnetism",
                "slug": "gauss-magnetism"
              },
              {
                "name": "Bar Magnet as Equivalent Solenoid",
                "slug": "magnet-solenoid-equiv"
              },
              {
                "name": "Earth's Magnetic Field — Components (BH, BV, δ, I)",
                "slug": "earth-field-components"
              },
              {
                "name": "Magnetic Properties — I, H, χ, μ",
                "slug": "magnetic-properties"
              },
              {
                "name": "Diamagnetic Materials",
                "slug": "diamagnetic"
              }
            ]
          },
          {
            "name": "Electromagnetic Induction",
            "slug": "em-induction",
            "topics": [
              {
                "name": "Magnetic Flux (Φ = B·A cosθ)",
                "slug": "magnetic-flux"
              },
              {
                "name": "Faraday's First and Second Laws of Induction",
                "slug": "faradays-laws"
              },
              {
                "name": "Lenz's Law and Conservation of Energy",
                "slug": "lenzs-law"
              },
              {
                "name": "Motional EMF (ε = Bvl)",
                "slug": "motional-emf"
              },
              {
                "name": "EMF in Rotating Coil",
                "slug": "rotating-coil-emf"
              },
              {
                "name": "Eddy Currents — Causes, Effects and Uses",
                "slug": "eddy-currents"
              },
              {
                "name": "Self-Inductance (L) and Self-Induced EMF",
                "slug": "self-inductance"
              },
              {
                "name": "Self-Inductance of Solenoid (L = μ₀n²V)",
                "slug": "self-inductance-solenoid"
              },
              {
                "name": "Mutual Inductance (M) and Mutually Induced EMF",
                "slug": "mutual-inductance"
              },
              {
                "name": "Coefficient of Coupling",
                "slug": "coupling-coefficient"
              }
            ]
          },
          {
            "name": "Alternating Current",
            "slug": "alternating-current",
            "topics": [
              {
                "name": "AC Voltage — Amplitude, Angular Frequency, Phase",
                "slug": "ac-basics"
              },
              {
                "name": "Peak, RMS and Average Value",
                "slug": "ac-peak-rms-avg"
              },
              {
                "name": "AC through Pure Resistor",
                "slug": "ac-resistor"
              },
              {
                "name": "AC through Pure Inductor — Inductive Reactance (XL)",
                "slug": "ac-inductor"
              },
              {
                "name": "AC through Pure Capacitor — Capacitive Reactance (XC)",
                "slug": "ac-capacitor"
              },
              {
                "name": "Phasor Diagram — LR, RC and LC Circuits",
                "slug": "phasor-diagrams"
              },
              {
                "name": "Series RLC Circuit — Impedance Z",
                "slug": "series-rlc-impedance"
              },
              {
                "name": "Resonance in Series RLC — f₀ = 1/(2π√LC)",
                "slug": "series-resonance"
              },
              {
                "name": "Bandwidth and Quality Factor (Q)",
                "slug": "bandwidth-q-factor"
              },
              {
                "name": "Power in AC — Apparent, Real and Reactive Power",
                "slug": "power-ac-types"
              }
            ]
          },
          {
            "name": "Electromagnetic Waves",
            "slug": "em-waves",
            "topics": [
              {
                "name": "Need for Displacement Current — Limitation of Ampere's Law",
                "slug": "displacement-current-need"
              },
              {
                "name": "Displacement Current (Id = ε₀ dΦE/dt)",
                "slug": "displacement-current"
              },
              {
                "name": "Maxwell's Equations (Qualitative)",
                "slug": "maxwells-equations"
              },
              {
                "name": "EM Wave — Transverse Nature and Properties",
                "slug": "em-wave-properties"
              },
              {
                "name": "Speed of EM Waves (c = 1/√μ₀ε₀)",
                "slug": "em-wave-speed"
              },
              {
                "name": "Energy, Intensity and Momentum of EM Waves",
                "slug": "em-energy-momentum"
              },
              {
                "name": "EM Spectrum — Gamma, X-ray, UV, Visible, IR, Microwave, Radio",
                "slug": "em-spectrum-regions"
              },
              {
                "name": "Wavelength Range and Applications of Each Region",
                "slug": "em-spectrum-applications"
              }
            ]
          },
          {
            "name": "Ray Optics and Optical Instruments",
            "slug": "ray-optics",
            "topics": [
              {
                "name": "Reflection at Plane Mirror — Image Properties",
                "slug": "plane-mirror-image"
              },
              {
                "name": "Reflection at Spherical Mirror — Sign Convention",
                "slug": "spherical-mirror-convention"
              },
              {
                "name": "Mirror Formula (1/v + 1/u = 1/f)",
                "slug": "mirror-formula"
              },
              {
                "name": "Magnification by Spherical Mirror",
                "slug": "mirror-magnification"
              },
              {
                "name": "Refraction — Snell's Law",
                "slug": "snells-law"
              },
              {
                "name": "Refractive Index — Absolute and Relative",
                "slug": "refractive-index"
              },
              {
                "name": "Total Internal Reflection and Critical Angle",
                "slug": "tir-critical-angle"
              },
              {
                "name": "Applications of TIR — Optical Fibre, Diamond, Mirage",
                "slug": "tir-applications"
              },
              {
                "name": "Refraction at Spherical Surfaces",
                "slug": "refraction-spherical"
              },
              {
                "name": "Thin Lens Formula (1/v - 1/u = 1/f)",
                "slug": "thin-lens-formula"
              }
            ]
          },
          {
            "name": "Wave Optics",
            "slug": "wave-optics",
            "topics": [
              {
                "name": "Huygens' Principle",
                "slug": "huygens-principle"
              },
              {
                "name": "Coherent Sources",
                "slug": "coherent-sources"
              },
              {
                "name": "Young's Double Slit Experiment (YDSE) — Setup",
                "slug": "ydse-setup"
              },
              {
                "name": "Fringe Width β = λD/d",
                "slug": "fringe-width"
              },
              {
                "name": "Conditions for Bright and Dark Fringes",
                "slug": "bright-dark-fringes"
              },
              {
                "name": "Intensity Distribution in YDSE",
                "slug": "ydse-intensity"
              },
              {
                "name": "Effect of Thin Film in YDSE Path",
                "slug": "ydse-thin-film"
              },
              {
                "name": "Diffraction at Single Slit",
                "slug": "single-slit-diffraction"
              },
              {
                "name": "Width of Central Maximum (2λD/d)",
                "slug": "central-max-width"
              },
              {
                "name": "Resolving Power of Microscope and Telescope",
                "slug": "resolving-power"
              }
            ]
          },
          {
            "name": "Dual Nature of Radiation and Matter",
            "slug": "dual-nature",
            "topics": [
              {
                "name": "Photoelectric Effect — Discovery and Observations",
                "slug": "pe-discovery"
              },
              {
                "name": "Effect of Intensity, Frequency and Potential",
                "slug": "pe-effects"
              },
              {
                "name": "Failure of Classical Wave Theory",
                "slug": "wave-theory-failure"
              },
              {
                "name": "Einstein's Photoelectric Equation (Kmax = hν - φ)",
                "slug": "einsteins-equation"
              },
              {
                "name": "Work Function and Threshold Frequency",
                "slug": "work-function"
              },
              {
                "name": "Stopping Potential and Its Significance",
                "slug": "stopping-potential"
              },
              {
                "name": "de Broglie's Hypothesis (λ = h/mv)",
                "slug": "de-broglie-hypothesis"
              },
              {
                "name": "de Broglie Wavelength of Electron (λ = h/√2mK)",
                "slug": "de-broglie-electron"
              },
              {
                "name": "Davisson-Germer Experiment",
                "slug": "davisson-germer"
              },
              {
                "name": "Heisenberg's Uncertainty Principle (Δx·Δp ≥ h/4π)",
                "slug": "uncertainty-principle"
              }
            ]
          },
          {
            "name": "Atoms",
            "slug": "atoms",
            "topics": [
              {
                "name": "Thomson's Model and Its Failure",
                "slug": "thomson-model"
              },
              {
                "name": "Rutherford's α-Scattering Experiment",
                "slug": "alpha-scattering"
              },
              {
                "name": "Rutherford's Nuclear Model and Limitations",
                "slug": "rutherford-model"
              },
              {
                "name": "Bohr's Postulates",
                "slug": "bohr-postulates"
              },
              {
                "name": "Bohr's Radii (rn = n²a₀)",
                "slug": "bohr-radii"
              },
              {
                "name": "Bohr's Velocities (vn = v₀/n)",
                "slug": "bohr-velocities"
              },
              {
                "name": "Bohr's Energy Levels (En = -13.6/n² eV)",
                "slug": "bohr-energy-levels"
              },
              {
                "name": "Emission and Absorption Spectra",
                "slug": "emission-absorption"
              },
              {
                "name": "Hydrogen Spectral Series — Lyman, Balmer, Paschen, Brackett, Pfund",
                "slug": "spectral-series"
              },
              {
                "name": "Excitation Energy and Ionisation Energy",
                "slug": "excitation-ionisation"
              }
            ]
          },
          {
            "name": "Nuclei",
            "slug": "nuclei",
            "topics": [
              {
                "name": "Composition of Nucleus — Protons and Neutrons",
                "slug": "nucleus-composition"
              },
              {
                "name": "Atomic Mass Unit (amu) and Energy Equivalent",
                "slug": "amu-energy"
              },
              {
                "name": "Nuclear Size — R = R₀A^(1/3)",
                "slug": "nuclear-size"
              },
              {
                "name": "Nuclear Density",
                "slug": "nuclear-density"
              },
              {
                "name": "Mass Defect (Δm)",
                "slug": "mass-defect"
              },
              {
                "name": "Binding Energy (ΔmC²)",
                "slug": "binding-energy"
              },
              {
                "name": "Binding Energy per Nucleon — Graph and Significance",
                "slug": "be-nucleon-graph"
              },
              {
                "name": "Radioactivity — Discovery and Properties",
                "slug": "radioactivity"
              },
              {
                "name": "Alpha Decay — Equation and Q-Value",
                "slug": "alpha-decay"
              },
              {
                "name": "Beta Decay (β⁻ and β⁺) — Neutrino",
                "slug": "beta-decay"
              }
            ]
          },
          {
            "name": "Semiconductor Electronics: Materials, Devices and Simple Circuits",
            "slug": "semiconductor-electronics",
            "topics": [
              {
                "name": "Energy Bands — Valence, Conduction, Band Gap",
                "slug": "energy-bands"
              },
              {
                "name": "Classification — Metals, Semiconductors, Insulators",
                "slug": "band-classification"
              },
              {
                "name": "Intrinsic Semiconductor — Electron-Hole Pair",
                "slug": "intrinsic-semiconductor"
              },
              {
                "name": "Extrinsic — n-Type Semiconductor (Donor Impurity)",
                "slug": "n-type"
              },
              {
                "name": "Extrinsic — p-Type Semiconductor (Acceptor Impurity)",
                "slug": "p-type"
              },
              {
                "name": "p-n Junction Formation and Depletion Layer",
                "slug": "pn-junction"
              },
              {
                "name": "Potential Barrier",
                "slug": "potential-barrier"
              },
              {
                "name": "Forward Bias and Reverse Bias",
                "slug": "forward-reverse-bias"
              },
              {
                "name": "I-V Characteristics of p-n Junction Diode",
                "slug": "diode-iv-char"
              },
              {
                "name": "Half-Wave Rectifier",
                "slug": "half-wave-rectifier"
              }
            ]
          }
        ]
      },
      {
        "name": "Chemistry",
        "slug": "chemistry",
        "chapters": [
          {
            "name": "Some Basic Concepts of Chemistry",
            "slug": "basic-concepts",
            "topics": [
              {
                "name": "Importance and Nature of Chemistry",
                "slug": "importance-chemistry"
              },
              {
                "name": "Laws of Chemical Combination",
                "slug": "laws-combination"
              },
              {
                "name": "Dalton's Atomic Theory",
                "slug": "daltons-theory"
              },
              {
                "name": "Atomic Mass and Molecular Mass",
                "slug": "atomic-molecular-mass"
              },
              {
                "name": "Mole Concept and Avogadro's Number",
                "slug": "mole-avogadro"
              },
              {
                "name": "Molar Mass",
                "slug": "molar-mass"
              },
              {
                "name": "Percentage Composition",
                "slug": "percentage-composition"
              },
              {
                "name": "Empirical Formula from Percentage Composition",
                "slug": "empirical-from-percent"
              },
              {
                "name": "Molecular Formula from Empirical Formula",
                "slug": "molecular-from-empirical"
              },
              {
                "name": "Stoichiometry and Mole-Mole Relationship",
                "slug": "stoichiometry"
              }
            ]
          },
          {
            "name": "Structure of Atom",
            "slug": "structure-of-atom",
            "topics": [
              {
                "name": "Discovery of Electron — Cathode Ray Experiment",
                "slug": "discovery-electron"
              },
              {
                "name": "Charge-to-Mass Ratio of Electron",
                "slug": "e-m-ratio"
              },
              {
                "name": "Millikan's Oil Drop Experiment — Charge of Electron",
                "slug": "millikan-experiment"
              },
              {
                "name": "Discovery of Proton and Neutron",
                "slug": "proton-neutron"
              },
              {
                "name": "Thomson's Plum Pudding Model",
                "slug": "thomson-model-chem"
              },
              {
                "name": "Rutherford's α-Scattering and Nuclear Model",
                "slug": "rutherford-chem"
              },
              {
                "name": "Atomic Number, Mass Number, Isotopes and Isobars",
                "slug": "atomic-number-isotopes"
              },
              {
                "name": "Electromagnetic Radiation — Wave Nature",
                "slug": "em-radiation-wave"
              },
              {
                "name": "Planck's Quantum Theory and Energy of Photon",
                "slug": "planck-theory"
              },
              {
                "name": "Photoelectric Effect",
                "slug": "photoelectric-chem"
              }
            ]
          },
          {
            "name": "Classification of Elements and Periodicity in Properties",
            "slug": "periodic-table",
            "topics": [
              {
                "name": "History — Döbereiner's Triads, Newlands' Law of Octaves",
                "slug": "history-triads-octaves"
              },
              {
                "name": "Mendeleev's Periodic Table and Its Limitations",
                "slug": "mendeleev-table"
              },
              {
                "name": "Modern Periodic Law and Long Form of Table",
                "slug": "modern-table"
              },
              {
                "name": "s, p, d, f Block Classification",
                "slug": "block-classification"
              },
              {
                "name": "Atomic Radius — Covalent, Metallic, Van der Waals",
                "slug": "atomic-radius-types"
              },
              {
                "name": "Trend of Atomic Radius in Period (Decreases)",
                "slug": "atomic-radius-period"
              },
              {
                "name": "Trend of Atomic Radius in Group (Increases)",
                "slug": "atomic-radius-group"
              },
              {
                "name": "Ionic Radius and Isoelectronic Species",
                "slug": "ionic-radius"
              },
              {
                "name": "Ionisation Enthalpy — Definition",
                "slug": "ie-def"
              },
              {
                "name": "Trends of IE in Period and Group",
                "slug": "ie-trends"
              }
            ]
          },
          {
            "name": "Chemical Bonding and Molecular Structure",
            "slug": "chemical-bonding",
            "topics": [
              {
                "name": "Kossel-Lewis Approach — Octet Rule",
                "slug": "octet-rule"
              },
              {
                "name": "Lewis Dot Structures",
                "slug": "lewis-dot"
              },
              {
                "name": "Exceptions to Octet Rule",
                "slug": "octet-exceptions"
              },
              {
                "name": "Formal Charge Calculation",
                "slug": "formal-charge"
              },
              {
                "name": "Ionic Bond — Formation and Conditions",
                "slug": "ionic-bond"
              },
              {
                "name": "Lattice Enthalpy and Born-Haber Cycle",
                "slug": "lattice-born-haber"
              },
              {
                "name": "Covalent Bond — σ and π Bonds",
                "slug": "sigma-pi-bonds"
              },
              {
                "name": "Bond Parameters — Length, Energy, Angle, Order",
                "slug": "bond-parameters"
              },
              {
                "name": "Polar Covalent Bond and Dipole Moment",
                "slug": "polar-dipole"
              },
              {
                "name": "Resonance Structures and Resonance Energy",
                "slug": "resonance"
              }
            ]
          },
          {
            "name": "States of Matter",
            "slug": "states-of-matter",
            "topics": [
              {
                "name": "Intermolecular Forces and Effect on State",
                "slug": "intermolecular-forces"
              },
              {
                "name": "Boyle's Law",
                "slug": "boyles-law"
              },
              {
                "name": "Charles's Law",
                "slug": "charless-law"
              },
              {
                "name": "Gay-Lussac's Law",
                "slug": "gay-lussac-law"
              },
              {
                "name": "Avogadro's Law and Molar Volume at STP",
                "slug": "avogadros-law"
              },
              {
                "name": "Ideal Gas Equation (PV = nRT)",
                "slug": "ideal-gas-eq"
              },
              {
                "name": "Dalton's Law of Partial Pressure",
                "slug": "daltons-partial-pressure"
              },
              {
                "name": "Kinetic Molecular Theory of Gases",
                "slug": "kmt"
              },
              {
                "name": "Molecular Speed Distribution — Maxwell",
                "slug": "maxwell-speed"
              },
              {
                "name": "RMS, Mean and Most Probable Speed",
                "slug": "speed-types"
              }
            ]
          },
          {
            "name": "Thermodynamics",
            "slug": "thermodynamics-chem",
            "topics": [
              {
                "name": "System, Surroundings — Open, Closed, Isolated",
                "slug": "system-types"
              },
              {
                "name": "Thermodynamic State Functions",
                "slug": "state-functions"
              },
              {
                "name": "Extensive and Intensive Properties",
                "slug": "extensive-intensive"
              },
              {
                "name": "Isothermal, Adiabatic, Isochoric, Isobaric Processes",
                "slug": "thermo-processes"
              },
              {
                "name": "Heat (q) and Work (w) — Sign Conventions",
                "slug": "heat-work-signs"
              },
              {
                "name": "First Law — ΔU = q + w",
                "slug": "first-law-chem"
              },
              {
                "name": "Enthalpy (H = U + pV)",
                "slug": "enthalpy"
              },
              {
                "name": "ΔH = ΔU + ΔngRT",
                "slug": "dh-du-relation"
              },
              {
                "name": "Standard Enthalpy of Formation (ΔfH°)",
                "slug": "standard-formation"
              },
              {
                "name": "Hess's Law of Constant Heat Summation",
                "slug": "hesss-law"
              }
            ]
          },
          {
            "name": "Equilibrium",
            "slug": "equilibrium",
            "topics": [
              {
                "name": "Physical and Chemical Equilibrium",
                "slug": "physical-chemical-eq"
              },
              {
                "name": "Law of Mass Action",
                "slug": "law-mass-action"
              },
              {
                "name": "Kc — Expression and Units",
                "slug": "kc-expression"
              },
              {
                "name": "Kp — Expression and Units",
                "slug": "kp-expression"
              },
              {
                "name": "Relation Between Kc and Kp (Kp = Kc(RT)^Δn)",
                "slug": "kc-kp-relation"
              },
              {
                "name": "Homogeneous and Heterogeneous Equilibrium",
                "slug": "homo-heterogeneous-eq"
              },
              {
                "name": "Characteristics of Equilibrium Constant",
                "slug": "k-characteristics"
              },
              {
                "name": "Reaction Quotient (Qc) and Direction of Reaction",
                "slug": "reaction-quotient"
              },
              {
                "name": "Le Chatelier's Principle",
                "slug": "le-chateliers"
              },
              {
                "name": "Effect of Concentration, Pressure, Temperature on K",
                "slug": "equilibrium-effects"
              }
            ]
          },
          {
            "name": "Redox Reactions",
            "slug": "redox-reactions",
            "topics": [
              {
                "name": "Oxidation and Reduction — Electronic Concept",
                "slug": "oxidation-reduction-def"
              },
              {
                "name": "Oxidation Number — Rules and Calculation",
                "slug": "oxidation-number-rules"
              },
              {
                "name": "Oxidising and Reducing Agents",
                "slug": "oxidising-reducing"
              },
              {
                "name": "Balancing by Oxidation Number Method",
                "slug": "ox-number-balancing"
              },
              {
                "name": "Half-Reaction Method — Acidic Medium",
                "slug": "half-reaction-acidic"
              },
              {
                "name": "Half-Reaction Method — Basic Medium",
                "slug": "half-reaction-basic"
              },
              {
                "name": "Types — Combination, Decomposition, Displacement, Disproportionation",
                "slug": "redox-types"
              },
              {
                "name": "Electrochemical Series and Standard Reduction Potential",
                "slug": "electrochemical-series"
              }
            ]
          },
          {
            "name": "Hydrogen",
            "slug": "hydrogen",
            "topics": [
              {
                "name": "Position of Hydrogen — Unique Character",
                "slug": "hydrogen-unique"
              },
              {
                "name": "Isotopes — Protium, Deuterium (D₂O), Tritium",
                "slug": "hydrogen-isotopes"
              },
              {
                "name": "Preparation of Hydrogen — Laboratory Methods",
                "slug": "hydrogen-lab-prep"
              },
              {
                "name": "Industrial Preparation — Steam Reforming",
                "slug": "hydrogen-industrial"
              },
              {
                "name": "Properties of Molecular Hydrogen",
                "slug": "hydrogen-properties"
              },
              {
                "name": "Hydrides — Ionic, Covalent, Metallic",
                "slug": "hydrides-types"
              },
              {
                "name": "Water — Structure and Unique Properties",
                "slug": "water-structure"
              },
              {
                "name": "Anomalous Expansion of Water",
                "slug": "water-anomalous"
              },
              {
                "name": "Hard Water — Temporary and Permanent",
                "slug": "hard-water"
              },
              {
                "name": "Removal of Hardness",
                "slug": "hardness-removal"
              }
            ]
          },
          {
            "name": "The s-Block Elements",
            "slug": "s-block",
            "topics": [
              {
                "name": "General Characteristics — Electronic Configuration, Properties",
                "slug": "s-block-general"
              },
              {
                "name": "Alkali Metals — Physical Properties and Trends",
                "slug": "alkali-physical"
              },
              {
                "name": "Alkali Metals — Chemical Properties",
                "slug": "alkali-chemical"
              },
              {
                "name": "Anomalous Behaviour of Lithium",
                "slug": "li-anomalous"
              },
              {
                "name": "Diagonal Relationship — Li and Mg",
                "slug": "li-mg-diagonal"
              },
              {
                "name": "NaOH — Preparation (Castner-Kellner) and Properties",
                "slug": "naoh"
              },
              {
                "name": "Na₂CO₃ — Solvay Process and Properties",
                "slug": "na2co3"
              },
              {
                "name": "NaHCO₃ and NaCl",
                "slug": "nahco3-nacl"
              },
              {
                "name": "Alkaline Earth Metals — Physical Properties",
                "slug": "ae-physical"
              },
              {
                "name": "Alkaline Earth Metals — Chemical Properties",
                "slug": "ae-chemical"
              }
            ]
          },
          {
            "name": "The p-Block Elements (Groups 13 and 14)",
            "slug": "p-block-11",
            "topics": [
              {
                "name": "Group 13 — General Properties and Trends",
                "slug": "group13-general"
              },
              {
                "name": "Boron — Allotropes, Structure and Properties",
                "slug": "boron-properties"
              },
              {
                "name": "Borax (Na₂B₄O₇) — Structure and Reactions",
                "slug": "borax"
              },
              {
                "name": "Boric Acid — Structure and Reactions",
                "slug": "boric-acid"
              },
              {
                "name": "Diborane — Structure and Preparation",
                "slug": "diborane"
              },
              {
                "name": "Aluminium — Properties and Reactions",
                "slug": "aluminium"
              },
              {
                "name": "Alums",
                "slug": "alums"
              },
              {
                "name": "Group 14 — General Properties and Trends",
                "slug": "group14-general"
              },
              {
                "name": "Catenation and Allotropy of Carbon",
                "slug": "catenation-allotropy"
              },
              {
                "name": "Diamond — Structure and Properties",
                "slug": "diamond"
              }
            ]
          },
          {
            "name": "Organic Chemistry: Some Basic Principles and Techniques",
            "slug": "organic-basics",
            "topics": [
              {
                "name": "Tetravalency of Carbon — Catenation",
                "slug": "tetravalency"
              },
              {
                "name": "Classification — Acyclic, Cyclic, Aromatic, Heterocyclic",
                "slug": "classification-organic"
              },
              {
                "name": "Functional Groups",
                "slug": "functional-groups"
              },
              {
                "name": "IUPAC Nomenclature — Alkanes",
                "slug": "iupac-alkanes"
              },
              {
                "name": "IUPAC Nomenclature — Alkenes and Alkynes",
                "slug": "iupac-alkenes-alkynes"
              },
              {
                "name": "IUPAC Nomenclature — Functional Group Compounds",
                "slug": "iupac-functional-groups"
              },
              {
                "name": "Chain, Position and Functional Group Isomerism",
                "slug": "structural-isomerism-types"
              },
              {
                "name": "Optical Isomerism — Chirality and Enantiomers",
                "slug": "optical-isomerism"
              },
              {
                "name": "R and S Configuration",
                "slug": "r-s-configuration"
              },
              {
                "name": "Geometrical Isomerism — cis-trans",
                "slug": "cis-trans-isomerism"
              }
            ]
          },
          {
            "name": "Hydrocarbons",
            "slug": "hydrocarbons",
            "topics": [
              {
                "name": "Alkanes — IUPAC Nomenclature and Isomers",
                "slug": "alkanes-nomenclature"
              },
              {
                "name": "Alkanes — Preparation",
                "slug": "alkanes-prep"
              },
              {
                "name": "Alkanes — Physical Properties",
                "slug": "alkanes-physical"
              },
              {
                "name": "Free Radical Halogenation — Mechanism and Selectivity",
                "slug": "free-radical-halogenation"
              },
              {
                "name": "Alkanes — Combustion",
                "slug": "alkanes-combustion"
              },
              {
                "name": "Alkenes — IUPAC and Structural Isomers",
                "slug": "alkenes-nomenclature"
              },
              {
                "name": "Alkenes — Preparation (Dehydration, Dehydrohalogenation)",
                "slug": "alkenes-prep"
              },
              {
                "name": "Mechanism of Electrophilic Addition",
                "slug": "eas-mechanism-alkenes"
              },
              {
                "name": "Markovnikov's Rule",
                "slug": "markovnikov-rule"
              },
              {
                "name": "Anti-Markovnikov (Peroxide Effect / HBr only)",
                "slug": "anti-markovnikov"
              }
            ]
          },
          {
            "name": "Environmental Chemistry",
            "slug": "environmental-chemistry",
            "topics": [
              {
                "name": "Troposphere, Stratosphere, Mesosphere, Thermosphere",
                "slug": "atmospheric-layers"
              },
              {
                "name": "Tropospheric Pollution — Gaseous Pollutants",
                "slug": "gaseous-pollutants"
              },
              {
                "name": "Particulate Pollutants",
                "slug": "particulate-pollutants"
              },
              {
                "name": "Smog — Classical and Photochemical",
                "slug": "smog-types"
              },
              {
                "name": "Acid Rain — Formation and Effects on Ecosystem",
                "slug": "acid-rain"
              },
              {
                "name": "Greenhouse Effect and Global Warming",
                "slug": "greenhouse-global-warming"
              },
              {
                "name": "Ozone Layer — Formation and Depletion (CFCs)",
                "slug": "ozone-layer-depletion"
              },
              {
                "name": "Water Pollution — Industrial, Domestic, Agricultural",
                "slug": "water-pollution-sources"
              },
              {
                "name": "BOD and COD",
                "slug": "bod-cod"
              },
              {
                "name": "Water Treatment",
                "slug": "water-treatment"
              }
            ]
          },
          {
            "name": "The Solid State",
            "slug": "solid-state",
            "topics": [
              {
                "name": "Crystalline vs Amorphous Solids",
                "slug": "crystalline-amorphous"
              },
              {
                "name": "Types of Solids — Ionic, Molecular, Covalent, Metallic",
                "slug": "solid-types"
              },
              {
                "name": "Crystal Lattice and Unit Cell",
                "slug": "crystal-lattice"
              },
              {
                "name": "Primitive (SCC), BCC and FCC Unit Cells",
                "slug": "unit-cell-types"
              },
              {
                "name": "Number of Atoms per Unit Cell",
                "slug": "atoms-per-cell"
              },
              {
                "name": "Packing Efficiency — SCC (52.4%), BCC (68%), FCC (74%)",
                "slug": "packing-efficiency"
              },
              {
                "name": "Tetrahedral and Octahedral Voids",
                "slug": "voids-types"
              },
              {
                "name": "Close Packing in 2D and 3D — HCP and CCP",
                "slug": "close-packing"
              },
              {
                "name": "Density Calculation from Unit Cell",
                "slug": "density-calculation"
              },
              {
                "name": "Structures — NaCl, ZnS (Zinc Blende and Wurtzite), CsCl, Diamond",
                "slug": "ionic-structures"
              }
            ]
          },
          {
            "name": "Solutions",
            "slug": "solutions",
            "topics": [
              {
                "name": "Types of Solutions — Solid, Liquid, Gas",
                "slug": "solution-types"
              },
              {
                "name": "Solubility of Solid in Liquid",
                "slug": "solubility-solid"
              },
              {
                "name": "Henry's Law for Gas Solubility",
                "slug": "henrys-law"
              },
              {
                "name": "Concentration Terms — Molarity, Molality, Mole Fraction, % w/v, ppm",
                "slug": "concentration-terms"
              },
              {
                "name": "Interconversion of Concentration Terms",
                "slug": "concentration-interconversion"
              },
              {
                "name": "Vapour Pressure and Raoult's Law",
                "slug": "raoults-law"
              },
              {
                "name": "Raoult's Law for Volatile-Volatile Mixtures",
                "slug": "raoult-volatile-mix"
              },
              {
                "name": "Ideal and Non-Ideal Solutions",
                "slug": "ideal-nonideal"
              },
              {
                "name": "Positive Deviation (PA > PA° xA)",
                "slug": "positive-deviation"
              },
              {
                "name": "Negative Deviation",
                "slug": "negative-deviation"
              }
            ]
          },
          {
            "name": "Electrochemistry",
            "slug": "electrochemistry",
            "topics": [
              {
                "name": "Electrochemical Cell — Galvanic vs Electrolytic",
                "slug": "cell-types"
              },
              {
                "name": "Daniel Cell — Working and Cell Reaction",
                "slug": "daniel-cell"
              },
              {
                "name": "Cell Notation and Salt Bridge Function",
                "slug": "cell-notation"
              },
              {
                "name": "Standard Electrode Potential (E° at SHE)",
                "slug": "standard-electrode"
              },
              {
                "name": "Cell Potential (E°cell = E°cathode - E°anode)",
                "slug": "cell-potential"
              },
              {
                "name": "Electrochemical Series and Applications",
                "slug": "electrochemical-series"
              },
              {
                "name": "Nernst Equation",
                "slug": "nernst-equation"
              },
              {
                "name": "Equilibrium Constant from E°cell (lnK = nFE°/RT)",
                "slug": "k-from-ecell"
              },
              {
                "name": "Relationship ΔG° = -nFE°",
                "slug": "delta-g-ecell"
              },
              {
                "name": "Electrolysis — Faraday's First Law",
                "slug": "faradays-first"
              }
            ]
          },
          {
            "name": "Chemical Kinetics",
            "slug": "chemical-kinetics",
            "topics": [
              {
                "name": "Rate of Reaction — Average and Instantaneous",
                "slug": "rate-of-reaction"
              },
              {
                "name": "Rate Expression and Rate Constant Units",
                "slug": "rate-expression-units"
              },
              {
                "name": "Factors Affecting Rate",
                "slug": "rate-factors"
              },
              {
                "name": "Rate Law (Rate = k[A]^m[B]^n)",
                "slug": "rate-law"
              },
              {
                "name": "Order of Reaction — Zero, First, Second",
                "slug": "order-types"
              },
              {
                "name": "Molecularity",
                "slug": "molecularity"
              },
              {
                "name": "Integrated Rate Law — Zero Order",
                "slug": "zero-order-integrated"
              },
              {
                "name": "Integrated Rate Law — First Order (k = (2.303/t)log(a/(a-x)))",
                "slug": "first-order-integrated"
              },
              {
                "name": "Half-Life — Zero Order (t₁/₂ = a/2k)",
                "slug": "half-life-zero"
              },
              {
                "name": "Half-Life — First Order (t₁/₂ = 0.693/k)",
                "slug": "half-life-first"
              }
            ]
          },
          {
            "name": "Surface Chemistry",
            "slug": "surface-chemistry",
            "topics": [
              {
                "name": "Adsorption — Physisorption vs Chemisorption",
                "slug": "adsorption-types"
              },
              {
                "name": "Freundlich Adsorption Isotherm",
                "slug": "freundlich-isotherm"
              },
              {
                "name": "Langmuir Adsorption Isotherm",
                "slug": "langmuir-isotherm"
              },
              {
                "name": "Factors Affecting Adsorption",
                "slug": "adsorption-factors"
              },
              {
                "name": "Homogeneous Catalysis",
                "slug": "homogeneous-catalysis"
              },
              {
                "name": "Heterogeneous Catalysis — Mechanism",
                "slug": "heterogeneous-catalysis"
              },
              {
                "name": "Enzyme Catalysis and Lock-Key Mechanism",
                "slug": "enzyme-catalysis"
              },
              {
                "name": "Zeolites",
                "slug": "zeolites"
              },
              {
                "name": "Colloid — Definition, Types and Classification",
                "slug": "colloid-types"
              },
              {
                "name": "Preparation of Colloids — Chemical, Bredig's Arc",
                "slug": "colloid-preparation"
              }
            ]
          },
          {
            "name": "General Principles and Processes of Isolation of Elements",
            "slug": "metallurgy",
            "topics": [
              {
                "name": "Minerals and Ores",
                "slug": "minerals-ores"
              },
              {
                "name": "Concentration — Gravity Separation, Froth Flotation",
                "slug": "concentration-methods"
              },
              {
                "name": "Electromagnetic Separation and Chemical Leaching",
                "slug": "electromagnetic-leaching"
              },
              {
                "name": "Calcination and Roasting",
                "slug": "calcination-roasting"
              },
              {
                "name": "Smelting and Carbon Reduction",
                "slug": "smelting-reduction"
              },
              {
                "name": "Thermodynamic Principles — Ellingham Diagram",
                "slug": "ellingham-diagram"
              },
              {
                "name": "Electrochemical Reduction",
                "slug": "electrochemical-reduction"
              },
              {
                "name": "Refining — Distillation, Liquation",
                "slug": "refining-distillation"
              },
              {
                "name": "Electrolytic Refining",
                "slug": "electrolytic-refining"
              },
              {
                "name": "Zone Refining",
                "slug": "zone-refining"
              }
            ]
          },
          {
            "name": "The p-Block Elements (Groups 15, 16, 17 and 18)",
            "slug": "p-block-12",
            "topics": [
              {
                "name": "Group 15 — General Properties",
                "slug": "group15-general"
              },
              {
                "name": "Nitrogen — Physical and Chemical Properties",
                "slug": "nitrogen-properties"
              },
              {
                "name": "Ammonia — Haber Process, Properties and Uses",
                "slug": "ammonia-haber"
              },
              {
                "name": "Nitric Acid — Ostwald Process, Properties",
                "slug": "nitric-acid-ostwald"
              },
              {
                "name": "Oxides of Nitrogen (N₂O to N₂O₅)",
                "slug": "nitrogen-oxides"
              },
              {
                "name": "Oxoacids of Nitrogen",
                "slug": "oxoacids-nitrogen"
              },
              {
                "name": "Phosphorus — Allotropes",
                "slug": "phosphorus-allotropes"
              },
              {
                "name": "Phosphine (PH₃) — Preparation and Properties",
                "slug": "phosphine"
              },
              {
                "name": "PCl₃ and PCl₅ — Structure and Properties",
                "slug": "pcl3-pcl5"
              },
              {
                "name": "Oxoacids of Phosphorus",
                "slug": "oxoacids-phosphorus"
              }
            ]
          },
          {
            "name": "The d- and f-Block Elements",
            "slug": "d-f-block",
            "topics": [
              {
                "name": "Position and Electronic Configuration",
                "slug": "transition-position"
              },
              {
                "name": "Metallic Character and Melting Point",
                "slug": "transition-metallic"
              },
              {
                "name": "Density and Atomic/Ionic Radius Trend",
                "slug": "transition-radius"
              },
              {
                "name": "Variable Oxidation States and Stability",
                "slug": "variable-oxidation"
              },
              {
                "name": "Ionisation Enthalpy of Transition Metals",
                "slug": "transition-ie"
              },
              {
                "name": "Colour of Transition Metal Compounds",
                "slug": "transition-colour"
              },
              {
                "name": "Magnetic Properties — Spin-Only Formula",
                "slug": "spin-only-formula"
              },
              {
                "name": "Catalytic Properties",
                "slug": "transition-catalysis"
              },
              {
                "name": "Interstitial Compounds",
                "slug": "interstitial-compounds"
              },
              {
                "name": "Alloy Formation",
                "slug": "alloy-formation"
              }
            ]
          },
          {
            "name": "Coordination Compounds",
            "slug": "coordination-compounds",
            "topics": [
              {
                "name": "Werner's Theory of Coordination",
                "slug": "werners-theory"
              },
              {
                "name": "Key Terms — Coordination Entity, Central Atom, Ligand, CN",
                "slug": "key-terms"
              },
              {
                "name": "Types of Ligands — Mono, Bi, Poly, Ambidentate, Chelate",
                "slug": "types-ligands"
              },
              {
                "name": "IUPAC Nomenclature Rules",
                "slug": "iupac-rules-coord"
              },
              {
                "name": "IUPAC Nomenclature — Worked Examples",
                "slug": "iupac-worked"
              },
              {
                "name": "Isomerism — Ionisation Isomerism",
                "slug": "ionisation-isomerism"
              },
              {
                "name": "Hydrate, Linkage, Coordination Isomerism",
                "slug": "hydrate-linkage-coord"
              },
              {
                "name": "Geometric Isomerism — Square Planar and Octahedral",
                "slug": "geometric-isomerism"
              },
              {
                "name": "Optical Isomerism in Coordination Compounds",
                "slug": "optical-isomerism-coord"
              },
              {
                "name": "Valence Bond Theory (VBT) — Inner and Outer Orbital",
                "slug": "vbt-inner-outer"
              }
            ]
          },
          {
            "name": "Haloalkanes and Haloarenes",
            "slug": "haloalkanes-haloarenes",
            "topics": [
              {
                "name": "Classification and IUPAC Nomenclature",
                "slug": "halo-classification-iupac"
              },
              {
                "name": "Nature of C-X Bond and Physical Properties",
                "slug": "cx-bond-properties"
              },
              {
                "name": "Preparation from Alcohols, Alkenes and Alkanes",
                "slug": "halo-preparation"
              },
              {
                "name": "SN1 Mechanism — Steps and Energy Profile",
                "slug": "sn1-mechanism"
              },
              {
                "name": "SN2 Mechanism — Steps and Stereochemistry",
                "slug": "sn2-mechanism"
              },
              {
                "name": "Factors — Substrate, Nucleophile, Solvent, Leaving Group",
                "slug": "sn-factors"
              },
              {
                "name": "Walden Inversion in SN2",
                "slug": "walden-inversion"
              },
              {
                "name": "E1 Elimination Mechanism",
                "slug": "e1-mechanism"
              },
              {
                "name": "E2 Elimination and Zaitsev's Rule",
                "slug": "e2-zaitsev"
              },
              {
                "name": "SN2 vs E2 Competition",
                "slug": "sn2-e2-competition"
              }
            ]
          },
          {
            "name": "Alcohols, Phenols and Ethers",
            "slug": "alcohols-phenols-ethers",
            "topics": [
              {
                "name": "Classification and IUPAC of Alcohols",
                "slug": "alcohol-classification-iupac"
              },
              {
                "name": "Preparation of Monohydric Alcohols",
                "slug": "alcohol-monohydric-prep"
              },
              {
                "name": "Preparation from Grignard Reagent",
                "slug": "grignard-prep"
              },
              {
                "name": "Physical Properties — Boiling Points, Hydrogen Bonding",
                "slug": "alcohol-physical"
              },
              {
                "name": "Chemical Reactions — Acidity of Alcohols",
                "slug": "alcohol-acidity"
              },
              {
                "name": "Esterification (Fischer-Speier)",
                "slug": "esterification"
              },
              {
                "name": "Dehydration — E1 and E2 Pathway",
                "slug": "dehydration"
              },
              {
                "name": "Lucas Test",
                "slug": "lucas-test"
              },
              {
                "name": "Oxidation — Primary to Aldehyde/Acid, Secondary to Ketone",
                "slug": "alcohol-oxidation"
              },
              {
                "name": "Preparation of Phenols",
                "slug": "phenol-prep"
              }
            ]
          },
          {
            "name": "Aldehydes, Ketones and Carboxylic Acids",
            "slug": "aldehydes-ketones-acids",
            "topics": [
              {
                "name": "Nomenclature and Classification",
                "slug": "carbonyl-nomenclature"
              },
              {
                "name": "Preparation of Aldehydes",
                "slug": "aldehyde-prep"
              },
              {
                "name": "Preparation of Ketones",
                "slug": "ketone-prep"
              },
              {
                "name": "Physical Properties",
                "slug": "carbonyl-physical"
              },
              {
                "name": "Nucleophilic Addition — Mechanism",
                "slug": "nucleophilic-addition"
              },
              {
                "name": "Addition of HCN",
                "slug": "addition-hcn"
              },
              {
                "name": "Addition of NaHSO₃",
                "slug": "addition-nahso3"
              },
              {
                "name": "Addition of Grignard Reagent",
                "slug": "addition-grignard"
              },
              {
                "name": "Addition of NH₃ Derivatives",
                "slug": "addition-nh3-derivatives"
              },
              {
                "name": "Reduction — Clemmensen and Wolff-Kishner",
                "slug": "clemmensen-wolff-kishner"
              }
            ]
          },
          {
            "name": "Amines",
            "slug": "amines",
            "topics": [
              {
                "name": "Classification and IUPAC Nomenclature",
                "slug": "amines-nomenclature"
              },
              {
                "name": "Preparation — Gabriel Synthesis",
                "slug": "gabriel-synthesis"
              },
              {
                "name": "Hoffmann Bromamide Degradation",
                "slug": "hoffmann-degradation"
              },
              {
                "name": "Reduction of Nitrogen Compounds",
                "slug": "reduction-nitrogen"
              },
              {
                "name": "Physical Properties",
                "slug": "amines-physical"
              },
              {
                "name": "Basicity — pKb Values",
                "slug": "amines-basicity"
              },
              {
                "name": "Comparison — Aliphatic vs Aromatic Amines",
                "slug": "aliphatic-aromatic-amines"
              },
              {
                "name": "Effect of Substituents on Basicity",
                "slug": "substituent-basicity"
              },
              {
                "name": "Reactions with Acids and Acylation",
                "slug": "amine-acylation"
              },
              {
                "name": "Reaction with Nitrous Acid (Diazotisation)",
                "slug": "diazotisation"
              }
            ]
          },
          {
            "name": "Biomolecules",
            "slug": "biomolecules",
            "topics": [
              {
                "name": "Carbohydrates — Definition and Classification",
                "slug": "carbohydrates-classification"
              },
              {
                "name": "Glucose — Open Chain and Cyclic (Haworth) Structure",
                "slug": "glucose-structure"
              },
              {
                "name": "Fructose Structure and Mutarotation",
                "slug": "fructose-mutarotation"
              },
              {
                "name": "Disaccharides — Sucrose, Maltose, Lactose",
                "slug": "disaccharides"
              },
              {
                "name": "Polysaccharides — Starch, Cellulose, Glycogen",
                "slug": "polysaccharides"
              },
              {
                "name": "Reducing and Non-Reducing Sugars",
                "slug": "reducing-non-reducing"
              },
              {
                "name": "Glycosidic Bond",
                "slug": "glycosidic-bond"
              },
              {
                "name": "Amino Acids — Structure and Classification",
                "slug": "amino-acids-structure"
              },
              {
                "name": "Essential Amino Acids",
                "slug": "essential-amino-acids"
              },
              {
                "name": "Zwitter Ion",
                "slug": "zwitter-ion"
              }
            ]
          },
          {
            "name": "Polymers",
            "slug": "polymers",
            "topics": [
              {
                "name": "Polymer Terminology — Monomer, Repeat Unit, Chain",
                "slug": "polymer-terminology"
              },
              {
                "name": "Classification — Natural, Synthetic, Semi-Synthetic",
                "slug": "polymer-classification-origin"
              },
              {
                "name": "Classification — Addition and Condensation",
                "slug": "polymer-addition-cond"
              },
              {
                "name": "Classification — Biodegradable and Non-Biodegradable",
                "slug": "polymer-biodegradable"
              },
              {
                "name": "Addition Polymerisation — Free Radical Mechanism",
                "slug": "addition-mechanism"
              },
              {
                "name": "Condensation Polymerisation — Mechanism",
                "slug": "condensation-mechanism"
              },
              {
                "name": "Copolymerisation",
                "slug": "copolymerisation"
              },
              {
                "name": "Natural Rubber and Vulcanisation",
                "slug": "rubber-vulcanisation"
              },
              {
                "name": "Synthetic Rubbers — Neoprene, Buna-S, Buna-N",
                "slug": "synthetic-rubbers"
              },
              {
                "name": "Polyethylene — LDPE and HDPE",
                "slug": "polyethylene"
              }
            ]
          },
          {
            "name": "Chemistry in Everyday Life",
            "slug": "chemistry-everyday-life",
            "topics": [
              {
                "name": "Drugs — Definition and Classification",
                "slug": "drugs-classification"
              },
              {
                "name": "Drug-Target Interaction — Enzyme and Receptor",
                "slug": "drug-target-interaction"
              },
              {
                "name": "Analgesics — Narcotics and Non-Narcotics",
                "slug": "analgesics"
              },
              {
                "name": "Tranquilisers",
                "slug": "tranquilisers"
              },
              {
                "name": "Antiseptics and Disinfectants",
                "slug": "antiseptics-disinfectants"
              },
              {
                "name": "Antibiotics — Bactericidal and Bacteriostatic",
                "slug": "antibiotics"
              },
              {
                "name": "Antacids and Antihistamines",
                "slug": "antacids-antihistamines"
              },
              {
                "name": "Antifertility Drugs",
                "slug": "antifertility"
              },
              {
                "name": "Chemicals in Food — Preservatives",
                "slug": "food-preservatives"
              },
              {
                "name": "Artificial Sweeteners",
                "slug": "artificial-sweeteners"
              }
            ]
          }
        ]
      },
      {
        "name": "Biology",
        "slug": "biology",
        "chapters": [
          {
            "name": "The Living World",
            "slug": "the-living-world",
            "topics": [
              {
                "name": "What is Living? — Criteria",
                "slug": "what-is-living"
              },
              {
                "name": "Taxonomic Categories and Hierarchy",
                "slug": "taxonomic-hierarchy"
              },
              {
                "name": "Binomial Nomenclature",
                "slug": "binomial-nomenclature"
              },
              {
                "name": "Taxonomical Aids",
                "slug": "taxonomical-aids"
              }
            ]
          },
          {
            "name": "Biological Classification",
            "slug": "biological-classification",
            "topics": [
              {
                "name": "Five Kingdom Classification",
                "slug": "five-kingdom"
              },
              {
                "name": "Kingdom Monera",
                "slug": "monera"
              },
              {
                "name": "Kingdom Protista",
                "slug": "protista"
              },
              {
                "name": "Kingdom Fungi",
                "slug": "fungi"
              },
              {
                "name": "Viruses, Viroids and Lichens",
                "slug": "viruses-viroids-lichens"
              }
            ]
          },
          {
            "name": "Plant Kingdom",
            "slug": "plant-kingdom",
            "topics": [
              {
                "name": "Algae",
                "slug": "algae"
              },
              {
                "name": "Bryophytes",
                "slug": "bryophytes"
              },
              {
                "name": "Pteridophytes",
                "slug": "pteridophytes"
              },
              {
                "name": "Gymnosperms",
                "slug": "gymnosperms"
              },
              {
                "name": "Angiosperms",
                "slug": "angiosperms"
              },
              {
                "name": "Alternation of Generations",
                "slug": "alternation-generations"
              }
            ]
          },
          {
            "name": "Animal Kingdom",
            "slug": "animal-kingdom",
            "topics": [
              {
                "name": "Basis of Classification",
                "slug": "basis-classification"
              },
              {
                "name": "Porifera and Coelenterata",
                "slug": "porifera-coelenterata"
              },
              {
                "name": "Worms — Platyhelminthes, Nematoda, Annelida",
                "slug": "worm-phyla"
              },
              {
                "name": "Arthropoda and Mollusca",
                "slug": "arthropoda-mollusca"
              },
              {
                "name": "Echinodermata and Hemichordata",
                "slug": "minor-phyla"
              },
              {
                "name": "Chordates — Fish to Mammalia",
                "slug": "chordates"
              }
            ]
          },
          {
            "name": "Morphology of Flowering Plants",
            "slug": "morphology-flowering-plants",
            "topics": [
              {
                "name": "Root — Types and Modifications",
                "slug": "root"
              },
              {
                "name": "Stem — Types and Modifications",
                "slug": "stem"
              },
              {
                "name": "Leaf — Parts and Modifications",
                "slug": "leaf"
              },
              {
                "name": "Flower — Parts and Types",
                "slug": "flower"
              },
              {
                "name": "Fruit and Seed",
                "slug": "fruit-seed"
              },
              {
                "name": "Important Families",
                "slug": "plant-families"
              }
            ]
          },
          {
            "name": "Anatomy of Flowering Plants",
            "slug": "anatomy-flowering-plants",
            "topics": [
              {
                "name": "Meristematic and Permanent Tissues",
                "slug": "plant-tissues"
              },
              {
                "name": "Tissue Systems",
                "slug": "tissue-systems"
              },
              {
                "name": "Anatomy of Dicot and Monocot Root",
                "slug": "root-anatomy"
              },
              {
                "name": "Anatomy of Dicot and Monocot Stem",
                "slug": "stem-anatomy"
              },
              {
                "name": "Anatomy of Dicot and Monocot Leaf",
                "slug": "leaf-anatomy"
              },
              {
                "name": "Secondary Growth",
                "slug": "secondary-growth"
              }
            ]
          },
          {
            "name": "Structural Organisation in Animals",
            "slug": "structural-organisation-animals",
            "topics": [
              {
                "name": "Animal Tissues",
                "slug": "animal-tissues"
              },
              {
                "name": "Earthworm — Morphology and Anatomy",
                "slug": "earthworm"
              },
              {
                "name": "Cockroach — Morphology and Anatomy",
                "slug": "cockroach"
              },
              {
                "name": "Frog — Morphology and Anatomy",
                "slug": "frog"
              }
            ]
          },
          {
            "name": "Cell: The Unit of Life",
            "slug": "cell-unit-of-life",
            "topics": [
              {
                "name": "Prokaryotic vs Eukaryotic Cell",
                "slug": "prokaryotic-eukaryotic"
              },
              {
                "name": "Cell Membrane and Cell Wall",
                "slug": "membrane-wall"
              },
              {
                "name": "Endomembrane System",
                "slug": "endomembrane"
              },
              {
                "name": "Mitochondria and Plastids",
                "slug": "mitochondria-plastids"
              },
              {
                "name": "Nucleus",
                "slug": "nucleus"
              },
              {
                "name": "Cytoskeleton and Centrosome",
                "slug": "cytoskeleton"
              }
            ]
          },
          {
            "name": "Biomolecules",
            "slug": "biomolecules",
            "topics": [
              {
                "name": "Carbohydrates — Definition and Classification",
                "slug": "carbohydrates-classification"
              },
              {
                "name": "Glucose — Open Chain and Cyclic (Haworth) Structure",
                "slug": "glucose-structure"
              },
              {
                "name": "Fructose Structure and Mutarotation",
                "slug": "fructose-mutarotation"
              },
              {
                "name": "Disaccharides — Sucrose, Maltose, Lactose",
                "slug": "disaccharides"
              },
              {
                "name": "Polysaccharides — Starch, Cellulose, Glycogen",
                "slug": "polysaccharides"
              },
              {
                "name": "Reducing and Non-Reducing Sugars",
                "slug": "reducing-non-reducing"
              },
              {
                "name": "Glycosidic Bond",
                "slug": "glycosidic-bond"
              },
              {
                "name": "Amino Acids — Structure and Classification",
                "slug": "amino-acids-structure"
              },
              {
                "name": "Essential Amino Acids",
                "slug": "essential-amino-acids"
              },
              {
                "name": "Zwitter Ion",
                "slug": "zwitter-ion"
              }
            ]
          },
          {
            "name": "Cell Cycle and Cell Division",
            "slug": "cell-cycle-division",
            "topics": [
              {
                "name": "Cell Cycle Phases — G1, S, G2, M",
                "slug": "cell-cycle-phases"
              },
              {
                "name": "Mitosis — Stages and Significance",
                "slug": "mitosis"
              },
              {
                "name": "Meiosis I",
                "slug": "meiosis-i"
              },
              {
                "name": "Meiosis II and Significance",
                "slug": "meiosis-ii"
              }
            ]
          },
          {
            "name": "Transport in Plants",
            "slug": "transport-in-plants",
            "topics": [
              {
                "name": "Osmosis and Water Potential",
                "slug": "osmosis-water-potential"
              },
              {
                "name": "Plasmolysis and Turgor Pressure",
                "slug": "plasmolysis-turgor"
              },
              {
                "name": "Transpiration and Stomatal Mechanism",
                "slug": "transpiration"
              },
              {
                "name": "Ascent of Sap",
                "slug": "ascent-sap"
              },
              {
                "name": "Phloem Transport and Source-Sink",
                "slug": "phloem-transport"
              }
            ]
          },
          {
            "name": "Mineral Nutrition",
            "slug": "mineral-nutrition",
            "topics": [
              {
                "name": "Essential Mineral Elements",
                "slug": "essential-minerals"
              },
              {
                "name": "Macro and Micronutrients",
                "slug": "macro-micro"
              },
              {
                "name": "Deficiency Symptoms",
                "slug": "deficiency-symptoms"
              },
              {
                "name": "Nitrogen Fixation",
                "slug": "nitrogen-fixation"
              },
              {
                "name": "Nitrogen Cycle",
                "slug": "nitrogen-cycle"
              }
            ]
          },
          {
            "name": "Photosynthesis in Higher Plants",
            "slug": "photosynthesis",
            "topics": [
              {
                "name": "Photosynthetic Pigments",
                "slug": "pigments"
              },
              {
                "name": "Light Reactions — PS I and PS II",
                "slug": "light-reactions"
              },
              {
                "name": "Electron Transport and ATP Synthesis",
                "slug": "etc-atp"
              },
              {
                "name": "Calvin Cycle (C3 Pathway)",
                "slug": "calvin-cycle"
              },
              {
                "name": "C4 Pathway and Kranz Anatomy",
                "slug": "c4-pathway"
              },
              {
                "name": "CAM Plants and Photorespiration",
                "slug": "cam-photorespiration"
              }
            ]
          },
          {
            "name": "Respiration in Plants",
            "slug": "respiration-plants",
            "topics": [
              {
                "name": "Glycolysis",
                "slug": "glycolysis"
              },
              {
                "name": "Fermentation",
                "slug": "fermentation"
              },
              {
                "name": "Krebs Cycle",
                "slug": "krebs-cycle"
              },
              {
                "name": "Electron Transport System",
                "slug": "ets"
              },
              {
                "name": "Energy Yield and Respiratory Quotient",
                "slug": "energy-rq"
              }
            ]
          },
          {
            "name": "Plant Growth and Development",
            "slug": "plant-growth-development",
            "topics": [
              {
                "name": "Growth — Phases and Measurement",
                "slug": "growth-phases"
              },
              {
                "name": "Auxin",
                "slug": "auxin"
              },
              {
                "name": "Gibberellins and Cytokinins",
                "slug": "gibberellins-cytokinins"
              },
              {
                "name": "Ethylene and ABA",
                "slug": "ethylene-aba"
              },
              {
                "name": "Photoperiodism and Vernalisation",
                "slug": "photoperiodism-vernalisation"
              }
            ]
          },
          {
            "name": "Digestion and Absorption",
            "slug": "digestion-absorption",
            "topics": [
              {
                "name": "Alimentary Canal",
                "slug": "alimentary-canal"
              },
              {
                "name": "Digestive Enzymes and Digestion",
                "slug": "digestive-enzymes"
              },
              {
                "name": "Absorption and Assimilation",
                "slug": "absorption-assimilation"
              },
              {
                "name": "Digestive Disorders",
                "slug": "digestive-disorders"
              }
            ]
          },
          {
            "name": "Breathing and Exchange of Gases",
            "slug": "breathing-exchange-gases",
            "topics": [
              {
                "name": "Mechanism of Breathing",
                "slug": "breathing-mechanism"
              },
              {
                "name": "Lung Volumes and Capacities",
                "slug": "lung-volumes"
              },
              {
                "name": "Exchange and Transport of Gases",
                "slug": "gas-exchange-transport"
              },
              {
                "name": "Regulation of Breathing",
                "slug": "breathing-regulation"
              },
              {
                "name": "Respiratory Disorders",
                "slug": "respiratory-disorders"
              }
            ]
          },
          {
            "name": "Body Fluids and Circulation",
            "slug": "body-fluids-circulation",
            "topics": [
              {
                "name": "Blood — Composition and Functions",
                "slug": "blood-composition"
              },
              {
                "name": "Blood Groups and Coagulation",
                "slug": "blood-groups-coagulation"
              },
              {
                "name": "Human Heart — Structure",
                "slug": "heart-structure"
              },
              {
                "name": "Cardiac Cycle and ECG",
                "slug": "cardiac-cycle-ecg"
              },
              {
                "name": "Circulatory Pathways and Lymph",
                "slug": "circulation-lymph"
              }
            ]
          },
          {
            "name": "Excretory Products and their Elimination",
            "slug": "excretory-products",
            "topics": [
              {
                "name": "Modes of Excretion",
                "slug": "excretion-modes"
              },
              {
                "name": "Nephron Structure",
                "slug": "nephron"
              },
              {
                "name": "Urine Formation",
                "slug": "urine-formation"
              },
              {
                "name": "Regulation of Kidney Function",
                "slug": "kidney-regulation"
              },
              {
                "name": "Role of Other Organs in Excretion",
                "slug": "other-excretion"
              }
            ]
          },
          {
            "name": "Locomotion and Movement",
            "slug": "locomotion-movement",
            "topics": [
              {
                "name": "Muscle Fibre Structure",
                "slug": "muscle-structure"
              },
              {
                "name": "Mechanism of Muscle Contraction",
                "slug": "muscle-contraction"
              },
              {
                "name": "Skeletal System",
                "slug": "skeletal-system"
              },
              {
                "name": "Joints",
                "slug": "joints"
              },
              {
                "name": "Musculoskeletal Disorders",
                "slug": "disorders"
              }
            ]
          },
          {
            "name": "Neural Control and Coordination",
            "slug": "neural-control",
            "topics": [
              {
                "name": "Neuron and Nerve Impulse",
                "slug": "neuron-impulse"
              },
              {
                "name": "Synapse and Neurotransmitters",
                "slug": "synapse"
              },
              {
                "name": "Central Nervous System",
                "slug": "cns"
              },
              {
                "name": "Peripheral and Autonomic Nervous System",
                "slug": "pns-ans"
              },
              {
                "name": "Reflex Action",
                "slug": "reflex"
              },
              {
                "name": "Eye and Ear",
                "slug": "eye-ear"
              }
            ]
          },
          {
            "name": "Chemical Coordination and Integration",
            "slug": "chemical-coordination",
            "topics": [
              {
                "name": "Hypothalamus and Pituitary",
                "slug": "hypothalamus-pituitary"
              },
              {
                "name": "Thyroid, Parathyroid and Adrenal",
                "slug": "thyroid-adrenal"
              },
              {
                "name": "Pancreas, Gonads and Other Glands",
                "slug": "pancreas-gonads"
              },
              {
                "name": "Mechanism of Hormone Action",
                "slug": "hormone-action"
              }
            ]
          },
          {
            "name": "Reproduction in Organisms",
            "slug": "reproduction-organisms",
            "topics": [
              {
                "name": "Modes of Asexual Reproduction",
                "slug": "asexual-modes"
              },
              {
                "name": "Events of Sexual Reproduction",
                "slug": "sexual-events"
              },
              {
                "name": "Significance of Reproduction",
                "slug": "reproduction-significance"
              }
            ]
          },
          {
            "name": "Sexual Reproduction in Flowering Plants",
            "slug": "sexual-reproduction-flowering",
            "topics": [
              {
                "name": "Flower Structure and Male Gametophyte",
                "slug": "male-gametophyte"
              },
              {
                "name": "Female Gametophyte",
                "slug": "female-gametophyte"
              },
              {
                "name": "Pollination",
                "slug": "pollination"
              },
              {
                "name": "Double Fertilisation",
                "slug": "double-fertilisation"
              },
              {
                "name": "Endosperm, Embryo and Seed",
                "slug": "endosperm-embryo"
              },
              {
                "name": "Apomixis and Polyembryony",
                "slug": "apomixis"
              }
            ]
          },
          {
            "name": "Human Reproduction",
            "slug": "human-reproduction",
            "topics": [
              {
                "name": "Male Reproductive System",
                "slug": "male-repro"
              },
              {
                "name": "Female Reproductive System",
                "slug": "female-repro"
              },
              {
                "name": "Gametogenesis",
                "slug": "gametogenesis"
              },
              {
                "name": "Menstrual Cycle",
                "slug": "menstrual-cycle"
              },
              {
                "name": "Fertilisation and Implantation",
                "slug": "fertilisation-implantation"
              },
              {
                "name": "Embryonic Development and Parturition",
                "slug": "embryo-parturition"
              }
            ]
          },
          {
            "name": "Reproductive Health",
            "slug": "reproductive-health",
            "topics": [
              {
                "name": "STDs",
                "slug": "stds"
              },
              {
                "name": "Contraception Methods",
                "slug": "contraception"
              },
              {
                "name": "MTP",
                "slug": "mtp"
              },
              {
                "name": "Infertility and ART",
                "slug": "infertility-art"
              }
            ]
          },
          {
            "name": "Principles of Inheritance and Variation",
            "slug": "inheritance-variation",
            "topics": [
              {
                "name": "Mendel's Laws",
                "slug": "mendels-laws"
              },
              {
                "name": "Dihybrid Cross",
                "slug": "dihybrid-cross"
              },
              {
                "name": "Incomplete Dominance and Co-Dominance",
                "slug": "incomplete-co-dominance"
              },
              {
                "name": "Sex Determination",
                "slug": "sex-determination"
              },
              {
                "name": "Linkage and Crossing Over",
                "slug": "linkage-crossing"
              },
              {
                "name": "Mutation and Chromosomal Disorders",
                "slug": "mutation-chromosomal"
              },
              {
                "name": "Pedigree Analysis",
                "slug": "pedigree"
              }
            ]
          },
          {
            "name": "Molecular Basis of Inheritance",
            "slug": "molecular-basis-inheritance",
            "topics": [
              {
                "name": "DNA Structure — Watson-Crick Model",
                "slug": "dna-structure"
              },
              {
                "name": "DNA Replication",
                "slug": "dna-replication"
              },
              {
                "name": "Transcription",
                "slug": "transcription"
              },
              {
                "name": "Genetic Code",
                "slug": "genetic-code"
              },
              {
                "name": "Translation",
                "slug": "translation"
              },
              {
                "name": "Lac Operon",
                "slug": "lac-operon"
              },
              {
                "name": "Human Genome Project and DNA Fingerprinting",
                "slug": "hgp-dna-fingerprinting"
              }
            ]
          },
          {
            "name": "Evolution",
            "slug": "evolution",
            "topics": [
              {
                "name": "Origin of Life",
                "slug": "origin-life"
              },
              {
                "name": "Theories of Evolution",
                "slug": "theories-evolution"
              },
              {
                "name": "Evidence of Evolution",
                "slug": "evidence-evolution"
              },
              {
                "name": "Natural Selection",
                "slug": "natural-selection"
              },
              {
                "name": "Hardy-Weinberg Principle",
                "slug": "hardy-weinberg"
              },
              {
                "name": "Human Evolution",
                "slug": "human-evolution"
              }
            ]
          },
          {
            "name": "Human Health and Disease",
            "slug": "human-health-disease",
            "topics": [
              {
                "name": "Common Diseases",
                "slug": "common-diseases"
              },
              {
                "name": "Immunity — Innate and Adaptive",
                "slug": "immunity"
              },
              {
                "name": "Vaccination",
                "slug": "vaccination"
              },
              {
                "name": "AIDS",
                "slug": "aids"
              },
              {
                "name": "Cancer",
                "slug": "cancer"
              },
              {
                "name": "Drugs and Alcohol Abuse",
                "slug": "drugs-alcohol"
              }
            ]
          },
          {
            "name": "Strategies for Enhancement in Food Production",
            "slug": "food-production",
            "topics": [
              {
                "name": "Plant Breeding",
                "slug": "plant-breeding"
              },
              {
                "name": "Animal Husbandry",
                "slug": "animal-husbandry"
              },
              {
                "name": "Tissue Culture",
                "slug": "tissue-culture"
              },
              {
                "name": "Biofortification and SCP",
                "slug": "biofortification-scp"
              }
            ]
          },
          {
            "name": "Microbes in Human Welfare",
            "slug": "microbes-human-welfare",
            "topics": [
              {
                "name": "Microbes in Household and Industrial Products",
                "slug": "microbes-household-industrial"
              },
              {
                "name": "Sewage Treatment",
                "slug": "sewage-treatment"
              },
              {
                "name": "Biogas Production",
                "slug": "biogas"
              },
              {
                "name": "Biocontrol Agents and Biofertilisers",
                "slug": "biocontrol-biofertilisers"
              }
            ]
          },
          {
            "name": "Biotechnology: Principles and Processes",
            "slug": "biotechnology-principles",
            "topics": [
              {
                "name": "Principles of Recombinant DNA Technology",
                "slug": "rdt-principles"
              },
              {
                "name": "Restriction Enzymes",
                "slug": "restriction-enzymes"
              },
              {
                "name": "Cloning Vectors",
                "slug": "vectors"
              },
              {
                "name": "PCR",
                "slug": "pcr"
              },
              {
                "name": "Gel Electrophoresis",
                "slug": "gel-electrophoresis"
              }
            ]
          },
          {
            "name": "Biotechnology and its Applications",
            "slug": "biotechnology-applications",
            "topics": [
              {
                "name": "GM Crops — Bt Cotton and Pest Resistance",
                "slug": "bt-gm-crops"
              },
              {
                "name": "Biotechnology in Medicine",
                "slug": "medical-biotech"
              },
              {
                "name": "Molecular Diagnosis",
                "slug": "molecular-diagnosis"
              },
              {
                "name": "Ethical Issues",
                "slug": "biotech-ethics"
              }
            ]
          },
          {
            "name": "Organisms and Populations",
            "slug": "organisms-populations",
            "topics": [
              {
                "name": "Abiotic Factors and Adaptations",
                "slug": "abiotic-adaptations"
              },
              {
                "name": "Population Growth Models",
                "slug": "population-growth"
              },
              {
                "name": "Population Interactions",
                "slug": "population-interactions"
              }
            ]
          },
          {
            "name": "Ecosystem",
            "slug": "ecosystem",
            "topics": [
              {
                "name": "Ecosystem Structure and Productivity",
                "slug": "ecosystem-structure"
              },
              {
                "name": "Energy Flow and Ecological Pyramids",
                "slug": "energy-pyramids"
              },
              {
                "name": "Decomposition",
                "slug": "decomposition"
              },
              {
                "name": "Nutrient Cycling",
                "slug": "nutrient-cycling"
              },
              {
                "name": "Ecological Succession",
                "slug": "succession"
              }
            ]
          },
          {
            "name": "Biodiversity and Conservation",
            "slug": "biodiversity-conservation",
            "topics": [
              {
                "name": "Biodiversity — Levels and Patterns",
                "slug": "biodiversity-levels"
              },
              {
                "name": "Loss of Biodiversity",
                "slug": "biodiversity-loss"
              },
              {
                "name": "In-Situ Conservation",
                "slug": "in-situ"
              },
              {
                "name": "Ex-Situ Conservation",
                "slug": "ex-situ"
              }
            ]
          },
          {
            "name": "Environmental Issues",
            "slug": "environmental-issues",
            "topics": [
              {
                "name": "Air Pollution and Control",
                "slug": "air-pollution"
              },
              {
                "name": "Water Pollution",
                "slug": "water-pollution"
              },
              {
                "name": "Greenhouse Effect and Global Warming",
                "slug": "greenhouse-global-warming"
              },
              {
                "name": "Ozone Depletion",
                "slug": "ozone-depletion"
              },
              {
                "name": "Deforestation and Solid Waste",
                "slug": "deforestation-solid-waste"
              }
            ]
          }
        ]
      }
    ]
  },
  "ssc-cgl": {
    "name": "SSC CGL",
    "subjects": [
      {
        "name": "Quantitative Aptitude",
        "slug": "quantitative-aptitude",
        "chapters": [
          {
            "name": "Number System",
            "slug": "number-system",
            "topics": [
              {
                "name": "Types of Numbers — Natural, Integer, Rational, Irrational",
                "slug": "types-numbers"
              },
              {
                "name": "Divisibility Rules",
                "slug": "divisibility-rules"
              },
              {
                "name": "LCM and HCF",
                "slug": "lcm-hcf"
              },
              {
                "name": "Factors and Multiples",
                "slug": "factors-multiples"
              },
              {
                "name": "Unit Digit Calculation",
                "slug": "unit-digit"
              },
              {
                "name": "Remainders — Basic and Advanced",
                "slug": "remainders"
              },
              {
                "name": "Cyclicity",
                "slug": "cyclicity"
              },
              {
                "name": "Number Series Patterns",
                "slug": "number-patterns"
              },
              {
                "name": "Square Roots and Cube Roots",
                "slug": "square-cube-roots"
              }
            ]
          },
          {
            "name": "Simplification and Approximation",
            "slug": "simplification",
            "topics": [
              {
                "name": "BODMAS Rule",
                "slug": "bodmas"
              },
              {
                "name": "Fractions and Decimals",
                "slug": "fractions-decimals"
              },
              {
                "name": "Surds and Indices",
                "slug": "surds-indices"
              },
              {
                "name": "Approximation Techniques",
                "slug": "approximation"
              },
              {
                "name": "Square and Cube Values",
                "slug": "square-cube-values"
              }
            ]
          },
          {
            "name": "Percentage",
            "slug": "percentage",
            "topics": [
              {
                "name": "Basic Percentage Concepts",
                "slug": "basic-percentage"
              },
              {
                "name": "Percentage Increase and Decrease",
                "slug": "percentage-change"
              },
              {
                "name": "Percentage of a Quantity",
                "slug": "percentage-of"
              },
              {
                "name": "Successive Percentage Change",
                "slug": "successive-change"
              },
              {
                "name": "Percentage in Profit-Loss",
                "slug": "percentage-pl"
              },
              {
                "name": "Percentage in Data Interpretation",
                "slug": "percentage-di"
              },
              {
                "name": "Population Problems",
                "slug": "population-percentage"
              }
            ]
          },
          {
            "name": "Ratio and Proportion",
            "slug": "ratio-proportion",
            "topics": [
              {
                "name": "Ratio — Basic Concepts",
                "slug": "ratio-basics"
              },
              {
                "name": "Proportion — Direct and Inverse",
                "slug": "proportion"
              },
              {
                "name": "Componendo and Dividendo",
                "slug": "componendo-dividendo"
              },
              {
                "name": "Partnership — Simple",
                "slug": "partnership-simple"
              },
              {
                "name": "Partnership — Compound",
                "slug": "partnership-compound"
              },
              {
                "name": "Duplicate, Triplicate Ratios",
                "slug": "duplicate-ratio"
              }
            ]
          },
          {
            "name": "Average",
            "slug": "average",
            "topics": [
              {
                "name": "Simple Average",
                "slug": "simple-average"
              },
              {
                "name": "Weighted Average",
                "slug": "weighted-average"
              },
              {
                "name": "Average of Consecutive Numbers",
                "slug": "consecutive-avg"
              },
              {
                "name": "Effect of Adding/Removing a Term",
                "slug": "add-remove-avg"
              },
              {
                "name": "Average Speed",
                "slug": "average-speed"
              }
            ]
          },
          {
            "name": "Profit, Loss and Discount",
            "slug": "profit-loss-discount",
            "topics": [
              {
                "name": "Profit and Loss — Basic",
                "slug": "profit-loss-basic"
              },
              {
                "name": "Marked Price and Selling Price",
                "slug": "marked-selling"
              },
              {
                "name": "Discount and Net Price",
                "slug": "discount-net"
              },
              {
                "name": "Successive Discounts",
                "slug": "successive-discounts"
              },
              {
                "name": "Dishonest Dealings — False Weight",
                "slug": "false-weight"
              },
              {
                "name": "Cost Price when Multiple Items",
                "slug": "cp-multiple"
              }
            ]
          },
          {
            "name": "Simple and Compound Interest",
            "slug": "interest",
            "topics": [
              {
                "name": "Simple Interest — Formula",
                "slug": "si-formula"
              },
              {
                "name": "Compound Interest — Formula",
                "slug": "ci-formula"
              },
              {
                "name": "CI vs SI Difference",
                "slug": "ci-si-diff"
              },
              {
                "name": "Half-Yearly and Quarterly CI",
                "slug": "quarterly-ci"
              },
              {
                "name": "Depreciation",
                "slug": "depreciation"
              },
              {
                "name": "Instalment Problems",
                "slug": "instalment"
              }
            ]
          },
          {
            "name": "Mixture and Alligation",
            "slug": "mixture-alligation",
            "topics": [
              {
                "name": "Alligation Rule",
                "slug": "alligation-rule"
              },
              {
                "name": "Mean Price Concept",
                "slug": "mean-price"
              },
              {
                "name": "Mixing Two Solutions",
                "slug": "mixing-solutions"
              },
              {
                "name": "Mixing Three Solutions",
                "slug": "mixing-three"
              },
              {
                "name": "Removal and Replacement Problems",
                "slug": "removal-replacement"
              }
            ]
          },
          {
            "name": "Time and Work",
            "slug": "time-work",
            "topics": [
              {
                "name": "Work Done in a Given Time",
                "slug": "work-time"
              },
              {
                "name": "Efficiency and Work Ratio",
                "slug": "efficiency-ratio"
              },
              {
                "name": "Work and Wages",
                "slug": "work-wages"
              },
              {
                "name": "MDH Formula (Men-Days-Hours)",
                "slug": "mdh-formula"
              },
              {
                "name": "Alternate Day Working",
                "slug": "alternate-day"
              }
            ]
          },
          {
            "name": "Pipes and Cisterns",
            "slug": "pipes-cisterns",
            "topics": [
              {
                "name": "Filling and Emptying Pipes",
                "slug": "filling-emptying"
              },
              {
                "name": "Two Pipes Together",
                "slug": "two-pipes"
              },
              {
                "name": "Leak in a Tank",
                "slug": "leak-tank"
              },
              {
                "name": "Pipes Opened at Different Times",
                "slug": "pipes-different-times"
              }
            ]
          },
          {
            "name": "Time, Speed and Distance",
            "slug": "time-speed-distance",
            "topics": [
              {
                "name": "Speed, Distance, Time — Basic",
                "slug": "sdt-basic"
              },
              {
                "name": "Average Speed",
                "slug": "average-speed-sdt"
              },
              {
                "name": "Relative Speed — Same and Opposite Direction",
                "slug": "relative-speed"
              },
              {
                "name": "Meeting Point Problems",
                "slug": "meeting-point"
              },
              {
                "name": "Circular Track Problems",
                "slug": "circular-track"
              }
            ]
          },
          {
            "name": "Problems on Trains",
            "slug": "problems-trains",
            "topics": [
              {
                "name": "Train Crossing a Pole or Person",
                "slug": "train-crossing-pole"
              },
              {
                "name": "Train Crossing a Bridge or Platform",
                "slug": "train-crossing-platform"
              },
              {
                "name": "Two Trains — Same and Opposite Direction",
                "slug": "two-trains"
              },
              {
                "name": "Train and a Moving Object",
                "slug": "train-moving-object"
              }
            ]
          },
          {
            "name": "Boats and Streams",
            "slug": "boats-streams",
            "topics": [
              {
                "name": "Upstream and Downstream Speed",
                "slug": "upstream-downstream"
              },
              {
                "name": "Speed of Boat in Still Water",
                "slug": "boat-still-water"
              },
              {
                "name": "Speed of Stream",
                "slug": "stream-speed"
              },
              {
                "name": "Distance Covered Up and Down",
                "slug": "distance-up-down"
              },
              {
                "name": "Round Trip Problems",
                "slug": "round-trip"
              }
            ]
          },
          {
            "name": "Algebra",
            "slug": "algebra",
            "topics": [
              {
                "name": "Algebraic Identities",
                "slug": "algebraic-identities"
              },
              {
                "name": "Linear Equations in One Variable",
                "slug": "linear-one-var"
              },
              {
                "name": "Linear Equations in Two Variables",
                "slug": "linear-two-var"
              },
              {
                "name": "Quadratic Equations",
                "slug": "quadratic"
              },
              {
                "name": "Polynomials — Remainder Theorem",
                "slug": "remainder-theorem"
              },
              {
                "name": "Inequalities",
                "slug": "inequalities"
              }
            ]
          },
          {
            "name": "Geometry",
            "slug": "geometry",
            "topics": [
              {
                "name": "Lines, Angles and Parallel Lines",
                "slug": "lines-angles"
              },
              {
                "name": "Triangles — Properties and Congruence",
                "slug": "triangles"
              },
              {
                "name": "Similarity of Triangles",
                "slug": "similarity"
              },
              {
                "name": "Circles — Chords, Tangents, Angles",
                "slug": "circles"
              },
              {
                "name": "Quadrilaterals and Polygons",
                "slug": "quadrilaterals-polygons"
              },
              {
                "name": "Coordinate Geometry — Basics",
                "slug": "coordinate-basics"
              }
            ]
          },
          {
            "name": "Mensuration",
            "slug": "mensuration",
            "topics": [
              {
                "name": "Triangle, Square, Rectangle, Parallelogram, Rhombus",
                "slug": "2d-basic-shapes"
              },
              {
                "name": "Circle, Sector and Segment",
                "slug": "circle-sector"
              },
              {
                "name": "Trapezium and Polygon",
                "slug": "trapezium-polygon"
              },
              {
                "name": "Cube and Cuboid",
                "slug": "cube-cuboid"
              },
              {
                "name": "Cylinder",
                "slug": "cylinder"
              },
              {
                "name": "Cone and Frustum",
                "slug": "cone-frustum"
              },
              {
                "name": "Sphere and Hemisphere",
                "slug": "sphere-hemisphere"
              }
            ]
          },
          {
            "name": "Trigonometry",
            "slug": "trigonometry-ssc",
            "topics": [
              {
                "name": "Trigonometric Ratios and Standard Values",
                "slug": "trig-ratios"
              },
              {
                "name": "Complementary Angles",
                "slug": "complementary-angles"
              },
              {
                "name": "Trigonometric Identities",
                "slug": "trig-identities"
              },
              {
                "name": "Trigonometric Equations",
                "slug": "trig-equations"
              },
              {
                "name": "Maximum and Minimum of Trig Expressions",
                "slug": "trig-maxmin"
              }
            ]
          },
          {
            "name": "Heights and Distances",
            "slug": "heights-distances",
            "topics": [
              {
                "name": "Angle of Elevation",
                "slug": "angle-elevation"
              },
              {
                "name": "Angle of Depression",
                "slug": "angle-depression"
              },
              {
                "name": "Single Observer Problems",
                "slug": "single-observer"
              },
              {
                "name": "Two Observer Problems",
                "slug": "two-observer"
              },
              {
                "name": "Problems on Towers and Buildings",
                "slug": "towers-buildings"
              },
              {
                "name": "Shadow and Pole Problems",
                "slug": "shadow-pole"
              }
            ]
          },
          {
            "name": "Statistics and Data Interpretation",
            "slug": "statistics-di",
            "topics": [
              {
                "name": "Mean, Median and Mode",
                "slug": "mean-median-mode"
              },
              {
                "name": "Range and Standard Deviation",
                "slug": "range-sd"
              },
              {
                "name": "Bar Graph",
                "slug": "bar-graph"
              },
              {
                "name": "Pie Chart",
                "slug": "pie-chart"
              },
              {
                "name": "Line Graph",
                "slug": "line-graph"
              },
              {
                "name": "Table Chart",
                "slug": "table-chart"
              },
              {
                "name": "Mixed DI",
                "slug": "mixed-di"
              }
            ]
          }
        ]
      },
      {
        "name": "General Intelligence and Reasoning",
        "slug": "general-intelligence-reasoning",
        "chapters": [
          {
            "name": "Analogy",
            "slug": "analogy",
            "topics": [
              {
                "name": "Word Analogy",
                "slug": "word-analogy"
              },
              {
                "name": "Number Analogy",
                "slug": "number-analogy"
              },
              {
                "name": "Letter Analogy",
                "slug": "letter-analogy"
              },
              {
                "name": "Figure/Image Analogy",
                "slug": "figure-analogy"
              },
              {
                "name": "GK-Based Analogy",
                "slug": "gk-analogy"
              }
            ]
          },
          {
            "name": "Classification",
            "slug": "classification",
            "topics": [
              {
                "name": "Word Classification — Odd One Out",
                "slug": "word-classification"
              },
              {
                "name": "Number Classification",
                "slug": "number-classification"
              },
              {
                "name": "Letter Classification",
                "slug": "letter-classification"
              },
              {
                "name": "Figure Classification",
                "slug": "figure-classification"
              }
            ]
          },
          {
            "name": "Series",
            "slug": "series",
            "topics": [
              {
                "name": "Number Series — Missing Term",
                "slug": "number-series-missing"
              },
              {
                "name": "Number Series — Wrong Term",
                "slug": "number-series-wrong"
              },
              {
                "name": "Letter Series",
                "slug": "letter-series"
              },
              {
                "name": "Alphanumeric Series",
                "slug": "alphanumeric-series"
              },
              {
                "name": "Figure Series",
                "slug": "figure-series"
              }
            ]
          },
          {
            "name": "Coding and Decoding",
            "slug": "coding-decoding",
            "topics": [
              {
                "name": "Letter Coding",
                "slug": "letter-coding"
              },
              {
                "name": "Number Coding",
                "slug": "number-coding"
              },
              {
                "name": "Symbol Coding",
                "slug": "symbol-coding"
              },
              {
                "name": "Matrix Coding",
                "slug": "matrix-coding"
              },
              {
                "name": "Condition-Based Coding",
                "slug": "condition-coding"
              }
            ]
          },
          {
            "name": "Blood Relations",
            "slug": "blood-relations",
            "topics": [
              {
                "name": "Direct Blood Relations",
                "slug": "direct-blood"
              },
              {
                "name": "Coded Blood Relations",
                "slug": "coded-blood"
              },
              {
                "name": "Family Tree Problems",
                "slug": "family-tree"
              },
              {
                "name": "Pointing / Referring Problems",
                "slug": "pointing-problems"
              }
            ]
          },
          {
            "name": "Order and Ranking",
            "slug": "order-ranking",
            "topics": [
              {
                "name": "Rank from Top and Bottom",
                "slug": "rank-top-bottom"
              },
              {
                "name": "Position in Row and Column",
                "slug": "position-row-col"
              },
              {
                "name": "Comparison of Heights/Weights",
                "slug": "comparison"
              },
              {
                "name": "Arrangement Problems",
                "slug": "arrangement"
              }
            ]
          },
          {
            "name": "Direction and Distance",
            "slug": "direction-distance",
            "topics": [
              {
                "name": "Cardinal Directions",
                "slug": "cardinal-directions"
              },
              {
                "name": "Turns and Final Direction",
                "slug": "turns-direction"
              },
              {
                "name": "Shortest Distance",
                "slug": "shortest-distance"
              },
              {
                "name": "Shadow-Based Direction",
                "slug": "shadow-direction"
              }
            ]
          },
          {
            "name": "Mathematical Operations",
            "slug": "mathematical-operations",
            "topics": [
              {
                "name": "Mathematical Signs Substitution",
                "slug": "signs-substitution"
              },
              {
                "name": "Balancing Equations",
                "slug": "balancing-equations"
              },
              {
                "name": "Number Puzzles",
                "slug": "number-puzzles"
              },
              {
                "name": "BODMAS-Based Operations",
                "slug": "bodmas-operations"
              }
            ]
          },
          {
            "name": "Puzzles and Seating Arrangement",
            "slug": "puzzles-seating",
            "topics": [
              {
                "name": "Linear Seating Arrangement",
                "slug": "linear-seating"
              },
              {
                "name": "Circular Seating Arrangement",
                "slug": "circular-seating"
              },
              {
                "name": "Floor-Based Puzzles",
                "slug": "floor-puzzles"
              },
              {
                "name": "Box and Stack Puzzles",
                "slug": "box-stack-puzzles"
              },
              {
                "name": "Scheduling Puzzles",
                "slug": "scheduling"
              }
            ]
          },
          {
            "name": "Syllogism",
            "slug": "syllogism",
            "topics": [
              {
                "name": "Two-Statement Syllogism",
                "slug": "two-statement"
              },
              {
                "name": "Three-Statement Syllogism",
                "slug": "three-statement"
              },
              {
                "name": "Negative Conclusions",
                "slug": "negative-conclusions"
              },
              {
                "name": "Either-Or Cases",
                "slug": "either-or"
              },
              {
                "name": "Possibility Cases",
                "slug": "possibility"
              }
            ]
          },
          {
            "name": "Non-Verbal Reasoning",
            "slug": "non-verbal",
            "topics": [
              {
                "name": "Mirror Image",
                "slug": "mirror-image"
              },
              {
                "name": "Water Image",
                "slug": "water-image"
              },
              {
                "name": "Paper Folding and Cutting",
                "slug": "paper-fold-cut"
              },
              {
                "name": "Embedded Figures",
                "slug": "embedded-figures"
              },
              {
                "name": "Figure Completion",
                "slug": "figure-completion"
              },
              {
                "name": "Cube and Dice",
                "slug": "cube-dice"
              },
              {
                "name": "Counting of Figures",
                "slug": "counting-figures"
              }
            ]
          },
          {
            "name": "Venn Diagrams",
            "slug": "venn-diagrams",
            "topics": [
              {
                "name": "Venn Diagram — Finding Region",
                "slug": "venn-region"
              },
              {
                "name": "Venn Diagram — Syllogism",
                "slug": "venn-syllogism"
              },
              {
                "name": "Set-Based Problems",
                "slug": "set-problems"
              },
              {
                "name": "Three-Circle Venn Diagrams",
                "slug": "three-circle"
              }
            ]
          },
          {
            "name": "Statement and Conclusions",
            "slug": "statement-conclusions",
            "topics": [
              {
                "name": "Statement and Conclusion",
                "slug": "stmt-conclusion"
              },
              {
                "name": "Statement and Assumption",
                "slug": "stmt-assumption"
              },
              {
                "name": "Statement and Argument",
                "slug": "stmt-argument"
              },
              {
                "name": "Course of Action",
                "slug": "course-action"
              },
              {
                "name": "Cause and Effect",
                "slug": "cause-effect"
              }
            ]
          },
          {
            "name": "Clock and Calendar",
            "slug": "clock-calendar",
            "topics": [
              {
                "name": "Angle Between Clock Hands",
                "slug": "clock-angle"
              },
              {
                "name": "Time Gained/Lost by Clock",
                "slug": "clock-gain-loss"
              },
              {
                "name": "Day of the Week",
                "slug": "day-of-week"
              },
              {
                "name": "Odd Days Concept",
                "slug": "odd-days"
              },
              {
                "name": "Leap Year Problems",
                "slug": "leap-year"
              }
            ]
          }
        ]
      },
      {
        "name": "English Comprehension",
        "slug": "english-comprehension",
        "chapters": [
          {
            "name": "Reading Comprehension",
            "slug": "reading-comprehension",
            "topics": [
              {
                "name": "Factual Questions",
                "slug": "factual-questions"
              },
              {
                "name": "Inferential Questions",
                "slug": "inferential-questions"
              },
              {
                "name": "Vocabulary in Context",
                "slug": "vocab-context"
              },
              {
                "name": "Main Idea and Title",
                "slug": "main-idea-title"
              },
              {
                "name": "Tone and Attitude of Author",
                "slug": "tone-attitude"
              }
            ]
          },
          {
            "name": "Spot the Error",
            "slug": "spot-error",
            "topics": [
              {
                "name": "Subject-Verb Agreement Error",
                "slug": "sv-agreement"
              },
              {
                "name": "Tense Errors",
                "slug": "tense-errors"
              },
              {
                "name": "Article Errors",
                "slug": "article-errors"
              },
              {
                "name": "Preposition Errors",
                "slug": "preposition-errors"
              },
              {
                "name": "Pronoun Errors",
                "slug": "pronoun-errors"
              },
              {
                "name": "Conjunction and Punctuation Errors",
                "slug": "conj-punct"
              }
            ]
          },
          {
            "name": "Sentence Improvement",
            "slug": "sentence-improvement",
            "topics": [
              {
                "name": "Improving Grammatically Incorrect Sentences",
                "slug": "grammar-improvement"
              },
              {
                "name": "Improving Awkward Constructions",
                "slug": "awkward-improvement"
              },
              {
                "name": "Choice of Correct Word/Phrase",
                "slug": "word-phrase-choice"
              },
              {
                "name": "Sentence Restructuring",
                "slug": "restructuring"
              }
            ]
          },
          {
            "name": "Fill in the Blanks",
            "slug": "fill-blanks",
            "topics": [
              {
                "name": "Single Blank — Vocabulary",
                "slug": "single-blank-vocab"
              },
              {
                "name": "Single Blank — Grammar",
                "slug": "single-blank-grammar"
              },
              {
                "name": "Double Blank",
                "slug": "double-blank"
              },
              {
                "name": "Contextual Usage",
                "slug": "contextual-usage"
              }
            ]
          },
          {
            "name": "Synonyms and Antonyms",
            "slug": "synonyms-antonyms",
            "topics": [
              {
                "name": "Synonyms — Meaning and Usage",
                "slug": "synonyms"
              },
              {
                "name": "Antonyms",
                "slug": "antonyms"
              },
              {
                "name": "Contextual Synonyms",
                "slug": "contextual-synonyms"
              },
              {
                "name": "Word Pairs Confused",
                "slug": "confused-word-pairs"
              }
            ]
          },
          {
            "name": "One Word Substitution",
            "slug": "one-word-substitution",
            "topics": [
              {
                "name": "People and Professions",
                "slug": "people-professions"
              },
              {
                "name": "Places and Institutions",
                "slug": "places-institutions"
              },
              {
                "name": "Actions and Behaviors",
                "slug": "actions-behaviors"
              },
              {
                "name": "Scientific Terms",
                "slug": "scientific-terms"
              },
              {
                "name": "Phobias and Manias",
                "slug": "phobias-manias"
              }
            ]
          },
          {
            "name": "Idioms and Phrases",
            "slug": "idioms-phrases",
            "topics": [
              {
                "name": "Common Idioms and Their Meanings",
                "slug": "common-idioms"
              },
              {
                "name": "Phrasal Verbs",
                "slug": "phrasal-verbs"
              },
              {
                "name": "Proverbs",
                "slug": "proverbs"
              },
              {
                "name": "Idiomatic Prepositions",
                "slug": "idiomatic-prepositions"
              }
            ]
          },
          {
            "name": "Cloze Test",
            "slug": "cloze-test",
            "topics": [
              {
                "name": "Cloze Test — Grammar Based",
                "slug": "cloze-grammar"
              },
              {
                "name": "Cloze Test — Vocabulary Based",
                "slug": "cloze-vocabulary"
              },
              {
                "name": "Cloze Test — Mixed",
                "slug": "cloze-mixed"
              }
            ]
          },
          {
            "name": "Active and Passive Voice",
            "slug": "active-passive",
            "topics": [
              {
                "name": "Simple Tenses — Active to Passive",
                "slug": "simple-tense-ap"
              },
              {
                "name": "Perfect Tenses — Active to Passive",
                "slug": "perfect-tense-ap"
              },
              {
                "name": "Interrogative and Imperative Sentences",
                "slug": "interrogative-imperative"
              },
              {
                "name": "Modals in Passive Voice",
                "slug": "modals-passive"
              }
            ]
          },
          {
            "name": "Direct and Indirect Speech",
            "slug": "direct-indirect",
            "topics": [
              {
                "name": "Statements — Direct to Indirect",
                "slug": "statements-di"
              },
              {
                "name": "Questions — Direct to Indirect",
                "slug": "questions-di"
              },
              {
                "name": "Commands and Requests",
                "slug": "commands-requests"
              },
              {
                "name": "Exclamatory Sentences",
                "slug": "exclamatory"
              },
              {
                "name": "Reporting Verb Changes",
                "slug": "reporting-verb"
              }
            ]
          },
          {
            "name": "Sentence Rearrangement",
            "slug": "sentence-rearrangement",
            "topics": [
              {
                "name": "PARAJUMBLES — 4 Sentences",
                "slug": "parajumble-4"
              },
              {
                "name": "PARAJUMBLES — 5-6 Sentences",
                "slug": "parajumble-5-6"
              },
              {
                "name": "First and Last Sentence Fixed",
                "slug": "first-last-fixed"
              }
            ]
          },
          {
            "name": "Spelling Correction",
            "slug": "spelling-correction",
            "topics": [
              {
                "name": "Commonly Misspelt Words",
                "slug": "misspelt-words"
              },
              {
                "name": "Confusable Spellings",
                "slug": "confusable-spellings"
              },
              {
                "name": "Word Formation Rules",
                "slug": "word-formation"
              }
            ]
          }
        ]
      },
      {
        "name": "General Awareness",
        "slug": "general-awareness",
        "chapters": [
          {
            "name": "History",
            "slug": "history",
            "topics": [
              {
                "name": "Ancient Indian History",
                "slug": "ancient-india"
              },
              {
                "name": "Medieval Indian History",
                "slug": "medieval-india"
              },
              {
                "name": "Modern History — British Rule",
                "slug": "british-rule"
              },
              {
                "name": "Freedom Struggle and Movements",
                "slug": "freedom-struggle"
              },
              {
                "name": "Post-Independence India",
                "slug": "post-independence"
              },
              {
                "name": "World History — Key Events",
                "slug": "world-history"
              }
            ]
          },
          {
            "name": "Geography",
            "slug": "geography",
            "topics": [
              {
                "name": "Physical Features of India",
                "slug": "physical-india"
              },
              {
                "name": "Indian Rivers, Lakes and Dams",
                "slug": "rivers-lakes-dams"
              },
              {
                "name": "Indian Climate and Soils",
                "slug": "climate-soils"
              },
              {
                "name": "Natural Resources and Agriculture",
                "slug": "resources-agriculture"
              },
              {
                "name": "World Physical Geography",
                "slug": "world-physical"
              },
              {
                "name": "World Political Geography",
                "slug": "world-political"
              }
            ]
          },
          {
            "name": "Indian Polity and Constitution",
            "slug": "polity-constitution",
            "topics": [
              {
                "name": "Preamble and Key Features",
                "slug": "preamble-features"
              },
              {
                "name": "Fundamental Rights",
                "slug": "fundamental-rights"
              },
              {
                "name": "DPSP and Fundamental Duties",
                "slug": "dpsp-duties"
              },
              {
                "name": "Parliament — Lok Sabha and Rajya Sabha",
                "slug": "parliament"
              },
              {
                "name": "President, PM and Council of Ministers",
                "slug": "executive"
              },
              {
                "name": "Judiciary — Supreme Court and High Court",
                "slug": "judiciary"
              },
              {
                "name": "Constitutional Amendments",
                "slug": "constitutional-amendments"
              }
            ]
          },
          {
            "name": "Indian Economy",
            "slug": "indian-economy",
            "topics": [
              {
                "name": "National Income — GDP, GNP, NNP",
                "slug": "national-income"
              },
              {
                "name": "Budget — Revenue and Capital",
                "slug": "budget"
              },
              {
                "name": "Banking System and RBI",
                "slug": "banking-rbi"
              },
              {
                "name": "Monetary and Fiscal Policy",
                "slug": "monetary-fiscal"
              },
              {
                "name": "Five Year Plans and NITI Aayog",
                "slug": "plans-niti"
              },
              {
                "name": "Economic Schemes of Government",
                "slug": "economic-schemes"
              },
              {
                "name": "International Organisations — IMF, WB, WTO",
                "slug": "international-orgs"
              }
            ]
          },
          {
            "name": "General Science — Physics and Chemistry",
            "slug": "general-science-phy-chem",
            "topics": [
              {
                "name": "Laws of Motion and Gravitation",
                "slug": "motion-gravitation"
              },
              {
                "name": "Work, Energy and Power",
                "slug": "work-energy"
              },
              {
                "name": "Sound and Light",
                "slug": "sound-light"
              },
              {
                "name": "Electricity and Magnetism",
                "slug": "electricity-magnetism"
              },
              {
                "name": "Atomic Structure and Radioactivity",
                "slug": "atomic-radio"
              },
              {
                "name": "Chemical Reactions and Acids-Bases",
                "slug": "reactions-acids-bases"
              },
              {
                "name": "Metals and Non-Metals",
                "slug": "metals-nonmetals"
              },
              {
                "name": "Carbon Compounds",
                "slug": "carbon-compounds"
              }
            ]
          },
          {
            "name": "General Science — Biology",
            "slug": "general-science-biology",
            "topics": [
              {
                "name": "Cell and Cell Division",
                "slug": "cell"
              },
              {
                "name": "Nutrition and Digestive System",
                "slug": "nutrition-digestion"
              },
              {
                "name": "Circulatory and Respiratory System",
                "slug": "circulatory-respiratory"
              },
              {
                "name": "Nervous System and Sense Organs",
                "slug": "nervous-sense"
              },
              {
                "name": "Reproduction and Genetics",
                "slug": "reproduction-genetics"
              },
              {
                "name": "Plant Kingdom and Photosynthesis",
                "slug": "plant-photosynthesis"
              },
              {
                "name": "Diseases — Bacterial, Viral, Deficiency",
                "slug": "diseases"
              },
              {
                "name": "Human Body — Bones, Muscles, Glands",
                "slug": "human-body"
              }
            ]
          },
          {
            "name": "Computer and Technology",
            "slug": "computer-technology",
            "topics": [
              {
                "name": "Basic Computer Concepts",
                "slug": "basic-computer"
              },
              {
                "name": "Input and Output Devices",
                "slug": "io-devices"
              },
              {
                "name": "Memory — RAM, ROM, Storage",
                "slug": "memory-storage"
              },
              {
                "name": "Operating System and Software",
                "slug": "os-software"
              },
              {
                "name": "MS Office — Word, Excel, PowerPoint",
                "slug": "ms-office"
              },
              {
                "name": "Internet — Basics and Terminology",
                "slug": "internet"
              },
              {
                "name": "Cybersecurity — Malware, Firewall",
                "slug": "cybersecurity"
              },
              {
                "name": "Number Systems — Binary, Decimal, Hex",
                "slug": "number-systems"
              }
            ]
          },
          {
            "name": "Current Affairs",
            "slug": "current-affairs",
            "topics": [
              {
                "name": "National Current Events",
                "slug": "national-current"
              },
              {
                "name": "International Current Events",
                "slug": "international-current"
              },
              {
                "name": "Government Schemes and Policies",
                "slug": "govt-schemes"
              },
              {
                "name": "Summits, Conferences and Agreements",
                "slug": "summits-agreements"
              },
              {
                "name": "Appointments — Governors, Ministers, Heads",
                "slug": "appointments"
              }
            ]
          },
          {
            "name": "Sports, Awards and Books",
            "slug": "sports-awards-books",
            "topics": [
              {
                "name": "Sports — Recent Events and Champions",
                "slug": "sports-recent"
              },
              {
                "name": "Sports — Trophies and Tournaments",
                "slug": "sports-trophies"
              },
              {
                "name": "National Awards — Padma, Bharat Ratna",
                "slug": "national-awards"
              },
              {
                "name": "International Awards — Nobel, Booker",
                "slug": "international-awards"
              },
              {
                "name": "Books and Authors",
                "slug": "books-authors"
              }
            ]
          },
          {
            "name": "Art, Culture and Static GK",
            "slug": "art-culture-static",
            "topics": [
              {
                "name": "Indian Art Forms — Classical Dance and Music",
                "slug": "classical-art"
              },
              {
                "name": "Paintings and Architecture",
                "slug": "paintings-architecture"
              },
              {
                "name": "UNESCO Heritage Sites in India",
                "slug": "heritage-sites"
              },
              {
                "name": "Religious Sites and Festivals",
                "slug": "religious-festivals"
              },
              {
                "name": "Important Days and Events",
                "slug": "important-days"
              },
              {
                "name": "Countries, Capitals and Currencies",
                "slug": "countries-capitals"
              },
              {
                "name": "National Symbols of India",
                "slug": "national-symbols"
              }
            ]
          }
        ]
      }
    ]
  },
  "cuet": {
    "name": "CUET UG",
    "subjects": [
      {
        "name": "Applied Mathematics",
        "slug": "applied-mathematics",
        "chapters": [
          {
            "name": "Numbers, Quantification and Numerical Applications",
            "slug": "numbers-quantification-and-numerical-applications",
            "topics": [
              {
                "name": "Modulo Arithmetic",
                "slug": "modulo-arithmetic"
              },
              {
                "name": "Congruence Modulo",
                "slug": "congruence-modulo"
              },
              {
                "name": "Divisibility Tests and Applications",
                "slug": "divisibility-tests-and-applications"
              },
              {
                "name": "Boats and Streams Problems",
                "slug": "boats-and-streams-problems"
              },
              {
                "name": "Pipes and Cisterns Problems",
                "slug": "pipes-and-cisterns-problems"
              },
              {
                "name": "Races and Games Problems",
                "slug": "races-and-games-problems"
              },
              {
                "name": "Partnership — Simple and Compound",
                "slug": "partnership-simple-and-compound"
              },
              {
                "name": "Numerical Problems on Time, Work and Distance (Advanced)",
                "slug": "numerical-problems-on-time-work-and-distance-advanced"
              }
            ]
          },
          {
            "name": "Algebra",
            "slug": "algebra",
            "topics": [
              {
                "name": "Matrices — Types and Operations",
                "slug": "matrices-types-and-operations"
              },
              {
                "name": "Determinants and Their Properties",
                "slug": "determinants-and-their-properties"
              },
              {
                "name": "Inverse of a Matrix and Applications",
                "slug": "inverse-of-a-matrix-and-applications"
              },
              {
                "name": "Solving System of Linear Equations using Matrices",
                "slug": "solving-system-of-linear-equations-using-matrices"
              }
            ]
          },
          {
            "name": "Calculus",
            "slug": "calculus",
            "topics": [
              {
                "name": "Limits and Continuity — Basics",
                "slug": "limits-and-continuity-basics"
              },
              {
                "name": "Derivative as a Rate Measurer",
                "slug": "derivative-as-a-rate-measurer"
              },
              {
                "name": "Increasing and Decreasing Functions",
                "slug": "increasing-and-decreasing-functions"
              },
              {
                "name": "Maxima and Minima — Applications",
                "slug": "maxima-and-minima-applications"
              },
              {
                "name": "Marginal Cost and Marginal Revenue using Derivatives",
                "slug": "marginal-cost-and-marginal-revenue-using-derivatives"
              },
              {
                "name": "Indefinite Integrals — Basic Rules",
                "slug": "indefinite-integrals-basic-rules"
              },
              {
                "name": "Definite Integrals and Applications",
                "slug": "definite-integrals-and-applications"
              },
              {
                "name": "Application of Integration — Area under Curve",
                "slug": "application-of-integration-area-under-curve"
              }
            ]
          },
          {
            "name": "Probability Distributions",
            "slug": "probability-distributions",
            "topics": [
              {
                "name": "Random Variables — Discrete and Continuous",
                "slug": "random-variables-discrete-and-continuous"
              },
              {
                "name": "Probability Distribution of a Random Variable",
                "slug": "probability-distribution-of-a-random-variable"
              },
              {
                "name": "Mathematical Expectation and Variance",
                "slug": "mathematical-expectation-and-variance"
              },
              {
                "name": "Binomial Distribution",
                "slug": "binomial-distribution"
              },
              {
                "name": "Poisson Distribution — Basics",
                "slug": "poisson-distribution-basics"
              },
              {
                "name": "Normal Distribution — Basics",
                "slug": "normal-distribution-basics"
              }
            ]
          },
          {
            "name": "Inferential Statistics",
            "slug": "inferential-statistics",
            "topics": [
              {
                "name": "Population and Sample",
                "slug": "population-and-sample"
              },
              {
                "name": "Parameter and Statistic",
                "slug": "parameter-and-statistic"
              },
              {
                "name": "Sampling Methods — Random, Stratified, Systematic",
                "slug": "sampling-methods-random-stratified-systematic"
              },
              {
                "name": "Standard Error and Confidence Interval",
                "slug": "standard-error-and-confidence-interval"
              },
              {
                "name": "Hypothesis Testing — Basics (z-test)",
                "slug": "hypothesis-testing-basics-z-test"
              }
            ]
          },
          {
            "name": "Index Numbers and Time-Based Data",
            "slug": "index-numbers-and-time-based-data",
            "topics": [
              {
                "name": "Index Numbers — Meaning and Uses",
                "slug": "index-numbers-meaning-and-uses"
              },
              {
                "name": "Construction of Index Numbers",
                "slug": "construction-of-index-numbers"
              },
              {
                "name": "Price Index and Quantity Index",
                "slug": "price-index-and-quantity-index"
              },
              {
                "name": "Test of Adequacy of Index Numbers",
                "slug": "test-of-adequacy-of-index-numbers"
              },
              {
                "name": "Time Series — Components",
                "slug": "time-series-components"
              },
              {
                "name": "Time Series — Trend Analysis (Moving Averages)",
                "slug": "time-series-trend-analysis-moving-averages"
              }
            ]
          },
          {
            "name": "Financial Mathematics",
            "slug": "financial-mathematics",
            "topics": [
              {
                "name": "Simple and Compound Interest — Applications",
                "slug": "simple-and-compound-interest-applications"
              },
              {
                "name": "Depreciation — Straight Line and Diminishing Balance",
                "slug": "depreciation-straight-line-and-diminishing-balance"
              },
              {
                "name": "EMI Calculation — Flat and Reducing Balance",
                "slug": "emi-calculation-flat-and-reducing-balance"
              },
              {
                "name": "Calculation of Returns and Nominal Rate of Return",
                "slug": "calculation-of-returns-and-nominal-rate-of-return"
              },
              {
                "name": "Compound Annual Growth Rate (CAGR)",
                "slug": "compound-annual-growth-rate-cagr"
              },
              {
                "name": "Linear Method of Depreciation",
                "slug": "linear-method-of-depreciation"
              },
              {
                "name": "Perpetuity, Sinking Funds and Valuation of Bonds",
                "slug": "perpetuity-sinking-funds-and-valuation-of-bonds"
              }
            ]
          },
          {
            "name": "Linear Programming",
            "slug": "linear-programming",
            "topics": [
              {
                "name": "Linear Programming — Introduction and Terminology",
                "slug": "linear-programming-introduction-and-terminology"
              },
              {
                "name": "Mathematical Formulation of LPP",
                "slug": "mathematical-formulation-of-lpp"
              },
              {
                "name": "Graphical Method of Solving LPP",
                "slug": "graphical-method-of-solving-lpp"
              },
              {
                "name": "Feasible and Infeasible Regions",
                "slug": "feasible-and-infeasible-regions"
              },
              {
                "name": "Optimal Solution — Corner Point Method",
                "slug": "optimal-solution-corner-point-method"
              }
            ]
          }
        ]
      },
      {
        "name": "Computer Science",
        "slug": "computer-science",
        "chapters": [
          {
            "name": "Revision of Python Basics",
            "slug": "revision-of-python-basics",
            "topics": [
              {
                "name": "Python Fundamentals — Tokens, Identifiers, Keywords",
                "slug": "python-fundamentals-tokens-identifiers-keywords"
              },
              {
                "name": "Data Types and Type Conversion",
                "slug": "data-types-and-type-conversion"
              },
              {
                "name": "Operators and Expressions",
                "slug": "operators-and-expressions"
              },
              {
                "name": "Control Statements — if, if-else, loops",
                "slug": "control-statements-if-if-else-loops"
              },
              {
                "name": "Strings and String Functions",
                "slug": "strings-and-string-functions"
              },
              {
                "name": "Lists, Tuples and Dictionaries — Basics",
                "slug": "lists-tuples-and-dictionaries-basics"
              }
            ]
          },
          {
            "name": "Functions in Python",
            "slug": "functions-in-python",
            "topics": [
              {
                "name": "Function Definition and Calling",
                "slug": "function-definition-and-calling"
              },
              {
                "name": "Parameter Passing — Positional, Keyword, Default",
                "slug": "parameter-passing-positional-keyword-default"
              },
              {
                "name": "Scope of Variables — Local and Global",
                "slug": "scope-of-variables-local-and-global"
              },
              {
                "name": "Flow of Execution and Function Composition",
                "slug": "flow-of-execution-and-function-composition"
              },
              {
                "name": "Recursion",
                "slug": "recursion"
              },
              {
                "name": "Modules — math, random, statistics",
                "slug": "modules-math-random-statistics"
              }
            ]
          },
          {
            "name": "Using Python Libraries — NumPy and Pandas",
            "slug": "using-python-libraries-numpy-and-pandas",
            "topics": [
              {
                "name": "NumPy Arrays — Creation and Operations",
                "slug": "numpy-arrays-creation-and-operations"
              },
              {
                "name": "Pandas Series and DataFrame — Basics",
                "slug": "pandas-series-and-dataframe-basics"
              },
              {
                "name": "Importing and Exporting Data (CSV)",
                "slug": "importing-and-exporting-data-csv"
              },
              {
                "name": "Plotting Graphs using Matplotlib — Basics",
                "slug": "plotting-graphs-using-matplotlib-basics"
              }
            ]
          },
          {
            "name": "File Handling in Python",
            "slug": "file-handling-in-python",
            "topics": [
              {
                "name": "Text File Operations — Open, Read, Write, Append",
                "slug": "text-file-operations-open-read-write-append"
              },
              {
                "name": "Binary File Operations",
                "slug": "binary-file-operations"
              },
              {
                "name": "CSV File Handling",
                "slug": "csv-file-handling"
              },
              {
                "name": "Relative and Absolute File Paths",
                "slug": "relative-and-absolute-file-paths"
              },
              {
                "name": "Standard I/O Devices and File Modes",
                "slug": "standard-i-o-devices-and-file-modes"
              }
            ]
          },
          {
            "name": "Data Structures — Stack and Queue",
            "slug": "data-structures-stack-and-queue",
            "topics": [
              {
                "name": "Stack — Concept and Operations (push, pop)",
                "slug": "stack-concept-and-operations-push-pop"
              },
              {
                "name": "Implementation of Stack using List",
                "slug": "implementation-of-stack-using-list"
              },
              {
                "name": "Queue — Concept and Operations",
                "slug": "queue-concept-and-operations"
              },
              {
                "name": "Applications of Stack — Expression Evaluation",
                "slug": "applications-of-stack-expression-evaluation"
              }
            ]
          },
          {
            "name": "Introduction to Database Concepts",
            "slug": "introduction-to-database-concepts",
            "topics": [
              {
                "name": "Database Concepts — Need for Database",
                "slug": "database-concepts-need-for-database"
              },
              {
                "name": "Relational Data Model — Relation, Tuple, Attribute",
                "slug": "relational-data-model-relation-tuple-attribute"
              },
              {
                "name": "Keys — Candidate, Primary, Foreign",
                "slug": "keys-candidate-primary-foreign"
              },
              {
                "name": "Constraints — Domain, Referential Integrity",
                "slug": "constraints-domain-referential-integrity"
              }
            ]
          },
          {
            "name": "Structured Query Language (SQL)",
            "slug": "structured-query-language-sql",
            "topics": [
              {
                "name": "DDL Commands — CREATE, ALTER, DROP",
                "slug": "ddl-commands-create-alter-drop"
              },
              {
                "name": "DML Commands — INSERT, UPDATE, DELETE",
                "slug": "dml-commands-insert-update-delete"
              },
              {
                "name": "SELECT Queries — WHERE, ORDER BY, GROUP BY",
                "slug": "select-queries-where-order-by-group-by"
              },
              {
                "name": "Aggregate Functions — SUM, AVG, COUNT, MAX, MIN",
                "slug": "aggregate-functions-sum-avg-count-max-min"
              },
              {
                "name": "Joins — Cartesian Product and Equi Join",
                "slug": "joins-cartesian-product-and-equi-join"
              },
              {
                "name": "MySQL–Python Connectivity",
                "slug": "mysql-python-connectivity"
              }
            ]
          },
          {
            "name": "Computer Networks",
            "slug": "computer-networks",
            "topics": [
              {
                "name": "Evolution of Networking — ARPANET, Internet",
                "slug": "evolution-of-networking-arpanet-internet"
              },
              {
                "name": "Network Devices — Modem, Hub, Switch, Router, Gateway",
                "slug": "network-devices-modem-hub-switch-router-gateway"
              },
              {
                "name": "Network Topologies — Bus, Star, Tree",
                "slug": "network-topologies-bus-star-tree"
              },
              {
                "name": "Types of Networks — PAN, LAN, MAN, WAN",
                "slug": "types-of-networks-pan-lan-man-wan"
              },
              {
                "name": "Network Protocols — TCP/IP, HTTP, HTTPS, FTP, PPP, SMTP, POP3",
                "slug": "network-protocols-tcp-ip-http-https-ftp-ppp-smtp-pop3"
              },
              {
                "name": "Wireless/Mobile Communication — GSM, CDMA, WLL, 3G/4G/5G",
                "slug": "wireless-mobile-communication-gsm-cdma-wll-3g-4g-5g"
              }
            ]
          },
          {
            "name": "Data Communication",
            "slug": "data-communication",
            "topics": [
              {
                "name": "Transmission Media — Wired and Wireless",
                "slug": "transmission-media-wired-and-wireless"
              },
              {
                "name": "Switching Techniques — Circuit and Packet Switching",
                "slug": "switching-techniques-circuit-and-packet-switching"
              },
              {
                "name": "Network Security Concepts — Firewall, Cookies",
                "slug": "network-security-concepts-firewall-cookies"
              },
              {
                "name": "Web Services — WWW, Web Browser, Web Server, URL, Domain Name",
                "slug": "web-services-www-web-browser-web-server-url-domain-name"
              }
            ]
          },
          {
            "name": "Societal Impacts of Technology",
            "slug": "societal-impacts-of-technology",
            "topics": [
              {
                "name": "Digital Footprints and Digital Society",
                "slug": "digital-footprints-and-digital-society"
              },
              {
                "name": "Net and Communication Etiquette",
                "slug": "net-and-communication-etiquette"
              },
              {
                "name": "Intellectual Property Rights — Copyright, Patent, Plagiarism",
                "slug": "intellectual-property-rights-copyright-patent-plagiarism"
              },
              {
                "name": "Cybercrime and Cyber Laws — IT Act",
                "slug": "cybercrime-and-cyber-laws-it-act"
              },
              {
                "name": "Indian Currency Denomination (E-waste, E-governance)",
                "slug": "indian-currency-denomination-e-waste-e-governance"
              },
              {
                "name": "Gender and Disability Issues while Teaching and Using Computers",
                "slug": "gender-and-disability-issues-while-teaching-and-using-computers"
              }
            ]
          }
        ]
      },
      {
        "name": "Accountancy",
        "slug": "accountancy",
        "chapters": [
          {
            "name": "Accounting for Partnership: Basic Concepts",
            "slug": "accounting-for-partnership-basic-concepts",
            "topics": [
              {
                "name": "Partnership Deed and Its Provisions",
                "slug": "partnership-deed-and-its-provisions"
              },
              {
                "name": "Profit and Loss Appropriation Account",
                "slug": "profit-and-loss-appropriation-account"
              },
              {
                "name": "Interest on Capital and Drawings",
                "slug": "interest-on-capital-and-drawings"
              },
              {
                "name": "Fixed vs Fluctuating Capital Accounts",
                "slug": "fixed-vs-fluctuating-capital-accounts"
              },
              {
                "name": "Guarantee of Profit to a Partner",
                "slug": "guarantee-of-profit-to-a-partner"
              },
              {
                "name": "Past Adjustments in Partnership Accounts",
                "slug": "past-adjustments-in-partnership-accounts"
              }
            ]
          },
          {
            "name": "Change in Profit Sharing Ratio Among Partners",
            "slug": "change-in-profit-sharing-ratio-among-partners",
            "topics": [
              {
                "name": "Sacrificing Ratio and Gaining Ratio",
                "slug": "sacrificing-ratio-and-gaining-ratio"
              },
              {
                "name": "Accounting Treatment of Goodwill",
                "slug": "accounting-treatment-of-goodwill"
              },
              {
                "name": "Revaluation of Assets and Reassessment of Liabilities",
                "slug": "revaluation-of-assets-and-reassessment-of-liabilities"
              },
              {
                "name": "Adjustment of Accumulated Profits and Losses",
                "slug": "adjustment-of-accumulated-profits-and-losses"
              }
            ]
          },
          {
            "name": "Admission of a Partner",
            "slug": "admission-of-a-partner",
            "topics": [
              {
                "name": "New Profit Sharing Ratio and Sacrificing Ratio",
                "slug": "new-profit-sharing-ratio-and-sacrificing-ratio"
              },
              {
                "name": "Valuation and Adjustment of Goodwill on Admission",
                "slug": "valuation-and-adjustment-of-goodwill-on-admission"
              },
              {
                "name": "Revaluation of Assets and Liabilities on Admission",
                "slug": "revaluation-of-assets-and-liabilities-on-admission"
              },
              {
                "name": "Adjustment of Capital Accounts on Admission",
                "slug": "adjustment-of-capital-accounts-on-admission"
              }
            ]
          },
          {
            "name": "Retirement and Death of a Partner",
            "slug": "retirement-and-death-of-a-partner",
            "topics": [
              {
                "name": "New Profit Sharing Ratio and Gaining Ratio",
                "slug": "new-profit-sharing-ratio-and-gaining-ratio"
              },
              {
                "name": "Treatment of Goodwill on Retirement/Death",
                "slug": "treatment-of-goodwill-on-retirement-death"
              },
              {
                "name": "Settlement of Retiring/Deceased Partner's Claim",
                "slug": "settlement-of-retiring-deceased-partner-s-claim"
              },
              {
                "name": "Preparation of Loan Account of Retiring Partner",
                "slug": "preparation-of-loan-account-of-retiring-partner"
              }
            ]
          },
          {
            "name": "Dissolution of Partnership Firm",
            "slug": "dissolution-of-partnership-firm",
            "topics": [
              {
                "name": "Modes of Dissolution",
                "slug": "modes-of-dissolution"
              },
              {
                "name": "Settlement of Accounts (Section 48)",
                "slug": "settlement-of-accounts-section-48"
              },
              {
                "name": "Preparation of Realisation Account",
                "slug": "preparation-of-realisation-account"
              },
              {
                "name": "Treatment of Unrecorded Assets and Liabilities",
                "slug": "treatment-of-unrecorded-assets-and-liabilities"
              }
            ]
          },
          {
            "name": "Accounting for Share Capital",
            "slug": "accounting-for-share-capital",
            "topics": [
              {
                "name": "Types of Shares — Equity and Preference",
                "slug": "types-of-shares-equity-and-preference"
              },
              {
                "name": "Issue of Shares at Par, Premium and Discount",
                "slug": "issue-of-shares-at-par-premium-and-discount"
              },
              {
                "name": "Forfeiture and Reissue of Shares",
                "slug": "forfeiture-and-reissue-of-shares"
              },
              {
                "name": "Disclosure of Share Capital in Balance Sheet",
                "slug": "disclosure-of-share-capital-in-balance-sheet"
              }
            ]
          },
          {
            "name": "Issue and Redemption of Debentures",
            "slug": "issue-and-redemption-of-debentures",
            "topics": [
              {
                "name": "Issue of Debentures — Terms of Issue",
                "slug": "issue-of-debentures-terms-of-issue"
              },
              {
                "name": "Issue of Debentures for Consideration Other Than Cash",
                "slug": "issue-of-debentures-for-consideration-other-than-cash"
              },
              {
                "name": "Writing Off Discount/Loss on Issue of Debentures",
                "slug": "writing-off-discount-loss-on-issue-of-debentures"
              },
              {
                "name": "Redemption of Debentures — Methods",
                "slug": "redemption-of-debentures-methods"
              }
            ]
          },
          {
            "name": "Financial Statements of a Company",
            "slug": "financial-statements-of-a-company",
            "topics": [
              {
                "name": "Balance Sheet of a Company — Schedule III Format",
                "slug": "balance-sheet-of-a-company-schedule-iii-format"
              },
              {
                "name": "Statement of Profit and Loss — Format",
                "slug": "statement-of-profit-and-loss-format"
              },
              {
                "name": "Major Heads and Sub-Heads of Balance Sheet Items",
                "slug": "major-heads-and-sub-heads-of-balance-sheet-items"
              }
            ]
          },
          {
            "name": "Analysis of Financial Statements",
            "slug": "analysis-of-financial-statements",
            "topics": [
              {
                "name": "Objectives and Limitations of Financial Analysis",
                "slug": "objectives-and-limitations-of-financial-analysis"
              },
              {
                "name": "Comparative Statements",
                "slug": "comparative-statements"
              },
              {
                "name": "Common Size Statements",
                "slug": "common-size-statements"
              },
              {
                "name": "Trend Analysis",
                "slug": "trend-analysis"
              }
            ]
          },
          {
            "name": "Accounting Ratios",
            "slug": "accounting-ratios",
            "topics": [
              {
                "name": "Liquidity Ratios — Current Ratio, Quick Ratio",
                "slug": "liquidity-ratios-current-ratio-quick-ratio"
              },
              {
                "name": "Solvency Ratios — Debt-Equity, Total Assets to Debt",
                "slug": "solvency-ratios-debt-equity-total-assets-to-debt"
              },
              {
                "name": "Activity/Turnover Ratios — Inventory, Debtors, Working Capital",
                "slug": "activity-turnover-ratios-inventory-debtors-working-capital"
              },
              {
                "name": "Profitability Ratios — Gross Profit, Net Profit, Return on Investment",
                "slug": "profitability-ratios-gross-profit-net-profit-return-on-investment"
              }
            ]
          },
          {
            "name": "Cash Flow Statement",
            "slug": "cash-flow-statement",
            "topics": [
              {
                "name": "Meaning and Objectives of Cash Flow Statement",
                "slug": "meaning-and-objectives-of-cash-flow-statement"
              },
              {
                "name": "Classification of Activities — Operating, Investing, Financing",
                "slug": "classification-of-activities-operating-investing-financing"
              },
              {
                "name": "Preparation of Cash Flow from Operating Activities",
                "slug": "preparation-of-cash-flow-from-operating-activities"
              },
              {
                "name": "Preparation of Cash Flow Statement (AS-3)",
                "slug": "preparation-of-cash-flow-statement-as-3"
              }
            ]
          }
        ]
      },
      {
        "name": "Business Studies",
        "slug": "business-studies",
        "chapters": [
          {
            "name": "Nature and Significance of Management",
            "slug": "nature-and-significance-of-management",
            "topics": [
              {
                "name": "Meaning and Characteristics of Management",
                "slug": "meaning-and-characteristics-of-management"
              },
              {
                "name": "Objectives and Importance of Management",
                "slug": "objectives-and-importance-of-management"
              },
              {
                "name": "Management as Science, Art and Profession",
                "slug": "management-as-science-art-and-profession"
              },
              {
                "name": "Levels of Management",
                "slug": "levels-of-management"
              },
              {
                "name": "Functions of Management — Overview",
                "slug": "functions-of-management-overview"
              },
              {
                "name": "Coordination — Nature and Importance",
                "slug": "coordination-nature-and-importance"
              }
            ]
          },
          {
            "name": "Principles of Management",
            "slug": "principles-of-management",
            "topics": [
              {
                "name": "Taylor's Scientific Management — Principles and Techniques",
                "slug": "taylor-s-scientific-management-principles-and-techniques"
              },
              {
                "name": "Fayol's 14 Principles of Management",
                "slug": "fayol-s-14-principles-of-management"
              },
              {
                "name": "Nature and Significance of Management Principles",
                "slug": "nature-and-significance-of-management-principles"
              }
            ]
          },
          {
            "name": "Business Environment",
            "slug": "business-environment",
            "topics": [
              {
                "name": "Meaning and Importance of Business Environment",
                "slug": "meaning-and-importance-of-business-environment"
              },
              {
                "name": "Dimensions — Economic, Social, Technological, Political, Legal",
                "slug": "dimensions-economic-social-technological-political-legal"
              },
              {
                "name": "Impact of Government Policy Changes on Business",
                "slug": "impact-of-government-policy-changes-on-business"
              },
              {
                "name": "Liberalisation, Privatisation and Globalisation — Impact",
                "slug": "liberalisation-privatisation-and-globalisation-impact"
              }
            ]
          },
          {
            "name": "Planning",
            "slug": "planning",
            "topics": [
              {
                "name": "Meaning, Features and Importance of Planning",
                "slug": "meaning-features-and-importance-of-planning"
              },
              {
                "name": "Limitations of Planning",
                "slug": "limitations-of-planning"
              },
              {
                "name": "Planning Process",
                "slug": "planning-process"
              },
              {
                "name": "Types of Plans — Objectives, Strategy, Policy, Procedure, Rule, Budget",
                "slug": "types-of-plans-objectives-strategy-policy-procedure-rule-budget"
              }
            ]
          },
          {
            "name": "Organising",
            "slug": "organising",
            "topics": [
              {
                "name": "Meaning and Importance of Organising",
                "slug": "meaning-and-importance-of-organising"
              },
              {
                "name": "Organisation Structure — Functional and Divisional",
                "slug": "organisation-structure-functional-and-divisional"
              },
              {
                "name": "Formal and Informal Organisation",
                "slug": "formal-and-informal-organisation"
              },
              {
                "name": "Delegation — Elements and Importance",
                "slug": "delegation-elements-and-importance"
              },
              {
                "name": "Decentralisation — Meaning and Importance",
                "slug": "decentralisation-meaning-and-importance"
              }
            ]
          },
          {
            "name": "Staffing",
            "slug": "staffing",
            "topics": [
              {
                "name": "Meaning and Importance of Staffing",
                "slug": "meaning-and-importance-of-staffing"
              },
              {
                "name": "Staffing as a Part of Human Resource Management",
                "slug": "staffing-as-a-part-of-human-resource-management"
              },
              {
                "name": "Recruitment — Sources",
                "slug": "recruitment-sources"
              },
              {
                "name": "Selection Process",
                "slug": "selection-process"
              },
              {
                "name": "Training and Development — Methods",
                "slug": "training-and-development-methods"
              }
            ]
          },
          {
            "name": "Directing",
            "slug": "directing",
            "topics": [
              {
                "name": "Meaning and Importance of Directing",
                "slug": "meaning-and-importance-of-directing"
              },
              {
                "name": "Elements of Directing — Supervision",
                "slug": "elements-of-directing-supervision"
              },
              {
                "name": "Motivation — Meaning and Maslow's Need Hierarchy Theory",
                "slug": "motivation-meaning-and-maslow-s-need-hierarchy-theory"
              },
              {
                "name": "Leadership — Meaning and Styles",
                "slug": "leadership-meaning-and-styles"
              },
              {
                "name": "Communication — Formal and Informal, Barriers",
                "slug": "communication-formal-and-informal-barriers"
              }
            ]
          },
          {
            "name": "Controlling",
            "slug": "controlling",
            "topics": [
              {
                "name": "Meaning and Importance of Controlling",
                "slug": "meaning-and-importance-of-controlling"
              },
              {
                "name": "Relationship Between Planning and Controlling",
                "slug": "relationship-between-planning-and-controlling"
              },
              {
                "name": "Steps in the Process of Controlling",
                "slug": "steps-in-the-process-of-controlling"
              },
              {
                "name": "Techniques of Managerial Control",
                "slug": "techniques-of-managerial-control"
              }
            ]
          },
          {
            "name": "Financial Management",
            "slug": "financial-management",
            "topics": [
              {
                "name": "Meaning, Role and Objectives of Financial Management",
                "slug": "meaning-role-and-objectives-of-financial-management"
              },
              {
                "name": "Financial Decisions — Investment, Financing, Dividend",
                "slug": "financial-decisions-investment-financing-dividend"
              },
              {
                "name": "Factors Affecting Financial Decisions",
                "slug": "factors-affecting-financial-decisions"
              },
              {
                "name": "Capital Structure — Meaning and Factors",
                "slug": "capital-structure-meaning-and-factors"
              },
              {
                "name": "Fixed and Working Capital — Factors Affecting",
                "slug": "fixed-and-working-capital-factors-affecting"
              }
            ]
          },
          {
            "name": "Financial Markets",
            "slug": "financial-markets",
            "topics": [
              {
                "name": "Money Market — Meaning and Instruments",
                "slug": "money-market-meaning-and-instruments"
              },
              {
                "name": "Capital Market — Meaning and Types (Primary, Secondary)",
                "slug": "capital-market-meaning-and-types-primary-secondary"
              },
              {
                "name": "Methods of Floatation in Primary Market",
                "slug": "methods-of-floatation-in-primary-market"
              },
              {
                "name": "Stock Exchange — Functions and Trading Procedure",
                "slug": "stock-exchange-functions-and-trading-procedure"
              },
              {
                "name": "SEBI — Objectives and Functions",
                "slug": "sebi-objectives-and-functions"
              }
            ]
          },
          {
            "name": "Marketing Management",
            "slug": "marketing-management",
            "topics": [
              {
                "name": "Marketing — Meaning and Functions",
                "slug": "marketing-meaning-and-functions"
              },
              {
                "name": "Marketing Mix — Product, Price, Place, Promotion",
                "slug": "marketing-mix-product-price-place-promotion"
              },
              {
                "name": "Product — Branding, Labelling, Packaging",
                "slug": "product-branding-labelling-packaging"
              },
              {
                "name": "Pricing — Factors Affecting Price Determination",
                "slug": "pricing-factors-affecting-price-determination"
              },
              {
                "name": "Physical Distribution — Channels of Distribution",
                "slug": "physical-distribution-channels-of-distribution"
              },
              {
                "name": "Promotion — Advertising, Personal Selling, Sales Promotion",
                "slug": "promotion-advertising-personal-selling-sales-promotion"
              }
            ]
          },
          {
            "name": "Consumer Protection",
            "slug": "consumer-protection",
            "topics": [
              {
                "name": "Importance of Consumer Protection",
                "slug": "importance-of-consumer-protection"
              },
              {
                "name": "Consumer Rights and Responsibilities",
                "slug": "consumer-rights-and-responsibilities"
              },
              {
                "name": "Ways and Means of Consumer Protection",
                "slug": "ways-and-means-of-consumer-protection"
              },
              {
                "name": "Consumer Protection Act — Redressal Agencies",
                "slug": "consumer-protection-act-redressal-agencies"
              }
            ]
          }
        ]
      },
      {
        "name": "Economics",
        "slug": "economics",
        "chapters": [
          {
            "name": "Introduction to Macroeconomics",
            "slug": "introduction-to-macroeconomics",
            "topics": [
              {
                "name": "Macroeconomics — Meaning and Scope",
                "slug": "macroeconomics-meaning-and-scope"
              },
              {
                "name": "Basic Concepts — Stock and Flow",
                "slug": "basic-concepts-stock-and-flow"
              },
              {
                "name": "Circular Flow of Income",
                "slug": "circular-flow-of-income"
              }
            ]
          },
          {
            "name": "National Income and Related Aggregates",
            "slug": "national-income-and-related-aggregates",
            "topics": [
              {
                "name": "Concepts — GDP, GNP, NDP, NNP",
                "slug": "concepts-gdp-gnp-ndp-nnp"
              },
              {
                "name": "National Income at Factor Cost and Market Price",
                "slug": "national-income-at-factor-cost-and-market-price"
              },
              {
                "name": "Methods of Calculating National Income — Product, Income, Expenditure",
                "slug": "methods-of-calculating-national-income-product-income-expenditure"
              },
              {
                "name": "Nominal and Real GDP, GDP Deflator",
                "slug": "nominal-and-real-gdp-gdp-deflator"
              },
              {
                "name": "GDP and Welfare",
                "slug": "gdp-and-welfare"
              }
            ]
          },
          {
            "name": "Money and Banking",
            "slug": "money-and-banking",
            "topics": [
              {
                "name": "Money — Meaning and Functions",
                "slug": "money-meaning-and-functions"
              },
              {
                "name": "Supply of Money — Currency and Deposits",
                "slug": "supply-of-money-currency-and-deposits"
              },
              {
                "name": "Central Bank — Functions of RBI",
                "slug": "central-bank-functions-of-rbi"
              },
              {
                "name": "Commercial Banks — Credit Creation",
                "slug": "commercial-banks-credit-creation"
              },
              {
                "name": "Monetary Policy — Instruments (CRR, SLR, Repo Rate)",
                "slug": "monetary-policy-instruments-crr-slr-repo-rate"
              }
            ]
          },
          {
            "name": "Determination of Income and Employment",
            "slug": "determination-of-income-and-employment",
            "topics": [
              {
                "name": "Aggregate Demand and Aggregate Supply",
                "slug": "aggregate-demand-and-aggregate-supply"
              },
              {
                "name": "Components of Aggregate Demand",
                "slug": "components-of-aggregate-demand"
              },
              {
                "name": "Propensity to Consume and Save",
                "slug": "propensity-to-consume-and-save"
              },
              {
                "name": "Investment Multiplier",
                "slug": "investment-multiplier"
              },
              {
                "name": "Equilibrium Level of Income and Output",
                "slug": "equilibrium-level-of-income-and-output"
              },
              {
                "name": "Excess Demand and Deficient Demand",
                "slug": "excess-demand-and-deficient-demand"
              },
              {
                "name": "Fiscal Policy Measures to Correct Demand Gaps",
                "slug": "fiscal-policy-measures-to-correct-demand-gaps"
              }
            ]
          },
          {
            "name": "Government Budget and the Economy",
            "slug": "government-budget-and-the-economy",
            "topics": [
              {
                "name": "Government Budget — Meaning and Objectives",
                "slug": "government-budget-meaning-and-objectives"
              },
              {
                "name": "Revenue and Capital Budget",
                "slug": "revenue-and-capital-budget"
              },
              {
                "name": "Revenue Receipts and Capital Receipts",
                "slug": "revenue-receipts-and-capital-receipts"
              },
              {
                "name": "Revenue and Capital Expenditure",
                "slug": "revenue-and-capital-expenditure"
              },
              {
                "name": "Budget Deficit — Fiscal, Revenue, Primary",
                "slug": "budget-deficit-fiscal-revenue-primary"
              }
            ]
          },
          {
            "name": "Balance of Payments",
            "slug": "balance-of-payments",
            "topics": [
              {
                "name": "Foreign Exchange Rate — Fixed and Flexible",
                "slug": "foreign-exchange-rate-fixed-and-flexible"
              },
              {
                "name": "Determination of Exchange Rate",
                "slug": "determination-of-exchange-rate"
              },
              {
                "name": "Balance of Payments — Meaning and Components",
                "slug": "balance-of-payments-meaning-and-components"
              },
              {
                "name": "Current Account and Capital Account",
                "slug": "current-account-and-capital-account"
              }
            ]
          },
          {
            "name": "Indian Economy on the Eve of Independence",
            "slug": "indian-economy-on-the-eve-of-independence",
            "topics": [
              {
                "name": "Low Level of Economic Development",
                "slug": "low-level-of-economic-development"
              },
              {
                "name": "Agricultural Sector — Stagnation",
                "slug": "agricultural-sector-stagnation"
              },
              {
                "name": "Industrial Sector — Deindustrialisation",
                "slug": "industrial-sector-deindustrialisation"
              },
              {
                "name": "Foreign Trade — Colonial Pattern",
                "slug": "foreign-trade-colonial-pattern"
              },
              {
                "name": "Demographic Condition",
                "slug": "demographic-condition"
              },
              {
                "name": "Occupational Structure and Infrastructure",
                "slug": "occupational-structure-and-infrastructure"
              }
            ]
          },
          {
            "name": "Indian Economy 1950–1990",
            "slug": "indian-economy-1950-1990",
            "topics": [
              {
                "name": "Goals of Five Year Plans",
                "slug": "goals-of-five-year-plans"
              },
              {
                "name": "Agriculture — Land Reforms and Green Revolution",
                "slug": "agriculture-land-reforms-and-green-revolution"
              },
              {
                "name": "Industry and Trade — Industrial Policy Resolution 1956",
                "slug": "industry-and-trade-industrial-policy-resolution-1956"
              },
              {
                "name": "Trade Policy — Import Substitution",
                "slug": "trade-policy-import-substitution"
              }
            ]
          },
          {
            "name": "Liberalisation, Privatisation and Globalisation",
            "slug": "liberalisation-privatisation-and-globalisation",
            "topics": [
              {
                "name": "Economic Reforms 1991 — Background and Need",
                "slug": "economic-reforms-1991-background-and-need"
              },
              {
                "name": "Liberalisation — Industrial, Financial, Tax, Foreign Exchange Reforms",
                "slug": "liberalisation-industrial-financial-tax-foreign-exchange-reforms"
              },
              {
                "name": "Privatisation and Disinvestment",
                "slug": "privatisation-and-disinvestment"
              },
              {
                "name": "Globalisation — Outsourcing and WTO",
                "slug": "globalisation-outsourcing-and-wto"
              },
              {
                "name": "Indian Economy During Reforms — An Assessment",
                "slug": "indian-economy-during-reforms-an-assessment"
              }
            ]
          },
          {
            "name": "Poverty",
            "slug": "poverty",
            "topics": [
              {
                "name": "Poverty — Absolute and Relative",
                "slug": "poverty-absolute-and-relative"
              },
              {
                "name": "Poverty Estimation and Poverty Line",
                "slug": "poverty-estimation-and-poverty-line"
              },
              {
                "name": "Causes of Poverty in India",
                "slug": "causes-of-poverty-in-india"
              },
              {
                "name": "Anti-Poverty Programmes",
                "slug": "anti-poverty-programmes"
              }
            ]
          },
          {
            "name": "Human Capital Formation in India",
            "slug": "human-capital-formation-in-india",
            "topics": [
              {
                "name": "Human Capital — Meaning and Sources",
                "slug": "human-capital-meaning-and-sources"
              },
              {
                "name": "Human Capital vs Physical Capital",
                "slug": "human-capital-vs-physical-capital"
              },
              {
                "name": "State of Education and Health in India",
                "slug": "state-of-education-and-health-in-india"
              },
              {
                "name": "Education Sector Initiatives in India",
                "slug": "education-sector-initiatives-in-india"
              }
            ]
          },
          {
            "name": "Rural Development",
            "slug": "rural-development",
            "topics": [
              {
                "name": "Rural Development — Key Issues (Credit, Marketing)",
                "slug": "rural-development-key-issues-credit-marketing"
              },
              {
                "name": "Agricultural Diversification",
                "slug": "agricultural-diversification"
              },
              {
                "name": "Sustainable Development and Organic Farming",
                "slug": "sustainable-development-and-organic-farming"
              }
            ]
          },
          {
            "name": "Employment — Growth, Informalisation and Related Issues",
            "slug": "employment-growth-informalisation-and-related-issues",
            "topics": [
              {
                "name": "Workers — Self-Employed, Regular, Casual",
                "slug": "workers-self-employed-regular-casual"
              },
              {
                "name": "Formal and Informal Sector Employment",
                "slug": "formal-and-informal-sector-employment"
              },
              {
                "name": "Growth and Changing Structure of Employment",
                "slug": "growth-and-changing-structure-of-employment"
              }
            ]
          },
          {
            "name": "Infrastructure",
            "slug": "infrastructure",
            "topics": [
              {
                "name": "Infrastructure — Meaning and Types",
                "slug": "infrastructure-meaning-and-types"
              },
              {
                "name": "Energy Sector — Growing Demand and Options",
                "slug": "energy-sector-growing-demand-and-options"
              },
              {
                "name": "Health Infrastructure — Indicators",
                "slug": "health-infrastructure-indicators"
              }
            ]
          },
          {
            "name": "Environment and Sustainable Development",
            "slug": "environment-and-sustainable-development",
            "topics": [
              {
                "name": "Environment — Functions and Threats",
                "slug": "environment-functions-and-threats"
              },
              {
                "name": "State of India's Environment",
                "slug": "state-of-india-s-environment"
              },
              {
                "name": "Sustainable Development — Strategies",
                "slug": "sustainable-development-strategies"
              }
            ]
          },
          {
            "name": "Comparative Development Experience of India and Its Neighbours",
            "slug": "comparative-development-experience-of-india-and-its-neighbours",
            "topics": [
              {
                "name": "Development Strategies — India, Pakistan, China",
                "slug": "development-strategies-india-pakistan-china"
              },
              {
                "name": "Demographic Indicators — Comparison",
                "slug": "demographic-indicators-comparison"
              },
              {
                "name": "Human Development Indicators — Comparison",
                "slug": "human-development-indicators-comparison"
              }
            ]
          }
        ]
      },
      {
        "name": "Geography",
        "slug": "geography",
        "chapters": [
          {
            "name": "Human Geography — Nature and Scope",
            "slug": "human-geography-nature-and-scope",
            "topics": [
              {
                "name": "Nature of Human Geography",
                "slug": "nature-of-human-geography"
              },
              {
                "name": "Fields and Approaches of Human Geography",
                "slug": "fields-and-approaches-of-human-geography"
              },
              {
                "name": "Human Geography Through a Fresh Lens",
                "slug": "human-geography-through-a-fresh-lens"
              }
            ]
          },
          {
            "name": "The World Population — Distribution, Density and Growth",
            "slug": "the-world-population-distribution-density-and-growth",
            "topics": [
              {
                "name": "Patterns of Population Distribution",
                "slug": "patterns-of-population-distribution"
              },
              {
                "name": "Population Density",
                "slug": "population-density"
              },
              {
                "name": "Population Growth and Its Determinants",
                "slug": "population-growth-and-its-determinants"
              },
              {
                "name": "Population Growth — Trends",
                "slug": "population-growth-trends"
              }
            ]
          },
          {
            "name": "Population Composition",
            "slug": "population-composition",
            "topics": [
              {
                "name": "Age-Sex Composition",
                "slug": "age-sex-composition"
              },
              {
                "name": "Rural-Urban Composition",
                "slug": "rural-urban-composition"
              },
              {
                "name": "Literacy and Occupational Structure",
                "slug": "literacy-and-occupational-structure"
              }
            ]
          },
          {
            "name": "Human Development",
            "slug": "human-development",
            "topics": [
              {
                "name": "Concept of Human Development",
                "slug": "concept-of-human-development"
              },
              {
                "name": "Indicators of Human Development",
                "slug": "indicators-of-human-development"
              },
              {
                "name": "Approaches and Components",
                "slug": "approaches-and-components"
              }
            ]
          },
          {
            "name": "Primary Activities",
            "slug": "primary-activities",
            "topics": [
              {
                "name": "Types of Primary Activities — Gathering, Hunting, Pastoralism",
                "slug": "types-of-primary-activities-gathering-hunting-pastoralism"
              },
              {
                "name": "Agriculture — Types (Subsistence and Commercial)",
                "slug": "agriculture-types-subsistence-and-commercial"
              },
              {
                "name": "Mining Activities",
                "slug": "mining-activities"
              }
            ]
          },
          {
            "name": "Secondary Activities",
            "slug": "secondary-activities",
            "topics": [
              {
                "name": "Manufacturing — Characteristics and Types",
                "slug": "manufacturing-characteristics-and-types"
              },
              {
                "name": "Industrial Location — Factors",
                "slug": "industrial-location-factors"
              },
              {
                "name": "Major Industrial Regions of the World",
                "slug": "major-industrial-regions-of-the-world"
              }
            ]
          },
          {
            "name": "Tertiary and Quaternary Activities",
            "slug": "tertiary-and-quaternary-activities",
            "topics": [
              {
                "name": "Tertiary Activities — Trade, Transport, Services",
                "slug": "tertiary-activities-trade-transport-services"
              },
              {
                "name": "Quaternary Activities — Knowledge-Based",
                "slug": "quaternary-activities-knowledge-based"
              },
              {
                "name": "Tourism as a Trade",
                "slug": "tourism-as-a-trade"
              }
            ]
          },
          {
            "name": "Transport and Communication (World)",
            "slug": "transport-and-communication-world",
            "topics": [
              {
                "name": "Land, Water and Air Transport",
                "slug": "land-water-and-air-transport"
              },
              {
                "name": "Trade Routes and Communication Networks",
                "slug": "trade-routes-and-communication-networks"
              },
              {
                "name": "Satellite Communication and Cyberspace",
                "slug": "satellite-communication-and-cyberspace"
              }
            ]
          },
          {
            "name": "International Trade (World)",
            "slug": "international-trade-world",
            "topics": [
              {
                "name": "Basis and Growth of International Trade",
                "slug": "basis-and-growth-of-international-trade"
              },
              {
                "name": "Case Study — WTO and International Trade",
                "slug": "case-study-wto-and-international-trade"
              },
              {
                "name": "Balance of Trade",
                "slug": "balance-of-trade"
              }
            ]
          },
          {
            "name": "Human Settlements",
            "slug": "human-settlements",
            "topics": [
              {
                "name": "Types of Settlements — Rural and Urban",
                "slug": "types-of-settlements-rural-and-urban"
              },
              {
                "name": "Classification of Urban Settlements",
                "slug": "classification-of-urban-settlements"
              },
              {
                "name": "Urbanisation — World Pattern",
                "slug": "urbanisation-world-pattern"
              }
            ]
          },
          {
            "name": "Population — India (Distribution, Density, Growth, Composition)",
            "slug": "population-india-distribution-density-growth-composition",
            "topics": [
              {
                "name": "Population Distribution and Density in India",
                "slug": "population-distribution-and-density-in-india"
              },
              {
                "name": "Growth of Population in India",
                "slug": "growth-of-population-in-india"
              },
              {
                "name": "Age-Sex Composition of Indian Population",
                "slug": "age-sex-composition-of-indian-population"
              },
              {
                "name": "Rural-Urban Composition of India",
                "slug": "rural-urban-composition-of-india"
              }
            ]
          },
          {
            "name": "Migration — Types, Causes and Consequences (India)",
            "slug": "migration-types-causes-and-consequences-india",
            "topics": [
              {
                "name": "Internal and International Migration in India",
                "slug": "internal-and-international-migration-in-india"
              },
              {
                "name": "Causes of Migration — Push and Pull Factors",
                "slug": "causes-of-migration-push-and-pull-factors"
              },
              {
                "name": "Consequences of Migration",
                "slug": "consequences-of-migration"
              }
            ]
          },
          {
            "name": "Human Development — India",
            "slug": "human-development-india",
            "topics": [
              {
                "name": "Human Development Indicators — Indian States",
                "slug": "human-development-indicators-indian-states"
              },
              {
                "name": "Regional Disparities in Human Development",
                "slug": "regional-disparities-in-human-development"
              }
            ]
          },
          {
            "name": "Human Settlements — India",
            "slug": "human-settlements-india",
            "topics": [
              {
                "name": "Rural Settlements — Types and Patterns in India",
                "slug": "rural-settlements-types-and-patterns-in-india"
              },
              {
                "name": "Urban Settlements — Classification in India",
                "slug": "urban-settlements-classification-in-india"
              },
              {
                "name": "Problems of Urbanisation in India",
                "slug": "problems-of-urbanisation-in-india"
              }
            ]
          },
          {
            "name": "Land Resources and Agriculture — India",
            "slug": "land-resources-and-agriculture-india",
            "topics": [
              {
                "name": "Land Use Categories in India",
                "slug": "land-use-categories-in-india"
              },
              {
                "name": "Land Degradation and Conservation",
                "slug": "land-degradation-and-conservation"
              },
              {
                "name": "Cropping Pattern and Cropping Seasons",
                "slug": "cropping-pattern-and-cropping-seasons"
              },
              {
                "name": "Major Crops — Rice, Wheat, Cotton, Sugarcane, Tea",
                "slug": "major-crops-rice-wheat-cotton-sugarcane-tea"
              },
              {
                "name": "Agricultural Development — Green Revolution and Beyond",
                "slug": "agricultural-development-green-revolution-and-beyond"
              }
            ]
          },
          {
            "name": "Water Resources — India",
            "slug": "water-resources-india",
            "topics": [
              {
                "name": "Water Resources — Availability and Utilisation",
                "slug": "water-resources-availability-and-utilisation"
              },
              {
                "name": "Multi-Purpose River Projects",
                "slug": "multi-purpose-river-projects"
              },
              {
                "name": "Rainwater Harvesting",
                "slug": "rainwater-harvesting"
              }
            ]
          },
          {
            "name": "Mineral and Energy Resources — India",
            "slug": "mineral-and-energy-resources-india",
            "topics": [
              {
                "name": "Types of Minerals — Ferrous and Non-Ferrous",
                "slug": "types-of-minerals-ferrous-and-non-ferrous"
              },
              {
                "name": "Conventional Energy Sources — Coal, Petroleum, Natural Gas",
                "slug": "conventional-energy-sources-coal-petroleum-natural-gas"
              },
              {
                "name": "Non-Conventional Energy Sources — Solar, Wind, Biogas",
                "slug": "non-conventional-energy-sources-solar-wind-biogas"
              }
            ]
          },
          {
            "name": "Manufacturing Industries — India",
            "slug": "manufacturing-industries-india",
            "topics": [
              {
                "name": "Industrial Location Factors in India",
                "slug": "industrial-location-factors-in-india"
              },
              {
                "name": "Iron and Steel Industry",
                "slug": "iron-and-steel-industry"
              },
              {
                "name": "Cotton Textile Industry",
                "slug": "cotton-textile-industry"
              },
              {
                "name": "Industrial Regions of India",
                "slug": "industrial-regions-of-india"
              }
            ]
          },
          {
            "name": "Planning and Sustainable Development in Indian Context",
            "slug": "planning-and-sustainable-development-in-indian-context",
            "topics": [
              {
                "name": "Types of Planning — Regional and Target Area",
                "slug": "types-of-planning-regional-and-target-area"
              },
              {
                "name": "Case Study — Indira Gandhi Canal Command Area",
                "slug": "case-study-indira-gandhi-canal-command-area"
              }
            ]
          },
          {
            "name": "Transport and Communication — India",
            "slug": "transport-and-communication-india",
            "topics": [
              {
                "name": "Road, Railway, Waterway, Airway Transport in India",
                "slug": "road-railway-waterway-airway-transport-in-india"
              },
              {
                "name": "Oil and Gas Pipelines",
                "slug": "oil-and-gas-pipelines"
              },
              {
                "name": "International Trade of India",
                "slug": "international-trade-of-india"
              }
            ]
          },
          {
            "name": "Geographical Perspective on Selected Issues and Problems",
            "slug": "geographical-perspective-on-selected-issues-and-problems",
            "topics": [
              {
                "name": "Environmental Pollution",
                "slug": "environmental-pollution"
              },
              {
                "name": "Urban Waste Disposal",
                "slug": "urban-waste-disposal"
              },
              {
                "name": "Land Degradation in India",
                "slug": "land-degradation-in-india"
              }
            ]
          }
        ]
      },
      {
        "name": "History",
        "slug": "history",
        "chapters": [
          {
            "name": "Bricks, Beads and Bones — The Harappan Civilisation",
            "slug": "bricks-beads-and-bones-the-harappan-civilisation",
            "topics": [
              {
                "name": "Discovery and Chronology of Harappan Civilisation",
                "slug": "discovery-and-chronology-of-harappan-civilisation"
              },
              {
                "name": "Town Planning and Urban Layout",
                "slug": "town-planning-and-urban-layout"
              },
              {
                "name": "Craft Production and Trade",
                "slug": "craft-production-and-trade"
              },
              {
                "name": "Decline of the Harappan Civilisation",
                "slug": "decline-of-the-harappan-civilisation"
              }
            ]
          },
          {
            "name": "Kings, Farmers and Towns — Early States and Economies",
            "slug": "kings-farmers-and-towns-early-states-and-economies",
            "topics": [
              {
                "name": "Sources — Inscriptions, Coins and Prashastis",
                "slug": "sources-inscriptions-coins-and-prashastis"
              },
              {
                "name": "Mauryan Empire — Administration",
                "slug": "mauryan-empire-administration"
              },
              {
                "name": "Agrarian Economy and Trade (6th c. BCE to 6th c. CE)",
                "slug": "agrarian-economy-and-trade-6th-c-bce-to-6th-c-ce"
              },
              {
                "name": "Emergence of New Kingdoms",
                "slug": "emergence-of-new-kingdoms"
              }
            ]
          },
          {
            "name": "Kinship, Caste and Class — Early Societies",
            "slug": "kinship-caste-and-class-early-societies",
            "topics": [
              {
                "name": "The Mahabharata as a Source",
                "slug": "the-mahabharata-as-a-source"
              },
              {
                "name": "Varna and Kinship Systems",
                "slug": "varna-and-kinship-systems"
              },
              {
                "name": "Property, Marriage and Social Norms",
                "slug": "property-marriage-and-social-norms"
              }
            ]
          },
          {
            "name": "Thinkers, Beliefs and Buildings — Cultural Developments",
            "slug": "thinkers-beliefs-and-buildings-cultural-developments",
            "topics": [
              {
                "name": "Buddhism — Life of the Buddha and Sangha",
                "slug": "buddhism-life-of-the-buddha-and-sangha"
              },
              {
                "name": "Jainism — Philosophy and Spread",
                "slug": "jainism-philosophy-and-spread"
              },
              {
                "name": "Bhakti and Sufi Traditions — Early Forms",
                "slug": "bhakti-and-sufi-traditions-early-forms"
              },
              {
                "name": "Stupas — Sanchi",
                "slug": "stupas-sanchi"
              }
            ]
          },
          {
            "name": "Through the Eyes of Travellers",
            "slug": "through-the-eyes-of-travellers",
            "topics": [
              {
                "name": "Al-Biruni's Kitab-ul-Hind",
                "slug": "al-biruni-s-kitab-ul-hind"
              },
              {
                "name": "Ibn Battuta's Rihla",
                "slug": "ibn-battuta-s-rihla"
              },
              {
                "name": "Bernier's Account of Mughal India",
                "slug": "bernier-s-account-of-mughal-india"
              }
            ]
          },
          {
            "name": "Bhakti–Sufi Traditions",
            "slug": "bhakti-sufi-traditions",
            "topics": [
              {
                "name": "Religious Ferment and Debate",
                "slug": "religious-ferment-and-debate"
              },
              {
                "name": "Bhakti Movement — Nayanars, Alvars, Virashaivas",
                "slug": "bhakti-movement-nayanars-alvars-virashaivas"
              },
              {
                "name": "Sufi Traditions — Silsilas and Khanqahs",
                "slug": "sufi-traditions-silsilas-and-khanqahs"
              },
              {
                "name": "Growth of Popular Religious Movements",
                "slug": "growth-of-popular-religious-movements"
              }
            ]
          },
          {
            "name": "An Imperial Capital — Vijayanagara",
            "slug": "an-imperial-capital-vijayanagara",
            "topics": [
              {
                "name": "Discovery and Sources of Vijayanagara",
                "slug": "discovery-and-sources-of-vijayanagara"
              },
              {
                "name": "Kings and Traders of Vijayanagara",
                "slug": "kings-and-traders-of-vijayanagara"
              },
              {
                "name": "Religion in Vijayanagara",
                "slug": "religion-in-vijayanagara"
              },
              {
                "name": "The Growth of the City and Its Splendour",
                "slug": "the-growth-of-the-city-and-its-splendour"
              }
            ]
          },
          {
            "name": "Peasants, Zamindars and the State — Agrarian Society Mughal India",
            "slug": "peasants-zamindars-and-the-state-agrarian-society-mughal-india",
            "topics": [
              {
                "name": "Sources — Ain-i-Akbari",
                "slug": "sources-ain-i-akbari"
              },
              {
                "name": "Peasants and Agricultural Production",
                "slug": "peasants-and-agricultural-production"
              },
              {
                "name": "The Zamindars",
                "slug": "the-zamindars"
              },
              {
                "name": "Village Community Structure",
                "slug": "village-community-structure"
              }
            ]
          },
          {
            "name": "Kings and Chronicles — The Mughal Courts",
            "slug": "kings-and-chronicles-the-mughal-courts",
            "topics": [
              {
                "name": "Akbarnama and Padshahnama as Sources",
                "slug": "akbarnama-and-padshahnama-as-sources"
              },
              {
                "name": "The Making of Manuscripts",
                "slug": "the-making-of-manuscripts"
              },
              {
                "name": "Ideas of Empire and Kingship",
                "slug": "ideas-of-empire-and-kingship"
              }
            ]
          },
          {
            "name": "Colonialism and the Countryside",
            "slug": "colonialism-and-the-countryside",
            "topics": [
              {
                "name": "Bengal and the Zamindars — Permanent Settlement",
                "slug": "bengal-and-the-zamindars-permanent-settlement"
              },
              {
                "name": "The Mahalwari System",
                "slug": "the-mahalwari-system"
              },
              {
                "name": "Ryotwari Settlement in Madras and Bombay",
                "slug": "ryotwari-settlement-in-madras-and-bombay"
              },
              {
                "name": "Crisis of Peasant Agriculture under Colonial Rule",
                "slug": "crisis-of-peasant-agriculture-under-colonial-rule"
              }
            ]
          },
          {
            "name": "Rebels and the Raj — The Revolt of 1857",
            "slug": "rebels-and-the-raj-the-revolt-of-1857",
            "topics": [
              {
                "name": "Leaders and Followers of the Revolt",
                "slug": "leaders-and-followers-of-the-revolt"
              },
              {
                "name": "Rumours and Popular Beliefs",
                "slug": "rumours-and-popular-beliefs"
              },
              {
                "name": "Suppression of the Revolt",
                "slug": "suppression-of-the-revolt"
              }
            ]
          },
          {
            "name": "Colonial Cities — Urbanisation, Planning and Architecture",
            "slug": "colonial-cities-urbanisation-planning-and-architecture",
            "topics": [
              {
                "name": "Emergence of Bombay, Madras and Calcutta",
                "slug": "emergence-of-bombay-madras-and-calcutta"
              },
              {
                "name": "Town Planning under Colonial Rule",
                "slug": "town-planning-under-colonial-rule"
              },
              {
                "name": "Segregation, Segmentation and the Politics of Space",
                "slug": "segregation-segmentation-and-the-politics-of-space"
              }
            ]
          },
          {
            "name": "Mahatma Gandhi and the Nationalist Movement",
            "slug": "mahatma-gandhi-and-the-nationalist-movement",
            "topics": [
              {
                "name": "Champaran, Kheda and Ahmedabad Movements",
                "slug": "champaran-kheda-and-ahmedabad-movements"
              },
              {
                "name": "Non-Cooperation Movement",
                "slug": "non-cooperation-movement"
              },
              {
                "name": "Civil Disobedience Movement",
                "slug": "civil-disobedience-movement"
              },
              {
                "name": "Quit India Movement",
                "slug": "quit-india-movement"
              }
            ]
          },
          {
            "name": "Understanding Partition — Politics, Memories, Experiences",
            "slug": "understanding-partition-politics-memories-experiences",
            "topics": [
              {
                "name": "Causes and Course of Partition",
                "slug": "causes-and-course-of-partition"
              },
              {
                "name": "Communal Politics of the 1940s",
                "slug": "communal-politics-of-the-1940s"
              },
              {
                "name": "Experiences of Partition — Oral Sources",
                "slug": "experiences-of-partition-oral-sources"
              }
            ]
          },
          {
            "name": "Framing the Constitution — The Beginning of a New Era",
            "slug": "framing-the-constitution-the-beginning-of-a-new-era",
            "topics": [
              {
                "name": "Formation of the Constituent Assembly",
                "slug": "formation-of-the-constituent-assembly"
              },
              {
                "name": "Key Debates in the Constituent Assembly",
                "slug": "key-debates-in-the-constituent-assembly"
              },
              {
                "name": "Fundamental Rights and Directive Principles Debates",
                "slug": "fundamental-rights-and-directive-principles-debates"
              }
            ]
          }
        ]
      },
      {
        "name": "Political Science",
        "slug": "political-science",
        "chapters": [
          {
            "name": "The Cold War Era",
            "slug": "the-cold-war-era",
            "topics": [
              {
                "name": "Emergence of Two Power Blocs",
                "slug": "emergence-of-two-power-blocs"
              },
              {
                "name": "Arenas of the Cold War — Cuban Missile Crisis, Korean War",
                "slug": "arenas-of-the-cold-war-cuban-missile-crisis-korean-war"
              },
              {
                "name": "Non-Aligned Movement (NAM)",
                "slug": "non-aligned-movement-nam"
              }
            ]
          },
          {
            "name": "The End of Bipolarity",
            "slug": "the-end-of-bipolarity",
            "topics": [
              {
                "name": "Disintegration of the Soviet Union",
                "slug": "disintegration-of-the-soviet-union"
              },
              {
                "name": "Shock Therapy in Post-Communist Regimes",
                "slug": "shock-therapy-in-post-communist-regimes"
              },
              {
                "name": "India's Relationship with Russia and Central Asia",
                "slug": "india-s-relationship-with-russia-and-central-asia"
              }
            ]
          },
          {
            "name": "US Hegemony in World Politics",
            "slug": "us-hegemony-in-world-politics",
            "topics": [
              {
                "name": "Growth of American Power — Gulf War, War on Terror",
                "slug": "growth-of-american-power-gulf-war-war-on-terror"
              },
              {
                "name": "Iraq War and Its Aftermath",
                "slug": "iraq-war-and-its-aftermath"
              },
              {
                "name": "Constraints on and Challenges to US Hegemony",
                "slug": "constraints-on-and-challenges-to-us-hegemony"
              }
            ]
          },
          {
            "name": "Alternative Centres of Power",
            "slug": "alternative-centres-of-power",
            "topics": [
              {
                "name": "European Union — Formation and Institutions",
                "slug": "european-union-formation-and-institutions"
              },
              {
                "name": "ASEAN — Formation and Objectives",
                "slug": "asean-formation-and-objectives"
              },
              {
                "name": "Rise of China as an Economic Power",
                "slug": "rise-of-china-as-an-economic-power"
              }
            ]
          },
          {
            "name": "Contemporary South Asia",
            "slug": "contemporary-south-asia",
            "topics": [
              {
                "name": "Political Systems of South Asian Countries",
                "slug": "political-systems-of-south-asian-countries"
              },
              {
                "name": "Peace and Conflict in South Asia",
                "slug": "peace-and-conflict-in-south-asia"
              },
              {
                "name": "India's Role in South Asian Cooperation (SAARC)",
                "slug": "india-s-role-in-south-asian-cooperation-saarc"
              }
            ]
          },
          {
            "name": "International Organisations",
            "slug": "international-organisations",
            "topics": [
              {
                "name": "United Nations — Formation and Structure",
                "slug": "united-nations-formation-and-structure"
              },
              {
                "name": "UN Security Council and Reform Debates",
                "slug": "un-security-council-and-reform-debates"
              },
              {
                "name": "Rise of Human Rights and Humanitarian Intervention",
                "slug": "rise-of-human-rights-and-humanitarian-intervention"
              }
            ]
          },
          {
            "name": "Security in the Contemporary World",
            "slug": "security-in-the-contemporary-world",
            "topics": [
              {
                "name": "Traditional and Non-Traditional Notions of Security",
                "slug": "traditional-and-non-traditional-notions-of-security"
              },
              {
                "name": "Terrorism and Human Trafficking",
                "slug": "terrorism-and-human-trafficking"
              },
              {
                "name": "Cooperative Security — India's Approach",
                "slug": "cooperative-security-india-s-approach"
              }
            ]
          },
          {
            "name": "Environment and Natural Resources",
            "slug": "environment-and-natural-resources",
            "topics": [
              {
                "name": "Environmental Concerns in Global Politics",
                "slug": "environmental-concerns-in-global-politics"
              },
              {
                "name": "Global Commons — Antarctica, Space, Oceans",
                "slug": "global-commons-antarctica-space-oceans"
              },
              {
                "name": "India's Stand on Environmental Issues",
                "slug": "india-s-stand-on-environmental-issues"
              }
            ]
          },
          {
            "name": "Globalisation",
            "slug": "globalisation",
            "topics": [
              {
                "name": "Causes and Impact of Globalisation",
                "slug": "causes-and-impact-of-globalisation"
              },
              {
                "name": "Economic, Cultural and Political Impact",
                "slug": "economic-cultural-and-political-impact"
              },
              {
                "name": "India and Resistance to Globalisation",
                "slug": "india-and-resistance-to-globalisation"
              }
            ]
          },
          {
            "name": "Challenges of Nation Building (India)",
            "slug": "challenges-of-nation-building-india",
            "topics": [
              {
                "name": "Partition and Refugee Rehabilitation",
                "slug": "partition-and-refugee-rehabilitation"
              },
              {
                "name": "Integration of Princely States",
                "slug": "integration-of-princely-states"
              },
              {
                "name": "Reorganisation of States on Linguistic Lines",
                "slug": "reorganisation-of-states-on-linguistic-lines"
              }
            ]
          },
          {
            "name": "Era of One-Party Dominance",
            "slug": "era-of-one-party-dominance",
            "topics": [
              {
                "name": "First General Election of 1952",
                "slug": "first-general-election-of-1952"
              },
              {
                "name": "Nature of Congress Dominance",
                "slug": "nature-of-congress-dominance"
              },
              {
                "name": "Emergence of Opposition Parties",
                "slug": "emergence-of-opposition-parties"
              }
            ]
          },
          {
            "name": "Politics of Planned Development",
            "slug": "politics-of-planned-development",
            "topics": [
              {
                "name": "Ideas of Development in the 1950s",
                "slug": "ideas-of-development-in-the-1950s"
              },
              {
                "name": "Planning Commission and Five Year Plans",
                "slug": "planning-commission-and-five-year-plans"
              },
              {
                "name": "Green Revolution and Its Political Consequences",
                "slug": "green-revolution-and-its-political-consequences"
              }
            ]
          },
          {
            "name": "India's External Relations",
            "slug": "india-s-external-relations",
            "topics": [
              {
                "name": "Nehru's Foreign Policy — Non-Alignment",
                "slug": "nehru-s-foreign-policy-non-alignment"
              },
              {
                "name": "India-China Relations — 1962 War",
                "slug": "india-china-relations-1962-war"
              },
              {
                "name": "India-Pakistan Wars — 1965 and 1971",
                "slug": "india-pakistan-wars-1965-and-1971"
              }
            ]
          },
          {
            "name": "Challenges to and Restoration of the Congress System",
            "slug": "challenges-to-and-restoration-of-the-congress-system",
            "topics": [
              {
                "name": "Politics of Non-Congressism",
                "slug": "politics-of-non-congressism"
              },
              {
                "name": "Split in Congress Party (1969)",
                "slug": "split-in-congress-party-1969"
              },
              {
                "name": "Rise of Regional Parties",
                "slug": "rise-of-regional-parties"
              }
            ]
          },
          {
            "name": "Crisis of Democratic Order — The Emergency",
            "slug": "crisis-of-democratic-order-the-emergency",
            "topics": [
              {
                "name": "Political Crisis of 1975 and Declaration of Emergency",
                "slug": "political-crisis-of-1975-and-declaration-of-emergency"
              },
              {
                "name": "Effects of the Emergency",
                "slug": "effects-of-the-emergency"
              },
              {
                "name": "1977 Election and Restoration of Democracy",
                "slug": "1977-election-and-restoration-of-democracy"
              }
            ]
          },
          {
            "name": "Regional Aspirations",
            "slug": "regional-aspirations",
            "topics": [
              {
                "name": "Regional Movements — Punjab, Kashmir, Northeast",
                "slug": "regional-movements-punjab-kashmir-northeast"
              },
              {
                "name": "Regionalism and Demand for Autonomy",
                "slug": "regionalism-and-demand-for-autonomy"
              }
            ]
          },
          {
            "name": "Recent Developments in Indian Politics",
            "slug": "recent-developments-in-indian-politics",
            "topics": [
              {
                "name": "Rise of Coalition Governments",
                "slug": "rise-of-coalition-governments"
              },
              {
                "name": "Emergence of New Social Movements",
                "slug": "emergence-of-new-social-movements"
              },
              {
                "name": "Economic Reforms and Political Response",
                "slug": "economic-reforms-and-political-response"
              }
            ]
          }
        ]
      },
      {
        "name": "Psychology",
        "slug": "psychology",
        "chapters": [
          {
            "name": "Variations in Psychological Attributes",
            "slug": "variations-in-psychological-attributes",
            "topics": [
              {
                "name": "Intelligence — Theories (Spearman, Thurstone, Gardner, Sternberg)",
                "slug": "intelligence-theories-spearman-thurstone-gardner-sternberg"
              },
              {
                "name": "Assessment of Intelligence",
                "slug": "assessment-of-intelligence"
              },
              {
                "name": "Concept of Aptitude and Creativity",
                "slug": "concept-of-aptitude-and-creativity"
              },
              {
                "name": "Individual Differences and Their Assessment",
                "slug": "individual-differences-and-their-assessment"
              }
            ]
          },
          {
            "name": "Self and Personality",
            "slug": "self-and-personality",
            "topics": [
              {
                "name": "Concept of Self — Self-Esteem, Self-Efficacy",
                "slug": "concept-of-self-self-esteem-self-efficacy"
              },
              {
                "name": "Type and Trait Approaches to Personality",
                "slug": "type-and-trait-approaches-to-personality"
              },
              {
                "name": "Psychodynamic and Behavioural Approaches",
                "slug": "psychodynamic-and-behavioural-approaches"
              },
              {
                "name": "Assessment of Personality — Self-Report and Projective Techniques",
                "slug": "assessment-of-personality-self-report-and-projective-techniques"
              }
            ]
          },
          {
            "name": "Meeting Life Challenges",
            "slug": "meeting-life-challenges",
            "topics": [
              {
                "name": "Nature of Stress and Its Sources",
                "slug": "nature-of-stress-and-its-sources"
              },
              {
                "name": "Stress and Health — GAS Model",
                "slug": "stress-and-health-gas-model"
              },
              {
                "name": "Coping with Stress",
                "slug": "coping-with-stress"
              },
              {
                "name": "Promoting Positive Health and Well-being",
                "slug": "promoting-positive-health-and-well-being"
              }
            ]
          },
          {
            "name": "Psychological Disorders",
            "slug": "psychological-disorders",
            "topics": [
              {
                "name": "Concepts of Abnormality and Classification (DSM/ICD)",
                "slug": "concepts-of-abnormality-and-classification-dsm-icd"
              },
              {
                "name": "Anxiety, Mood and Somatoform Disorders",
                "slug": "anxiety-mood-and-somatoform-disorders"
              },
              {
                "name": "Schizophrenia and Other Psychotic Disorders",
                "slug": "schizophrenia-and-other-psychotic-disorders"
              },
              {
                "name": "Behavioural and Developmental Disorders",
                "slug": "behavioural-and-developmental-disorders"
              }
            ]
          },
          {
            "name": "Therapeutic Approaches",
            "slug": "therapeutic-approaches",
            "topics": [
              {
                "name": "Nature and Process of Psychotherapy",
                "slug": "nature-and-process-of-psychotherapy"
              },
              {
                "name": "Psychodynamic and Behaviour Therapy",
                "slug": "psychodynamic-and-behaviour-therapy"
              },
              {
                "name": "Cognitive and Humanistic Therapy",
                "slug": "cognitive-and-humanistic-therapy"
              },
              {
                "name": "Rehabilitation of the Mentally Ill",
                "slug": "rehabilitation-of-the-mentally-ill"
              }
            ]
          },
          {
            "name": "Attitude and Social Cognition",
            "slug": "attitude-and-social-cognition",
            "topics": [
              {
                "name": "Nature and Components of Attitude",
                "slug": "nature-and-components-of-attitude"
              },
              {
                "name": "Attitude Formation and Change",
                "slug": "attitude-formation-and-change"
              },
              {
                "name": "Impression Formation and Attribution",
                "slug": "impression-formation-and-attribution"
              },
              {
                "name": "Prejudice and Discrimination",
                "slug": "prejudice-and-discrimination"
              }
            ]
          },
          {
            "name": "Social Influence and Group Processes",
            "slug": "social-influence-and-group-processes",
            "topics": [
              {
                "name": "Nature and Formation of Groups",
                "slug": "nature-and-formation-of-groups"
              },
              {
                "name": "Conformity, Compliance and Obedience",
                "slug": "conformity-compliance-and-obedience"
              },
              {
                "name": "Cooperation and Competition",
                "slug": "cooperation-and-competition"
              },
              {
                "name": "Social Loafing and Group Polarisation",
                "slug": "social-loafing-and-group-polarisation"
              }
            ]
          },
          {
            "name": "Psychology and Life",
            "slug": "psychology-and-life",
            "topics": [
              {
                "name": "Human-Environment Relationship",
                "slug": "human-environment-relationship"
              },
              {
                "name": "Environmental Effects on Behaviour",
                "slug": "environmental-effects-on-behaviour"
              },
              {
                "name": "Psychology of Aggression and Violence",
                "slug": "psychology-of-aggression-and-violence"
              }
            ]
          },
          {
            "name": "Developing Psychological Skills",
            "slug": "developing-psychological-skills",
            "topics": [
              {
                "name": "Effective Communication Skills",
                "slug": "effective-communication-skills"
              },
              {
                "name": "Counselling Skills",
                "slug": "counselling-skills"
              },
              {
                "name": "Life Skills for Personal Growth",
                "slug": "life-skills-for-personal-growth"
              }
            ]
          }
        ]
      },
      {
        "name": "Sociology",
        "slug": "sociology",
        "chapters": [
          {
            "name": "Introducing Indian Society",
            "slug": "introducing-indian-society",
            "topics": [
              {
                "name": "Diversity and Unity in Indian Society",
                "slug": "diversity-and-unity-in-indian-society"
              },
              {
                "name": "Colonialism, Nationalism and Social Reform",
                "slug": "colonialism-nationalism-and-social-reform"
              },
              {
                "name": "Sociology and Sociology of India — Themes",
                "slug": "sociology-and-sociology-of-india-themes"
              }
            ]
          },
          {
            "name": "Demographic Structure of Indian Society",
            "slug": "demographic-structure-of-indian-society",
            "topics": [
              {
                "name": "Size and Growth of Population",
                "slug": "size-and-growth-of-population"
              },
              {
                "name": "Age Structure, Sex Ratio and Rural-Urban Composition",
                "slug": "age-structure-sex-ratio-and-rural-urban-composition"
              },
              {
                "name": "Migration Patterns",
                "slug": "migration-patterns"
              }
            ]
          },
          {
            "name": "Social Institutions — Continuity and Change",
            "slug": "social-institutions-continuity-and-change",
            "topics": [
              {
                "name": "Family, Kinship and Marriage",
                "slug": "family-kinship-and-marriage"
              },
              {
                "name": "Caste System — Continuity and Change",
                "slug": "caste-system-continuity-and-change"
              },
              {
                "name": "Tribal Society in India",
                "slug": "tribal-society-in-india"
              }
            ]
          },
          {
            "name": "The Market as a Social Institution",
            "slug": "the-market-as-a-social-institution",
            "topics": [
              {
                "name": "Sociological Perspective on Markets",
                "slug": "sociological-perspective-on-markets"
              },
              {
                "name": "Changing Nature of Indian Markets",
                "slug": "changing-nature-of-indian-markets"
              },
              {
                "name": "Institutions Behind Markets",
                "slug": "institutions-behind-markets"
              }
            ]
          },
          {
            "name": "Patterns of Social Inequality and Exclusion",
            "slug": "patterns-of-social-inequality-and-exclusion",
            "topics": [
              {
                "name": "Caste-Based Inequality and Exclusion",
                "slug": "caste-based-inequality-and-exclusion"
              },
              {
                "name": "Tribal Communities and Exclusion",
                "slug": "tribal-communities-and-exclusion"
              },
              {
                "name": "Patriarchy and Gender-Based Inequality",
                "slug": "patriarchy-and-gender-based-inequality"
              },
              {
                "name": "Disability and Its Social Dimensions",
                "slug": "disability-and-its-social-dimensions"
              }
            ]
          },
          {
            "name": "Challenges of Cultural Diversity",
            "slug": "challenges-of-cultural-diversity",
            "topics": [
              {
                "name": "Cultural Communities and Nation",
                "slug": "cultural-communities-and-nation"
              },
              {
                "name": "Communalism, Regionalism and Secularism",
                "slug": "communalism-regionalism-and-secularism"
              },
              {
                "name": "Nation, Democracy and Diversity",
                "slug": "nation-democracy-and-diversity"
              }
            ]
          },
          {
            "name": "Structural Change in Indian Society",
            "slug": "structural-change-in-indian-society",
            "topics": [
              {
                "name": "Colonialism's Impact on Social Structure",
                "slug": "colonialism-s-impact-on-social-structure"
              },
              {
                "name": "Land Reforms and Agrarian Relations",
                "slug": "land-reforms-and-agrarian-relations"
              },
              {
                "name": "Growth of Modern Industry",
                "slug": "growth-of-modern-industry"
              }
            ]
          },
          {
            "name": "Cultural Change in Indian Society",
            "slug": "cultural-change-in-indian-society",
            "topics": [
              {
                "name": "Sanskritisation and Modernisation",
                "slug": "sanskritisation-and-modernisation"
              },
              {
                "name": "Westernisation and Its Impact",
                "slug": "westernisation-and-its-impact"
              },
              {
                "name": "Impact of Media on Culture",
                "slug": "impact-of-media-on-culture"
              }
            ]
          },
          {
            "name": "The Story of Indian Democracy",
            "slug": "the-story-of-indian-democracy",
            "topics": [
              {
                "name": "Roots of Indian Democracy",
                "slug": "roots-of-indian-democracy"
              },
              {
                "name": "Panchayati Raj and Decentralisation of Power",
                "slug": "panchayati-raj-and-decentralisation-of-power"
              },
              {
                "name": "Political Parties and Pressure Groups",
                "slug": "political-parties-and-pressure-groups"
              }
            ]
          },
          {
            "name": "Change and Development in Rural Society",
            "slug": "change-and-development-in-rural-society",
            "topics": [
              {
                "name": "Land Reforms and Green Revolution — Social Impact",
                "slug": "land-reforms-and-green-revolution-social-impact"
              },
              {
                "name": "Agrarian Class Structure",
                "slug": "agrarian-class-structure"
              },
              {
                "name": "Transformations in Rural Society",
                "slug": "transformations-in-rural-society"
              }
            ]
          },
          {
            "name": "Change and Development in Industrial Society",
            "slug": "change-and-development-in-industrial-society",
            "topics": [
              {
                "name": "Industrialisation — Pre and Post Independence",
                "slug": "industrialisation-pre-and-post-independence"
              },
              {
                "name": "Growth of Urban Settlements",
                "slug": "growth-of-urban-settlements"
              },
              {
                "name": "Formal and Informal Labour",
                "slug": "formal-and-informal-labour"
              }
            ]
          },
          {
            "name": "Globalisation and Social Change",
            "slug": "globalisation-and-social-change",
            "topics": [
              {
                "name": "Meaning and Impact of Globalisation on Indian Society",
                "slug": "meaning-and-impact-of-globalisation-on-indian-society"
              },
              {
                "name": "Privatisation and Its Social Consequences",
                "slug": "privatisation-and-its-social-consequences"
              },
              {
                "name": "Globalisation, Consumption and Culture",
                "slug": "globalisation-consumption-and-culture"
              }
            ]
          },
          {
            "name": "Mass Media and Communication",
            "slug": "mass-media-and-communication",
            "topics": [
              {
                "name": "Types of Mass Media — Print, Electronic, Social Media",
                "slug": "types-of-mass-media-print-electronic-social-media"
              },
              {
                "name": "Media and Democratic Practices",
                "slug": "media-and-democratic-practices"
              },
              {
                "name": "Media and Social Change",
                "slug": "media-and-social-change"
              }
            ]
          },
          {
            "name": "Social Movements",
            "slug": "social-movements",
            "topics": [
              {
                "name": "Concept and Types of Social Movements",
                "slug": "concept-and-types-of-social-movements"
              },
              {
                "name": "Class-Based Movements — Peasant and Labour",
                "slug": "class-based-movements-peasant-and-labour"
              },
              {
                "name": "Caste-Based, Ethnic and Women's Movements",
                "slug": "caste-based-ethnic-and-women-s-movements"
              },
              {
                "name": "Environmental Movements",
                "slug": "environmental-movements"
              }
            ]
          }
        ]
      },
      {
        "name": "Philosophy",
        "slug": "philosophy",
        "chapters": [
          {
            "name": "Philosophy of Religion — Nature and Scope",
            "slug": "philosophy-of-religion-nature-and-scope",
            "topics": [
              {
                "name": "Meaning and Nature of Philosophy of Religion",
                "slug": "meaning-and-nature-of-philosophy-of-religion"
              },
              {
                "name": "Religious Experience — Nature and Characteristics",
                "slug": "religious-experience-nature-and-characteristics"
              }
            ]
          },
          {
            "name": "Philosophy of Religion — Concept of God",
            "slug": "philosophy-of-religion-concept-of-god",
            "topics": [
              {
                "name": "Cosmological Argument for the Existence of God",
                "slug": "cosmological-argument-for-the-existence-of-god"
              },
              {
                "name": "Teleological Argument for the Existence of God",
                "slug": "teleological-argument-for-the-existence-of-god"
              },
              {
                "name": "Ontological Argument for the Existence of God",
                "slug": "ontological-argument-for-the-existence-of-god"
              },
              {
                "name": "Problem of Evil",
                "slug": "problem-of-evil"
              }
            ]
          },
          {
            "name": "Philosophy of Religion — Immortality of Soul",
            "slug": "philosophy-of-religion-immortality-of-soul",
            "topics": [
              {
                "name": "Concept of Soul — Nature",
                "slug": "concept-of-soul-nature"
              },
              {
                "name": "Arguments for Immortality of Soul",
                "slug": "arguments-for-immortality-of-soul"
              },
              {
                "name": "Karma and Rebirth — Indian Philosophical Views",
                "slug": "karma-and-rebirth-indian-philosophical-views"
              }
            ]
          },
          {
            "name": "Applied Ethics — Nature and Scope",
            "slug": "applied-ethics-nature-and-scope",
            "topics": [
              {
                "name": "Nature and Subject Matter of Applied Ethics",
                "slug": "nature-and-subject-matter-of-applied-ethics"
              },
              {
                "name": "Normative Theories and Applied Ethics",
                "slug": "normative-theories-and-applied-ethics"
              }
            ]
          },
          {
            "name": "Applied Ethics — Bio-Medical Issues",
            "slug": "applied-ethics-bio-medical-issues",
            "topics": [
              {
                "name": "Euthanasia — Arguments For and Against",
                "slug": "euthanasia-arguments-for-and-against"
              },
              {
                "name": "Organ Transplantation — Ethical Issues",
                "slug": "organ-transplantation-ethical-issues"
              },
              {
                "name": "Surrogacy and Genetic Engineering — Ethical Issues",
                "slug": "surrogacy-and-genetic-engineering-ethical-issues"
              }
            ]
          },
          {
            "name": "Applied Ethics — Environmental Issues",
            "slug": "applied-ethics-environmental-issues",
            "topics": [
              {
                "name": "Anthropocentrism vs Ecocentrism",
                "slug": "anthropocentrism-vs-ecocentrism"
              },
              {
                "name": "Sustainable Development — Ethical Dimensions",
                "slug": "sustainable-development-ethical-dimensions"
              },
              {
                "name": "Deep Ecology",
                "slug": "deep-ecology"
              }
            ]
          },
          {
            "name": "Introduction to Logic",
            "slug": "introduction-to-logic",
            "topics": [
              {
                "name": "Nature and Subject Matter of Logic",
                "slug": "nature-and-subject-matter-of-logic"
              },
              {
                "name": "Terms — Denotation and Connotation",
                "slug": "terms-denotation-and-connotation"
              },
              {
                "name": "Distinction Between Truth and Validity",
                "slug": "distinction-between-truth-and-validity"
              }
            ]
          },
          {
            "name": "Categorical Propositions",
            "slug": "categorical-propositions",
            "topics": [
              {
                "name": "Definition and Structure of Categorical Proposition",
                "slug": "definition-and-structure-of-categorical-proposition"
              },
              {
                "name": "Classification — A, E, I, O Propositions",
                "slug": "classification-a-e-i-o-propositions"
              },
              {
                "name": "Distribution of Terms",
                "slug": "distribution-of-terms"
              }
            ]
          },
          {
            "name": "Deductive and Inductive Reasoning",
            "slug": "deductive-and-inductive-reasoning",
            "topics": [
              {
                "name": "Nature of Deductive Reasoning",
                "slug": "nature-of-deductive-reasoning"
              },
              {
                "name": "Nature of Inductive Reasoning",
                "slug": "nature-of-inductive-reasoning"
              },
              {
                "name": "Difference Between Deduction and Induction",
                "slug": "difference-between-deduction-and-induction"
              }
            ]
          },
          {
            "name": "Immediate Inference — Opposition and Eduction",
            "slug": "immediate-inference-opposition-and-eduction",
            "topics": [
              {
                "name": "Square of Opposition",
                "slug": "square-of-opposition"
              },
              {
                "name": "Conversion",
                "slug": "conversion"
              },
              {
                "name": "Obversion",
                "slug": "obversion"
              }
            ]
          },
          {
            "name": "Categorical Syllogism",
            "slug": "categorical-syllogism",
            "topics": [
              {
                "name": "Structure of Categorical Syllogism",
                "slug": "structure-of-categorical-syllogism"
              },
              {
                "name": "Rules of Categorical Syllogism",
                "slug": "rules-of-categorical-syllogism"
              },
              {
                "name": "Figures and Moods of Syllogism",
                "slug": "figures-and-moods-of-syllogism"
              }
            ]
          },
          {
            "name": "Fallacies",
            "slug": "fallacies",
            "topics": [
              {
                "name": "Formal Fallacies",
                "slug": "formal-fallacies"
              },
              {
                "name": "Informal Fallacies",
                "slug": "informal-fallacies"
              },
              {
                "name": "Fallacies of Relevance and Ambiguity",
                "slug": "fallacies-of-relevance-and-ambiguity"
              }
            ]
          }
        ]
      },
      {
        "name": "Physics",
        "slug": "physics",
        "chapters": [
          {
            "name": "Electric Charges and Fields",
            "slug": "electric-charges-and-fields",
            "topics": [
              {
                "name": "Electric Charge — Properties and Conservation",
                "slug": "electric-charge-properties-and-conservation"
              },
              {
                "name": "Coulomb's Law and Superposition Principle",
                "slug": "coulomb-s-law-and-superposition-principle"
              },
              {
                "name": "Electric Field and Field Lines",
                "slug": "electric-field-and-field-lines"
              },
              {
                "name": "Electric Dipole and Dipole Moment",
                "slug": "electric-dipole-and-dipole-moment"
              },
              {
                "name": "Gauss's Law and Applications",
                "slug": "gauss-s-law-and-applications"
              }
            ]
          },
          {
            "name": "Electrostatic Potential and Capacitance",
            "slug": "electrostatic-potential-and-capacitance",
            "topics": [
              {
                "name": "Electric Potential and Potential Difference",
                "slug": "electric-potential-and-potential-difference"
              },
              {
                "name": "Potential due to Point Charge and Dipole",
                "slug": "potential-due-to-point-charge-and-dipole"
              },
              {
                "name": "Equipotential Surfaces",
                "slug": "equipotential-surfaces"
              },
              {
                "name": "Capacitance and Capacitors",
                "slug": "capacitance-and-capacitors"
              },
              {
                "name": "Combination of Capacitors — Series and Parallel",
                "slug": "combination-of-capacitors-series-and-parallel"
              },
              {
                "name": "Energy Stored in a Capacitor",
                "slug": "energy-stored-in-a-capacitor"
              }
            ]
          },
          {
            "name": "Current Electricity",
            "slug": "current-electricity",
            "topics": [
              {
                "name": "Electric Current and Drift Velocity",
                "slug": "electric-current-and-drift-velocity"
              },
              {
                "name": "Ohm's Law and Resistance",
                "slug": "ohm-s-law-and-resistance"
              },
              {
                "name": "Resistivity and Its Temperature Dependence",
                "slug": "resistivity-and-its-temperature-dependence"
              },
              {
                "name": "Combination of Resistors — Series and Parallel",
                "slug": "combination-of-resistors-series-and-parallel"
              },
              {
                "name": "Kirchhoff's Laws",
                "slug": "kirchhoff-s-laws"
              },
              {
                "name": "Wheatstone Bridge and Meter Bridge",
                "slug": "wheatstone-bridge-and-meter-bridge"
              },
              {
                "name": "Potentiometer — Principle and Applications",
                "slug": "potentiometer-principle-and-applications"
              }
            ]
          },
          {
            "name": "Moving Charges and Magnetism",
            "slug": "moving-charges-and-magnetism",
            "topics": [
              {
                "name": "Magnetic Force on a Moving Charge",
                "slug": "magnetic-force-on-a-moving-charge"
              },
              {
                "name": "Biot-Savart Law",
                "slug": "biot-savart-law"
              },
              {
                "name": "Ampere's Circuital Law",
                "slug": "ampere-s-circuital-law"
              },
              {
                "name": "Force Between Two Parallel Current Carrying Conductors",
                "slug": "force-between-two-parallel-current-carrying-conductors"
              },
              {
                "name": "Moving Coil Galvanometer",
                "slug": "moving-coil-galvanometer"
              }
            ]
          },
          {
            "name": "Magnetism and Matter",
            "slug": "magnetism-and-matter",
            "topics": [
              {
                "name": "Bar Magnet and Magnetic Field Lines",
                "slug": "bar-magnet-and-magnetic-field-lines"
              },
              {
                "name": "Earth's Magnetism",
                "slug": "earth-s-magnetism"
              },
              {
                "name": "Magnetic Properties of Materials — Dia, Para, Ferro",
                "slug": "magnetic-properties-of-materials-dia-para-ferro"
              }
            ]
          },
          {
            "name": "Electromagnetic Induction",
            "slug": "electromagnetic-induction",
            "topics": [
              {
                "name": "Faraday's Laws of Electromagnetic Induction",
                "slug": "faraday-s-laws-of-electromagnetic-induction"
              },
              {
                "name": "Lenz's Law and Conservation of Energy",
                "slug": "lenz-s-law-and-conservation-of-energy"
              },
              {
                "name": "Motional EMF",
                "slug": "motional-emf"
              },
              {
                "name": "Self and Mutual Inductance",
                "slug": "self-and-mutual-inductance"
              }
            ]
          },
          {
            "name": "Alternating Current",
            "slug": "alternating-current",
            "topics": [
              {
                "name": "AC Voltage Applied to Resistor, Inductor and Capacitor",
                "slug": "ac-voltage-applied-to-resistor-inductor-and-capacitor"
              },
              {
                "name": "LCR Circuit and Resonance",
                "slug": "lcr-circuit-and-resonance"
              },
              {
                "name": "Power in AC Circuit",
                "slug": "power-in-ac-circuit"
              },
              {
                "name": "Transformers",
                "slug": "transformers"
              }
            ]
          },
          {
            "name": "Electromagnetic Waves",
            "slug": "electromagnetic-waves",
            "topics": [
              {
                "name": "Displacement Current",
                "slug": "displacement-current"
              },
              {
                "name": "Electromagnetic Spectrum and Its Uses",
                "slug": "electromagnetic-spectrum-and-its-uses"
              }
            ]
          },
          {
            "name": "Ray Optics and Optical Instruments",
            "slug": "ray-optics-and-optical-instruments",
            "topics": [
              {
                "name": "Reflection and Refraction at Spherical Surfaces",
                "slug": "reflection-and-refraction-at-spherical-surfaces"
              },
              {
                "name": "Refraction through a Prism",
                "slug": "refraction-through-a-prism"
              },
              {
                "name": "Lens Maker's Formula and Lens Combination",
                "slug": "lens-maker-s-formula-and-lens-combination"
              },
              {
                "name": "Microscope and Telescope",
                "slug": "microscope-and-telescope"
              }
            ]
          },
          {
            "name": "Wave Optics",
            "slug": "wave-optics",
            "topics": [
              {
                "name": "Huygens' Principle",
                "slug": "huygens-principle"
              },
              {
                "name": "Young's Double Slit Experiment",
                "slug": "young-s-double-slit-experiment"
              },
              {
                "name": "Diffraction and Polarisation of Light",
                "slug": "diffraction-and-polarisation-of-light"
              }
            ]
          },
          {
            "name": "Dual Nature of Radiation and Matter",
            "slug": "dual-nature-of-radiation-and-matter",
            "topics": [
              {
                "name": "Photoelectric Effect and Einstein's Equation",
                "slug": "photoelectric-effect-and-einstein-s-equation"
              },
              {
                "name": "Matter Waves — de Broglie Relation",
                "slug": "matter-waves-de-broglie-relation"
              }
            ]
          },
          {
            "name": "Atoms",
            "slug": "atoms",
            "topics": [
              {
                "name": "Rutherford's Model of Atom",
                "slug": "rutherford-s-model-of-atom"
              },
              {
                "name": "Bohr Model of Hydrogen Atom",
                "slug": "bohr-model-of-hydrogen-atom"
              },
              {
                "name": "Atomic Spectra",
                "slug": "atomic-spectra"
              }
            ]
          },
          {
            "name": "Nuclei",
            "slug": "nuclei",
            "topics": [
              {
                "name": "Composition and Size of Nucleus",
                "slug": "composition-and-size-of-nucleus"
              },
              {
                "name": "Mass-Energy Relation and Binding Energy",
                "slug": "mass-energy-relation-and-binding-energy"
              },
              {
                "name": "Radioactivity — Alpha, Beta, Gamma Decay",
                "slug": "radioactivity-alpha-beta-gamma-decay"
              },
              {
                "name": "Nuclear Fission and Fusion",
                "slug": "nuclear-fission-and-fusion"
              }
            ]
          },
          {
            "name": "Semiconductor Electronics",
            "slug": "semiconductor-electronics",
            "topics": [
              {
                "name": "Energy Bands in Solids",
                "slug": "energy-bands-in-solids"
              },
              {
                "name": "Intrinsic and Extrinsic Semiconductors",
                "slug": "intrinsic-and-extrinsic-semiconductors"
              },
              {
                "name": "p-n Junction Diode and Rectifier",
                "slug": "p-n-junction-diode-and-rectifier"
              },
              {
                "name": "Transistor — Working and Characteristics",
                "slug": "transistor-working-and-characteristics"
              },
              {
                "name": "Logic Gates",
                "slug": "logic-gates"
              }
            ]
          }
        ]
      },
      {
        "name": "Chemistry",
        "slug": "chemistry",
        "chapters": [
          {
            "name": "Solutions",
            "slug": "solutions",
            "topics": [
              {
                "name": "Types of Solutions and Concentration Terms",
                "slug": "types-of-solutions-and-concentration-terms"
              },
              {
                "name": "Raoult's Law and Ideal-Non-Ideal Solutions",
                "slug": "raoult-s-law-and-ideal-non-ideal-solutions"
              },
              {
                "name": "Colligative Properties",
                "slug": "colligative-properties"
              },
              {
                "name": "Abnormal Molar Mass and van't Hoff Factor",
                "slug": "abnormal-molar-mass-and-van-t-hoff-factor"
              }
            ]
          },
          {
            "name": "Electrochemistry",
            "slug": "electrochemistry",
            "topics": [
              {
                "name": "Electrochemical Cells and EMF",
                "slug": "electrochemical-cells-and-emf"
              },
              {
                "name": "Nernst Equation",
                "slug": "nernst-equation"
              },
              {
                "name": "Conductance and Kohlrausch's Law",
                "slug": "conductance-and-kohlrausch-s-law"
              },
              {
                "name": "Electrolysis and Faraday's Laws",
                "slug": "electrolysis-and-faraday-s-laws"
              },
              {
                "name": "Batteries and Fuel Cells",
                "slug": "batteries-and-fuel-cells"
              }
            ]
          },
          {
            "name": "Chemical Kinetics",
            "slug": "chemical-kinetics",
            "topics": [
              {
                "name": "Rate of Reaction and Factors Affecting It",
                "slug": "rate-of-reaction-and-factors-affecting-it"
              },
              {
                "name": "Order and Molecularity of Reaction",
                "slug": "order-and-molecularity-of-reaction"
              },
              {
                "name": "Integrated Rate Equations — Zero and First Order",
                "slug": "integrated-rate-equations-zero-and-first-order"
              },
              {
                "name": "Arrhenius Equation and Activation Energy",
                "slug": "arrhenius-equation-and-activation-energy"
              }
            ]
          },
          {
            "name": "d- and f-Block Elements",
            "slug": "d-and-f-block-elements",
            "topics": [
              {
                "name": "Electronic Configuration of Transition Elements",
                "slug": "electronic-configuration-of-transition-elements"
              },
              {
                "name": "General Trends — Oxidation States, Magnetic Properties",
                "slug": "general-trends-oxidation-states-magnetic-properties"
              },
              {
                "name": "Lanthanoids and Actinoids",
                "slug": "lanthanoids-and-actinoids"
              }
            ]
          },
          {
            "name": "Coordination Compounds",
            "slug": "coordination-compounds",
            "topics": [
              {
                "name": "Werner's Theory and Nomenclature",
                "slug": "werner-s-theory-and-nomenclature"
              },
              {
                "name": "Types of Ligands and Coordination Number",
                "slug": "types-of-ligands-and-coordination-number"
              },
              {
                "name": "Isomerism in Coordination Compounds",
                "slug": "isomerism-in-coordination-compounds"
              },
              {
                "name": "Bonding — Valence Bond and Crystal Field Theory",
                "slug": "bonding-valence-bond-and-crystal-field-theory"
              }
            ]
          },
          {
            "name": "Haloalkanes and Haloarenes",
            "slug": "haloalkanes-and-haloarenes",
            "topics": [
              {
                "name": "Nomenclature and Nature of C–X Bond",
                "slug": "nomenclature-and-nature-of-c-x-bond"
              },
              {
                "name": "Preparation of Haloalkanes",
                "slug": "preparation-of-haloalkanes"
              },
              {
                "name": "Reactions — Substitution (SN1, SN2)",
                "slug": "reactions-substitution-sn1-sn2"
              },
              {
                "name": "Haloarenes — Preparation and Properties",
                "slug": "haloarenes-preparation-and-properties"
              }
            ]
          },
          {
            "name": "Alcohols, Phenols and Ethers",
            "slug": "alcohols-phenols-and-ethers",
            "topics": [
              {
                "name": "Nomenclature and Preparation of Alcohols",
                "slug": "nomenclature-and-preparation-of-alcohols"
              },
              {
                "name": "Chemical Reactions of Alcohols",
                "slug": "chemical-reactions-of-alcohols"
              },
              {
                "name": "Preparation and Properties of Phenols",
                "slug": "preparation-and-properties-of-phenols"
              },
              {
                "name": "Preparation and Properties of Ethers",
                "slug": "preparation-and-properties-of-ethers"
              }
            ]
          },
          {
            "name": "Aldehydes, Ketones and Carboxylic Acids",
            "slug": "aldehydes-ketones-and-carboxylic-acids",
            "topics": [
              {
                "name": "Nomenclature and Preparation of Aldehydes and Ketones",
                "slug": "nomenclature-and-preparation-of-aldehydes-and-ketones"
              },
              {
                "name": "Nucleophilic Addition Reactions",
                "slug": "nucleophilic-addition-reactions"
              },
              {
                "name": "Preparation and Properties of Carboxylic Acids",
                "slug": "preparation-and-properties-of-carboxylic-acids"
              }
            ]
          },
          {
            "name": "Amines",
            "slug": "amines",
            "topics": [
              {
                "name": "Classification and Nomenclature of Amines",
                "slug": "classification-and-nomenclature-of-amines"
              },
              {
                "name": "Preparation of Amines",
                "slug": "preparation-of-amines"
              },
              {
                "name": "Chemical Reactions of Amines",
                "slug": "chemical-reactions-of-amines"
              },
              {
                "name": "Diazonium Salts",
                "slug": "diazonium-salts"
              }
            ]
          },
          {
            "name": "Biomolecules",
            "slug": "biomolecules",
            "topics": [
              {
                "name": "Carbohydrates — Classification and Structure",
                "slug": "carbohydrates-classification-and-structure"
              },
              {
                "name": "Proteins — Amino Acids and Structure",
                "slug": "proteins-amino-acids-and-structure"
              },
              {
                "name": "Enzymes",
                "slug": "enzymes"
              },
              {
                "name": "Vitamins and Nucleic Acids",
                "slug": "vitamins-and-nucleic-acids"
              }
            ]
          }
        ]
      },
      {
        "name": "Mathematics",
        "slug": "mathematics",
        "chapters": [
          {
            "name": "Relations and Functions",
            "slug": "relations-and-functions",
            "topics": [
              {
                "name": "Types of Relations — Reflexive, Symmetric, Transitive",
                "slug": "types-of-relations-reflexive-symmetric-transitive"
              },
              {
                "name": "Equivalence Relations",
                "slug": "equivalence-relations"
              },
              {
                "name": "Types of Functions — One-One, Onto, Bijective",
                "slug": "types-of-functions-one-one-onto-bijective"
              },
              {
                "name": "Composition of Functions and Invertible Functions",
                "slug": "composition-of-functions-and-invertible-functions"
              }
            ]
          },
          {
            "name": "Inverse Trigonometric Functions",
            "slug": "inverse-trigonometric-functions",
            "topics": [
              {
                "name": "Domain and Range of Inverse Trigonometric Functions",
                "slug": "domain-and-range-of-inverse-trigonometric-functions"
              },
              {
                "name": "Properties of Inverse Trigonometric Functions",
                "slug": "properties-of-inverse-trigonometric-functions"
              }
            ]
          },
          {
            "name": "Matrices",
            "slug": "matrices",
            "topics": [
              {
                "name": "Types of Matrices and Operations",
                "slug": "types-of-matrices-and-operations"
              },
              {
                "name": "Transpose, Symmetric and Skew-Symmetric Matrices",
                "slug": "transpose-symmetric-and-skew-symmetric-matrices"
              },
              {
                "name": "Elementary Row/Column Operations",
                "slug": "elementary-row-column-operations"
              },
              {
                "name": "Invertible Matrices",
                "slug": "invertible-matrices"
              }
            ]
          },
          {
            "name": "Determinants",
            "slug": "determinants",
            "topics": [
              {
                "name": "Determinant — Definition and Properties",
                "slug": "determinant-definition-and-properties"
              },
              {
                "name": "Area of Triangle using Determinants",
                "slug": "area-of-triangle-using-determinants"
              },
              {
                "name": "Adjoint and Inverse of a Matrix",
                "slug": "adjoint-and-inverse-of-a-matrix"
              },
              {
                "name": "Applications — Solving System of Linear Equations",
                "slug": "applications-solving-system-of-linear-equations"
              }
            ]
          },
          {
            "name": "Continuity and Differentiability",
            "slug": "continuity-and-differentiability",
            "topics": [
              {
                "name": "Continuity of a Function",
                "slug": "continuity-of-a-function"
              },
              {
                "name": "Differentiability and Chain Rule",
                "slug": "differentiability-and-chain-rule"
              },
              {
                "name": "Derivatives of Implicit and Inverse Trigonometric Functions",
                "slug": "derivatives-of-implicit-and-inverse-trigonometric-functions"
              },
              {
                "name": "Logarithmic Differentiation",
                "slug": "logarithmic-differentiation"
              },
              {
                "name": "Second Order Derivatives",
                "slug": "second-order-derivatives"
              },
              {
                "name": "Mean Value Theorem",
                "slug": "mean-value-theorem"
              }
            ]
          },
          {
            "name": "Applications of Derivatives",
            "slug": "applications-of-derivatives",
            "topics": [
              {
                "name": "Rate of Change of Quantities",
                "slug": "rate-of-change-of-quantities"
              },
              {
                "name": "Increasing and Decreasing Functions",
                "slug": "increasing-and-decreasing-functions"
              },
              {
                "name": "Tangents and Normals",
                "slug": "tangents-and-normals"
              },
              {
                "name": "Maxima and Minima",
                "slug": "maxima-and-minima"
              }
            ]
          },
          {
            "name": "Integrals",
            "slug": "integrals",
            "topics": [
              {
                "name": "Integration as Inverse of Differentiation",
                "slug": "integration-as-inverse-of-differentiation"
              },
              {
                "name": "Methods of Integration — Substitution, Partial Fractions, By Parts",
                "slug": "methods-of-integration-substitution-partial-fractions-by-parts"
              },
              {
                "name": "Definite Integrals and Their Properties",
                "slug": "definite-integrals-and-their-properties"
              }
            ]
          },
          {
            "name": "Applications of Integrals",
            "slug": "applications-of-integrals",
            "topics": [
              {
                "name": "Area under Simple Curves",
                "slug": "area-under-simple-curves"
              },
              {
                "name": "Area between Two Curves",
                "slug": "area-between-two-curves"
              }
            ]
          },
          {
            "name": "Differential Equations",
            "slug": "differential-equations",
            "topics": [
              {
                "name": "Order and Degree of Differential Equations",
                "slug": "order-and-degree-of-differential-equations"
              },
              {
                "name": "General and Particular Solutions",
                "slug": "general-and-particular-solutions"
              },
              {
                "name": "Method of Separation of Variables",
                "slug": "method-of-separation-of-variables"
              },
              {
                "name": "Homogeneous Differential Equations",
                "slug": "homogeneous-differential-equations"
              },
              {
                "name": "Linear Differential Equations",
                "slug": "linear-differential-equations"
              }
            ]
          },
          {
            "name": "Vector Algebra",
            "slug": "vector-algebra",
            "topics": [
              {
                "name": "Vectors — Types and Basic Concepts",
                "slug": "vectors-types-and-basic-concepts"
              },
              {
                "name": "Addition and Scalar Multiplication of Vectors",
                "slug": "addition-and-scalar-multiplication-of-vectors"
              },
              {
                "name": "Dot Product and Cross Product",
                "slug": "dot-product-and-cross-product"
              },
              {
                "name": "Scalar Triple Product",
                "slug": "scalar-triple-product"
              }
            ]
          },
          {
            "name": "Three Dimensional Geometry",
            "slug": "three-dimensional-geometry",
            "topics": [
              {
                "name": "Direction Cosines and Direction Ratios",
                "slug": "direction-cosines-and-direction-ratios"
              },
              {
                "name": "Equation of a Line in Space",
                "slug": "equation-of-a-line-in-space"
              },
              {
                "name": "Equation of a Plane",
                "slug": "equation-of-a-plane"
              },
              {
                "name": "Angle Between Two Lines/Planes and Shortest Distance",
                "slug": "angle-between-two-lines-planes-and-shortest-distance"
              }
            ]
          },
          {
            "name": "Linear Programming",
            "slug": "linear-programming",
            "topics": [
              {
                "name": "Mathematical Formulation of LPP",
                "slug": "mathematical-formulation-of-lpp"
              },
              {
                "name": "Graphical Method of Solving LPP",
                "slug": "graphical-method-of-solving-lpp"
              },
              {
                "name": "Feasible Region and Optimal Solution",
                "slug": "feasible-region-and-optimal-solution"
              }
            ]
          },
          {
            "name": "Probability",
            "slug": "probability",
            "topics": [
              {
                "name": "Conditional Probability",
                "slug": "conditional-probability"
              },
              {
                "name": "Multiplication Theorem and Independent Events",
                "slug": "multiplication-theorem-and-independent-events"
              },
              {
                "name": "Bayes' Theorem",
                "slug": "bayes-theorem"
              },
              {
                "name": "Random Variables and Probability Distributions",
                "slug": "random-variables-and-probability-distributions"
              },
              {
                "name": "Bernoulli Trials and Binomial Distribution",
                "slug": "bernoulli-trials-and-binomial-distribution"
              }
            ]
          }
        ]
      },
      {
        "name": "Biology",
        "slug": "biology",
        "chapters": [
          {
            "name": "Reproduction in Organisms",
            "slug": "reproduction-in-organisms",
            "topics": [
              {
                "name": "Modes of Reproduction — Asexual and Sexual",
                "slug": "modes-of-reproduction-asexual-and-sexual"
              },
              {
                "name": "Life Span and Life Cycle Events",
                "slug": "life-span-and-life-cycle-events"
              }
            ]
          },
          {
            "name": "Sexual Reproduction in Flowering Plants",
            "slug": "sexual-reproduction-in-flowering-plants",
            "topics": [
              {
                "name": "Flower Structure and Pollination",
                "slug": "flower-structure-and-pollination"
              },
              {
                "name": "Double Fertilisation",
                "slug": "double-fertilisation"
              },
              {
                "name": "Post-Fertilisation Events — Seed and Fruit Formation",
                "slug": "post-fertilisation-events-seed-and-fruit-formation"
              }
            ]
          },
          {
            "name": "Human Reproduction",
            "slug": "human-reproduction",
            "topics": [
              {
                "name": "Male and Female Reproductive System",
                "slug": "male-and-female-reproductive-system"
              },
              {
                "name": "Gametogenesis",
                "slug": "gametogenesis"
              },
              {
                "name": "Menstrual Cycle",
                "slug": "menstrual-cycle"
              },
              {
                "name": "Fertilisation, Embryonic Development and Parturition",
                "slug": "fertilisation-embryonic-development-and-parturition"
              }
            ]
          },
          {
            "name": "Reproductive Health",
            "slug": "reproductive-health",
            "topics": [
              {
                "name": "Reproductive Health Problems and Strategies",
                "slug": "reproductive-health-problems-and-strategies"
              },
              {
                "name": "Birth Control Methods",
                "slug": "birth-control-methods"
              },
              {
                "name": "Infertility and Assisted Reproductive Technologies",
                "slug": "infertility-and-assisted-reproductive-technologies"
              }
            ]
          },
          {
            "name": "Principles of Inheritance and Variation",
            "slug": "principles-of-inheritance-and-variation",
            "topics": [
              {
                "name": "Mendel's Laws of Inheritance",
                "slug": "mendel-s-laws-of-inheritance"
              },
              {
                "name": "Chromosomal Theory of Inheritance",
                "slug": "chromosomal-theory-of-inheritance"
              },
              {
                "name": "Sex Determination in Humans",
                "slug": "sex-determination-in-humans"
              },
              {
                "name": "Linkage and Recombination",
                "slug": "linkage-and-recombination"
              },
              {
                "name": "Pedigree Analysis and Genetic Disorders",
                "slug": "pedigree-analysis-and-genetic-disorders"
              }
            ]
          },
          {
            "name": "Molecular Basis of Inheritance",
            "slug": "molecular-basis-of-inheritance",
            "topics": [
              {
                "name": "DNA Structure and Packaging",
                "slug": "dna-structure-and-packaging"
              },
              {
                "name": "DNA Replication",
                "slug": "dna-replication"
              },
              {
                "name": "Transcription and Genetic Code",
                "slug": "transcription-and-genetic-code"
              },
              {
                "name": "Translation and Gene Expression Regulation",
                "slug": "translation-and-gene-expression-regulation"
              },
              {
                "name": "Human Genome Project",
                "slug": "human-genome-project"
              }
            ]
          },
          {
            "name": "Evolution",
            "slug": "evolution",
            "topics": [
              {
                "name": "Origin of Life",
                "slug": "origin-of-life"
              },
              {
                "name": "Evidence for Evolution",
                "slug": "evidence-for-evolution"
              },
              {
                "name": "Darwinism and Modern Synthetic Theory",
                "slug": "darwinism-and-modern-synthetic-theory"
              },
              {
                "name": "Hardy-Weinberg Principle",
                "slug": "hardy-weinberg-principle"
              }
            ]
          },
          {
            "name": "Human Health and Disease",
            "slug": "human-health-and-disease",
            "topics": [
              {
                "name": "Common Diseases — Bacterial, Viral, Protozoan",
                "slug": "common-diseases-bacterial-viral-protozoan"
              },
              {
                "name": "Immunity — Innate and Acquired",
                "slug": "immunity-innate-and-acquired"
              },
              {
                "name": "AIDS and Cancer",
                "slug": "aids-and-cancer"
              },
              {
                "name": "Drugs and Alcohol Abuse",
                "slug": "drugs-and-alcohol-abuse"
              }
            ]
          },
          {
            "name": "Microbes in Human Welfare",
            "slug": "microbes-in-human-welfare",
            "topics": [
              {
                "name": "Microbes in Household Products and Industrial Products",
                "slug": "microbes-in-household-products-and-industrial-products"
              },
              {
                "name": "Microbes in Sewage Treatment and Biogas Production",
                "slug": "microbes-in-sewage-treatment-and-biogas-production"
              },
              {
                "name": "Microbes as Biocontrol Agents and Biofertilisers",
                "slug": "microbes-as-biocontrol-agents-and-biofertilisers"
              }
            ]
          },
          {
            "name": "Biotechnology — Principles and Processes",
            "slug": "biotechnology-principles-and-processes",
            "topics": [
              {
                "name": "Genetic Engineering — Tools (Restriction Enzymes, Vectors)",
                "slug": "genetic-engineering-tools-restriction-enzymes-vectors"
              },
              {
                "name": "Recombinant DNA Technology Process",
                "slug": "recombinant-dna-technology-process"
              }
            ]
          },
          {
            "name": "Biotechnology and Its Applications",
            "slug": "biotechnology-and-its-applications",
            "topics": [
              {
                "name": "Biotechnology in Agriculture — Bt Crops",
                "slug": "biotechnology-in-agriculture-bt-crops"
              },
              {
                "name": "Biotechnology in Medicine — Insulin, Gene Therapy",
                "slug": "biotechnology-in-medicine-insulin-gene-therapy"
              },
              {
                "name": "Genetically Modified Organisms and Biosafety",
                "slug": "genetically-modified-organisms-and-biosafety"
              }
            ]
          },
          {
            "name": "Organisms and Populations",
            "slug": "organisms-and-populations",
            "topics": [
              {
                "name": "Organism and Its Environment",
                "slug": "organism-and-its-environment"
              },
              {
                "name": "Population Attributes and Growth Models",
                "slug": "population-attributes-and-growth-models"
              },
              {
                "name": "Population Interactions",
                "slug": "population-interactions"
              }
            ]
          },
          {
            "name": "Ecosystem",
            "slug": "ecosystem",
            "topics": [
              {
                "name": "Ecosystem Structure and Function",
                "slug": "ecosystem-structure-and-function"
              },
              {
                "name": "Energy Flow and Food Chains",
                "slug": "energy-flow-and-food-chains"
              },
              {
                "name": "Ecological Pyramids",
                "slug": "ecological-pyramids"
              },
              {
                "name": "Nutrient Cycling — Carbon and Phosphorus",
                "slug": "nutrient-cycling-carbon-and-phosphorus"
              }
            ]
          },
          {
            "name": "Biodiversity and Conservation",
            "slug": "biodiversity-and-conservation",
            "topics": [
              {
                "name": "Levels and Patterns of Biodiversity",
                "slug": "levels-and-patterns-of-biodiversity"
              },
              {
                "name": "Loss of Biodiversity",
                "slug": "loss-of-biodiversity"
              },
              {
                "name": "Biodiversity Conservation Strategies",
                "slug": "biodiversity-conservation-strategies"
              }
            ]
          }
        ]
      }
    ]
  }
};

export const EXAM_LABEL = {
  "jee-main": "JEE Main",
  "jee-advanced": "JEE Advanced",
  "neet": "NEET",
  "ssc-cgl": "SSC CGL",
  "cuet": "CUET"
};
