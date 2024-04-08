from flask import Flask, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load the pre-trained model
model = joblib.load('drug_interaction_model.joblib')

# Manually specify feature names based on your understanding of the input data
feature_names = ['Medicine_A_Aspirin', 'Medicine_A_Lisinopril', 'Medicine_A_Metformin', 
                 'Medicine_A_Simvastatin', 'Medicine_A_Acetaminophen', 'Medicine_A_Ciprofloxacin', 
                 'Medicine_A_Omeprazole', 'Medicine_A_Levothyroxine', 'Medicine_A_Fluoxetine', 
                 'Medicine_A_Diazepam', 'Medicine_A_Clopidogrel', 'Medicine_A_Alprazolam', 
                 'Medicine_A_Digoxin', 'Medicine_A_Furosemide', 'Medicine_A_Loratadine', 
                 'Medicine_A_Metronidazole', 'Medicine_A_Warfarin', 'Medicine_A_Atorvastatin', 
                 'Medicine_A_Amoxicillin', 'Medicine_B_Amlodipine', 'Medicine_B_Alcohol', 
                 'Medicine_B_Calcium', 'Medicine_B_Grapefruit', 'Medicine_B_Iron', 
                 'Medicine_B_Tramadol', 'Medicine_B_Grapefruit_Juice', 'Medicine_B_Esomeprazole', 
                 'Medicine_B_Potassium', 'Medicine_B_Ketoconazole', 'Medicine_B_Probiotics', 
                 'Dosage_A_100mg', 'Dosage_A_10mg', 'Dosage_A_500mg', 'Dosage_A_20mg', 
                 'Dosage_A_1mg', 'Dosage_A_0.25mg', 'Dosage_B_200mg', 'Dosage_B_5mg', 
                 'Dosage_B_2mg', 'Dosage_B_N/A', 'Dosage_B_75mg', 'Dosage_B_20mg', 
                 'Dosage_B_80mg', 'Interaction_Type_Drug-Drug', 'Interaction_Type_Drug-Food', 
                 'Interaction_Type_Drug-Alcohol', 'Interaction_Type_Drug-Nutrient', 
                 'Interaction_Type_Drug-Supplement', 'Severity_Mild', 'Severity_Moderate', 
                 'Severity_Severe']

# Define endpoint for predicting interaction severity
@app.route('/predict_interaction', methods=['POST'])
def predict_interaction():
    # Get input parameters from request
    data = request.json
    
    # Convert input data into DataFrame
    input_data = pd.DataFrame(data, index=[0])
    
    # Perform one-hot encoding for categorical variables
    input_data_encoded = pd.get_dummies(input_data)
    
    # Reorder columns to match manually specified feature names
    input_data_encoded = input_data_encoded.reindex(columns=feature_names, fill_value=0)
    
    # Predict interaction severity
    # Predict interaction severity
    # Predict interaction severity
    predicted_severity = model.predict(input_data_encoded.values)[0]

    # Return predicted severity as JSON response
    return jsonify({'predicted_severity': predicted_severity})


if __name__ == '__main__':
    app.run(port=8000)
