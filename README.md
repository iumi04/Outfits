# **FashionFit AI: Outfit Recommendation System**

**Version:** Proof of Concept (POC)  
**Last Updated:** [11/11/2025]  

---

## **Overview**
FashionFit AI is a proof-of-concept (POC) system designed to enhance personal styling through AI-based fashion recommendations. This tool allows users to upload images of their clothing and receive personalized outfit suggestions aligned with their aesthetic preferences or specific contexts, such as "casual streetwear" or "date night."

The platform combines modern image recognition models with machine learning and rule-based heuristics to extract clothing details, understand aesthetic vibes, and recommend stylish, compatible outfits.

---

## **Features**

1. **Input Options**
   - **Image Upload:** Users upload an image of a clothing item (e.g., a hoodie or jacket).
   - **Contextual Preferences (Optional):** Users can specify an event or style preference (e.g., “date night,” “minimalist,” or “winter outfit”).

2. **Style Understanding**
   - Extracts insights using a vision model:
     - **Clothing Type:** Identifies the item (e.g., hoodie, jeans, t-shirt).
     - **Colors, Textures, Patterns:** Captures the visual elements of the garment.
     - **Fit & Style:** Understands characteristics like oversized, slim fit, formal, or sporty.
     - **Aesthetic Vibe Embeddings:** Uses models like CLIP (or ViT) for text-image similarity to determine overall style and aesthetic compatibility.

3. **Outfit Generation**
   - **AI Style Matching:** Leverages fashion datasets (e.g., DeepFashion, Polyvore Outfits, Fashion-Gen) for compatibility prediction and styling rules.
   - **Heuristic Combinations:** Combines fashion knowledge (like “baggy top → pair with slim or baggy bottoms depending on the context”) with AI-powered recommendations.
   - **Text Description:** Generates clear, stylistic advice such as:  
     _“Pair your oversized hoodie with wide-leg cargo pants and black sneakers for a relaxed streetwear look.”_

4. **Custom Style Adjustments**
   - Allows users to tweak the recommendations further with prompts like:
     - _“Make it more vintage.”_
     - _“Make it more colorful.”_
     - _“Add a formal touch.”_

---

## **Technology Stack**

### **1. Machine Learning Models**
- **Vision Models:** 
  - CLIP (Contrastive Language-Image Pretraining) for text-image embeddings and semantic similarity.  
  - ViT (Vision Transformer) for detailed image recognition.
- **Fashion-Specific Models:** 
  - Fine-tuned Vision Transformers or ResNet on datasets like:
    - **DeepFashion**
    - **Fashion-Gen**
    - **Polyvore Outfits**

### **2. Dataset Sources**
- **DeepFashion:** Provides detailed fashion attributes and compatibility labels.
- **Polyvore Outfits:** Includes outfit compatibility and aesthetic preferences.
- **Fashion-Gen:** Supplies visual-text pairs for clothing item descriptions.

### **3. Frameworks & Infrastructure**
- PyTorch or TensorFlow for model training and inference.
- Flask/Django for the backend API.
- React/Next.js for the frontend user interface.

### **4. Additional Tools**
- **Rule-Based Heuristics:** Predefined guidelines based on fashion principles to complement AI recommendations.
- **Image Processing:** OpenCV or Pillow for image preprocessing and enhancements.

---

## **Example User Flow**

1. **Image Upload**
   - User uploads their hoodie photo.

2. **AI Processing**
   - System identifies the image as an oversized, sporty hoodie with a light gray color and minimalist details.

3. **Context (Optional)**
   - User specifies: _"casual streetwear"_.

4. **Outfit Recommendation**
   - System recommends:  
     _"Pair your oversized hoodie with black slim-fit joggers and crisp white sneakers for a sporty yet clean streetwear look."_  
   - Displays suggested clothing items (via pre-loaded dataset/images).

5. **User Customization**
   - User tweaks: _"Add a vintage twist."_  
   - Updated recommendation:  
     _"Pair your oversized hoodie with high-waisted, faded straight-leg jeans and chunky sneakers for a relaxed vintage-inspired outfit."_

---

## **How to Run the POC**

### **1. Setup**
- Clone the repository:  
  ```bash
  git clone [repository-url]
  cd FashionFit-AI
