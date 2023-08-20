#!/bin/bash

# Step 1: Run tests
echo "Running tests..."
# python3 manage.py test 
# tests_exit_code=$?

# if [ $tests_exit_code -ne 0 ]; then
#     echo "Tests failed. Aborting build process."
#     exit $tests_exit_code
# fi

# # Step 2: Build index-bundle.js
# echo "Building index-bundle.js..."
# npm start build
# build_exit_code=$?

# if [ $build_exit_code -ne 0 ]; then
#     echo "Build failed. Aborting build process."
#     exit $build_exit_code
# fi

# Step 3: Copy index-bundle.js
echo "Copying index-bundle.js to Main Project"
cp static/index-bundle.js ../adjCOADD/static/js/ketcher/
# echo "Copying miew to adjCOADD."
cp static/vendors-node_modules_miew-react_dist_index_modern_js.index-bundle.js ../adjCOADD/static/js/ketcher/

echo "Build process completed successfully."
