const diseaseData = [
  {
    name: "Apple___Apple_scab",
    info: "<center><p>Fruit <b>Apple</b><br/><p>Disease Name <b>Apple Scab</b><br/><h5>Info</h5><p>A serious disease of apples and ornamental crabapples, apple scab (Venturia inaequalis) attacks both leaves and fruit. The fungal disease forms pale yellow or olive-green spots on the upper surface of leaves. Dark, velvety spots may appear on the lower surface. Severely infected leaves become twisted and puckered and may drop early in the summer.</p><i>Please consider the following suggestions:</i></center><ol><li><b>Rake under trees and destroy infected leaves</b> to reduce the number of fungal spores available to start the disease cycle over again next spring.</li><li><b>Water in the evening or early morning hours</b> (avoid overhead irrigation) to give the leaves time to dry out before infection can occur.</li><li>Spread a 3- to 6-inch layer of <b>compost</b> under trees, keeping it away from the trunk, to cover soil and prevent splash dispersal of the fungal spores.</li></ol>",
  },
  {
    name: "Apple___Black_rot",
    info: "<center><p>Fruit <b>Apple</b><br/><p>Disease Name <b>Black Rot</b><br/><h5>Info</h5><p>Black rot is caused by the fungus Diplodia seriata (syn Botryosphaeria obtusa). The fungus can infect dead tissue as well as living trunks, branches, leaves and fruits. The black rot fungi survive Minnesota winters in branch cankers and mummified fruit (shriveled and dried fruit) attached to the tree.</p><i>Please consider the following suggestions:</i></center><ol><li><b>Rake under trees and destroy infected leaves</b> to reduce the number of fungal spores available to start the disease cycle over again next spring.</li><li><b>Water in the evening or early morning hours</b> (avoid overhead irrigation) to give the leaves time to dry out before infection can occur.</li><li>Spread a 3- to 6-inch layer of <b>compost</b> under trees, keeping it away from the trunk, to cover soil and prevent splash dispersal of the fungal spores.</li></ol>",
  },
  {
    name: "Apple___Cedar_apple_rust",
    info: "<center><p>Fruit <b>Apple</b><br/><p>Disease Name <b>Apple Rust</b><br/><h5>Info</h5><p>Disease is most common on apple and crabapple. It occurs occasionally on hawthorn. Leaf spots are first yellow then turn bright orange-red, often with a bright red border. Small, raised, black dots form in the center of leaf spots on the upper leaf surface when the leaf spots mature.</p><i>Please consider the following suggestions:</i></center><ol><li>Remove galls from infected junipers. In some cases, juniper plants should be removed entirely.</li><li>Rake up and dispose of fallen leaves and other debris from under trees.</li><li>Apply preventative, disease-fighting fungicides labeled for use on apples weekly, starting with bud break, to protect trees from spores being released by the juniper host. This occurs only once per year, so additional applications after this springtime spread are not necessary.</li></ol>",
  },
  {
    name: "Apple___healthy",
    info: "<center><p>Fruit <b>Apple</b><br/><h5>Info</h5><p>Your Apple is Healthy &#128513;</p>",
  },
  {
    name: "Blueberry___healthy",
    info: "<center><p>Fruit <b>Blueberry</b><br/><h5>Info</h5><p>Your Blueberry is Healthy &#128513;</p>",
  },
  {
    name: "Cherry_(including_sour)___Powdery_mildew",
    info: "<center><p>Fruit <b>Cheery</b><br/><p>Disease Name <b>Powdery Mildew</b><br/><h5>Info</h5><p>Powdery mildew of sweet and sour cherry is caused by <b>Podosphaera clandestina, an obligate biotrophic fungus.</b></p><p>Mid- and late-season sweet cherry (Prunus avium) cultivars are commonly affected, rendering them unmarketable due to the covering of white fungal growth on the cherry surface (Fig. 1). Season long disease control of both leaves and fruit is critical to minimize overall disease pressure in the orchard and consequently to protect developing fruit from accumulating spores on their surfaces.</p>",
  },
  {
    name: "Cherry_(including_sour)___healthy",
    info: "<center><p>Fruit <b>Cherry</b><br/><h5>Info</h5><p>Your Cherry is Healthy &#128513;</p>",
  },
  {
    name: "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
    info: "<center><p>Fruit <b>Corn (Maize)</b><br/><p>Disease Name <b>Gray Leaf Spot</b><br/><h5>Info</h5><p>Grey leaf spot (GLS) is a foliar fungal disease that affects maize, also known as corn. GLS is considered one of the most significant yield-limiting diseases of corn worldwide</p><i>Please consider the following suggestions:</i></center><ol><li>The most proficient and economical method to reduce yield losses from corn grey leaf spot is by introducing resistant plant varieties</li></ol>",
  },
  {
    name: "Corn_(maize)___Common_rust_",
    info: "<center><p>Fruit <b>Corn (Maize)</b><br/><p>Disease Name <b>Corn Common Rust</b><br/><h5>Info</h5><p>The disease is caused by the fungus Puccinia sorghi. The fungus overwinters in an alternate host (a species of Oxalis) and releases spores during the spring. The spores can be transported over great distances by winds and rain. They start the infection process when landing on the leaves.</p><i>Please consider the following suggestions:</i></center><ol><li> Plant resistant varieties available locally.</li><li> Plant early to avoid optimal conditions for infection. </li><li> Monitor your crop regularly for signs of the disease, even more so during overcast weather. </li></ol>",
  },
  {
    name: "Corn_(maize)___Northern_Leaf_Blight",
    info: "<center><p>Fruit <b>Corn (Maize)</b><br/><p>Disease Name <b>Northern corn leaf blight</b><br/><h5>Info</h5><p>Northern corn leaf blight (NCLB) or Turcicum leaf blight (TLB) is a foliar disease of corn (maize) caused by Exserohilum turcicum, the anamorph of the ascomycete Setosphaeria turcica. With its characteristic cigar-shaped lesions, this disease can cause significant yield loss in susceptible corn hybrids</p><i>Please consider the following suggestions:</i></center><ol><li> Management of NCLB can be achieved primarily by using hybrids with resistance, but because resistance may not be complete or may fail, it is advantageous to utilize an integrated approach with different cropping practices and fungicides. Scouting fields and monitoring local conditions is vital to control this disease. </li></ol>",
  },
  {
    name: "Corn_(maize)___healthy",
    info: "<center><p>Fruit <b>Crop (Maize)</b><br/><h5>Info</h5><p>Your Corn is Healthy &#128513;</p>",
  },
  {
    name: "Grape___Black_rot",
    info: "<center><p>Fruit <b>Grape</b><br/><p>Disease Name <b>Black Rot</b><br/><h5>Info</h5><p>Grape black rot is a fungal disease caused by an ascomycetous fungus, Guignardia bidwellii, that attacks grape vines during hot and humid weather.</p><i>Please consider the following suggestions:</i></center><ol><li><b> Sanitation<b> Keep the fruit planting and surrounding areas free of weeds and tall grass. This practice will promote lower relative humidity and rapid drying of vines and thereby limit fungal infection.</li><li><b> Pruning<b> Prune the vines in early winter during dormancy. Select only a few strong, healthy canes from the previous year’s growth to produce the following season’s crop. Remove these prunings from the vineyard and burn or destroy.</li></ol>",
  },
  {
    name: "Grape___Esca_(Black_Measles)",
    info: "<center><p>Fruit <b>Grape</b><br/><p>Disease Name <b>Esca (Black Measles or Spanish Measles) </b><br/><h5>Info</h5><p>The leaf and berry symptoms may occur together in single cane or may show symptom on only one parts. The severe infestation of measles kill grapevine in a single year which is commonly called apoplexy. The symptoms are common in 5 to 7 year old vineyard. The prune wounds helps in pathogen entrance and establishment.</p><i>Please consider the following suggestions:</i></center><ol><li>Remove the infected berries, leaves and trunk and destroy them. Protect the prune wounds to minimize fungal infection using wound sealant (5% boric acid in acrylic paint) or essential oil or suitable fungicides.</li></ol>",
  },
  {
    name: "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
    info: "<center><p>Fruit <b>Grape</b><br/><p>Disease Name <b>Leaf blight (Isariopsis Leaf Spot) </b><br/><h5>Info</h5><p>Common in tropical and subtropical grapes. The disease appear late in the season. Cynthiana and Cabernet Sauvignon are susceptible to this pathogen</p><i>Please consider the following suggestions:</i></center><ol><li>Fungicides sprayed for other diseases in the season may help to reduce this disease.</li></ol>",
  },
  {
    name: "Grape___healthy",
    info: "<center><p>Fruit <b>Grape</b><br/><h5>Info</h5><p>Your Grape is Healthy &#128513;</p>",
  },
  {
    name: "Orange___Haunglongbing_(Citrus_greening)",
    info: "<center><p>Fruit <b>Orange</b><br/><p>Disease Name <b>Haunglongbing (Citrus greening) </b><br/><h5>Info</h5><p>Common in tropical and subtropical grapes. The disease appear late in the season. Cynthiana and Cabernet Sauvignon are susceptible to this pathogen</p><i>Please consider the following suggestions:</i></center><ol><li>Cultural methods include antibacterial management, sanitation, removal of infected plants, frequent scouting, etc</li></ol>",
  },
  {
    name: "Peach___Bacterial_spot",
    info: "<center><p>Fruit <b>Peach</b><br/><p>Disease Name <b> Bacterial Spot </b><br/><h5>Info</h5><p>Bacterial spot is an important disease of peaches, nectarines, apricots, and plums caused by Xanthomonas campestris pv. pruni. Symptoms of this disease include fruit spots, leaf spots, and twig cankers.</p>",
  },
  {
    name: "Peach___healthy",
    info: "<center><p>Fruit <b>Peach</b><br/><h5>Info</h5><p>Your Peach is Healthy &#128513;</p>",
  },
  {
    name: "Pepper,_bell___Bacterial_spot",
    info: "<center><p>Fruit <b>Bell Pepper</b><br/><p>Disease Name <b>Bacterial spot </b><br/><h5>Info</h5><p>Bacterial spot is one of the most devastating diseases of pepper and tomato. The disease occurs worldwide where pepper and tomato are grown in warm, moist areas. When it occurs soon after transplanting and weather conditions remain favorable for disease development, the results are usually total crop loss.</p>",
  },
  {
    name: "Pepper,_bell___healthy",
    info: "<center><p>Fruit <b>Bell Pepper</b><br/><h5>Info</h5><p>Your Bell Pepper is Healthy &#128513;</p>",
  },
  {
    name: "Potato___Early_blight",
    info: "<center><p>Fruit <b>Potato</b><br/><p>Disease Name <b>Early Blight</b><br/><h5>Info</h5><p>Early blight of potato is caused by the fungal pathogen Alternaria solani. The disease affects leaves, stems and tubers and can reduce yield, tuber size, storability of tubers, quality of fresh-market and processing tubers and marketability of the crop.</p>",
  },
  {
    name: "Potato___Late_blight",
    info: "<center><p>Fruit <b>Potato</b><br/><p>Disease Name <b>Late Blight</b><br/><h5>Info</h5><p>late blight, also called potato blight, disease of potato and tomato plants that is caused by the water mold Phytophthora infestans. The disease occurs in humid regions with temperatures ranging between 4 and 29 °C (40 and 80 °F). Hot dry weather checks its spread.</p>",
  },
  {
    name: "Potato___healthy",
    info: "<center><p>Fruit <b>Peach</b><br/><h5>Info</h5><p>Your Peach is Healthy &#128513;</p>",
  },
  {
    name: "Raspberry___healthy",
    info: "<center><p>Fruit <b>Raspberry</b><br/><h5>Info</h5><p>Your Raspberry is Healthy &#128513;</p>",
  },
  {
    name: "Soybean___healthy",
    info: "<center><p>Fruit <b>Soybean</b><br/><h5>Info</h5><p>Your Soybean is Healthy &#128513;</p>",
  },
  {
    name: "Squash___Powdery_mildew",
    info: "<center><p>Fruit <b>Squash</b><br/><p>Disease Name <b>Powdery mildew</b><br/><h5>Info</h5><p>Powdery mildew is most commonly seen on the top of the leaves, but it can also appear on the leaf undersides, the stems, and even on the fruits. Early signs of powdery mildew are small, random patches of white “dust” on the upper leaf surface.</p>",
  },
  {
    name: "Strawberry___Leaf_scorch",
    info: "<center><p>Fruit <b>Strawberry</b><br/><p>Disease Name <b>Leaf Scorch</b><br/><h5>Info</h5><p>Leaf scorch is caused by the fungus Diplocarpon earliana. Symptoms of leaf scorch consist of numerous small, irregular, purplish spots or “blotches” that develop on the upper surface of leaves.</p>",
  },
  {
    name: "Strawberry___healthy",
    info: "<center><p>Fruit <b>Strawberry</b><br/><h5>Info</h5><p>Your Strawberry is Healthy &#128513;</p>",
  },
  {
    name: "Tomato___Bacterial_spot",
    info: "<center><p>Fruit <b>Tomato</b><br/><p>Disease Name <b>Bacterial Spot</b><br/><h5>Info</h5><p>Bacterial spot of tomato is caused by Xanthomonas vesicatoria, Xanthomonas euvesicatoria, Xanthomonas gardneri, and Xanthomonas perforans. These bacterial pathogens can be introduced into a garden on contaminated seed and transplants, which may or may not show symptoms.</p><i>Please consider the following suggestions:</i></center>",
  },
  {
    name: "Tomato___Early_blight",
    info: "<center><p>Fruit <b>Tomato</b><br/><p>Disease Name <b>Early Blight</b><br/><h5>Info</h5><p>This is a common disease of tomato occurring on the foliage at any stage of the growth. The fungus attacks the foliage causing characteristic leaf spots and blight. Early blight is first observed on the plants as small, black lesions mostly on the older foliage</p><i>Please consider the following suggestions:</i></center>",
  },
  {
    name: "Tomato___Late_blight",
    info: "<center><p>Fruit <b>Tomato</b><br/><p>Disease Name <b>Late Blight</b><br/><h5>Info</h5><p>Late blight, also called potato blight, disease of potato and tomato plants that is caused by the water mold Phytophthora infestans. The disease occurs in humid regions with temperatures ranging between 4 and 29 °C (40 and 80 °F). Hot dry weather checks its spread.</p><i>Please consider the following suggestions:</i></center>",
  },
  {
    name: "Tomato___Leaf_Mold",
    info: "<center><p>Fruit <b>Tomato</b><br/><p>Disease Name <b>Leaf Mold</b><br/><h5>Info</h5><p>Leaf mold, caused by the fungus Passalora fulva (synonym: Fulvia fulva), is a common foliar disease of tomato (Lycopersicon esculentum). It occurs in many parts of the world and is particularly severe in areas with long periods of warm, humid weather.</p><i>Please consider the following suggestions:</i></center>",
  },
  {
    name: "Tomato___Septoria_leaf_spot",
    info: "<center><p>Fruit <b>Tomato</b><br/><p>Disease Name <b>Septoria Leaf Spot</b><br/><h5>Info</h5><p>Septoria leaf spot is caused by the fungus Septoria lycopersici. The disease affects plants in many parts of the world, especially in areas with high humidity and frequent rain. Septoria leaf spot primarily targets tomato plants (Lycopersicon esculentum), but it can also affect other solanaceous plants, such as potatoes and peppers.</p><i>Please consider the following suggestions:</i></center>",
  },
  {
    name: "Tomato___Spider_mites Two-spotted_spider_mite",
    info: "<center><p>Fruit <b>Tomato</b><br/><p>Disease Name <b>Spider Mites Two-spotted spider mite</b><br/><h5>Info</h5><p>Spider mites are tiny arachnids that can cause big problems in gardens and landscapes. These pests feed on plants by piercing the leaves and sucking out the contents. As a result, leaves may appear stippled, discolored, or have a bronze-like appearance. Spider mites produce webbing that can cover leaves and flowers, and heavy infestations can lead to defoliation.</p><i>Please consider the following suggestions:</i></center>",
  },
  {
    name: "Tomato___Target_Spot",
    info: "<center><p>Fruit <b>Tomato</b><br/><p>Disease Name <b>Target Spot</b><br/><h5>Info</h5><p>Target spot is a foliar disease of tomato caused by the fungus Corynespora cassiicola. It can affect tomato plants at various stages of growth and is more prevalent in warm and humid environments. The disease is characterized by the presence of small, dark spots with concentric rings on the leaves.</p><i>Please consider the following suggestions:</i></center>",
  },
  {
    name: "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
    info: "<center><p>Fruit <b>Tomato</b><br/><p>Disease Name <b>Tomato Yellow Leaf Curl Virus</b><br/><h5>Info</h5><p>Tomato yellow leaf curl virus (TYLCV) is a DNA virus from the genus Begomovirus and the family Geminiviridae. It is a major pest of tomato crops in tropical and subtropical regions. The virus is transmitted by the silverleaf whitefly (Bemisia tabaci).</p><i>Please consider the following suggestions:</i></center>",
  },
  {
    name: "Tomato___healthy",
    info: "<center><p>Fruit <b>Tomato</b><br/><h5>Info</h5><p>Your Tomato is Healthy &#128513;</p>",
  },
];

export default diseaseData;
