import os

def is_code_file(filename):
    code_extensions = (
        '.py', '.ts', '.js', '.jsx', '.tsx', '.css', '.cpp', '.c', '.env', '.html', '.map',
        '.java', '.go', '.rb', '.php', '.cs', '.swift', '.kt', '.rs', '.json', '.yml',
        '.xml', '.sh', '.bat', '.ini', '.cfg', '.md', '.cjs', '.vue', '.pm', '.scss', '.sass', '.sql',
        '.dockerfile'
    )
    ignored_files = ('package-lock.json', 'package.json', 'README.md', '.gitignore', 'collect_code.py')
    return filename.endswith(code_extensions) and filename not in ignored_files


def read_file_content(filepath):
    encodings = ['utf-8', 'latin-1', 'cp1252']
    for encoding in encodings:
        try:
            with open(filepath, 'r', encoding=encoding) as file:
                return file.read()
        except UnicodeDecodeError:
            continue
    return None

def write_file_content(output_file, filepath):
    content = read_file_content(filepath)
    if content is not None:
        relative_path = os.path.relpath(filepath, start=input_folder)
        output_file.write(f"{relative_path}:\n")
        output_file.write(content)
        output_file.write("\n\n")

def process_folder(output_file, folder_path, excluded_folders):
    for root, dirs, files in os.walk(folder_path):
        dirs[:] = [d for d in dirs if d not in excluded_folders]
        for file in sorted(files):
            if is_code_file(file):
                filepath = os.path.join(root, file)
                write_file_content(output_file, filepath)

if __name__ == "__main__":
    input_folder = input("Enter the folder path: ").strip()
    
    if not os.path.isdir(input_folder):
        print("The provided path is not a directory.")
    else:
        excluded_folders = {'node_modules', 'public', '.next'}

        exclude_more = input("Do you want to exclude any folder? (Y/N): ").strip().upper()
        while exclude_more == 'Y':
            folder_paths = input("Enter folder paths separated by ', ': ").strip()
            excluded_folders.update(
                os.path.basename(folder_path.strip()) 
                for folder_path in folder_paths.split(',') if folder_path.strip()
            )
            exclude_more = input("Mentioned folders are excluded. Any other folder you forgot? (Y/N): ").strip().upper()
            if exclude_more == 'N':
                continue
        
        output_filepath = os.path.join(input_folder, "all_code_files.txt")
        with open(output_filepath, 'w', encoding='utf-8') as output_file:
            process_folder(output_file, input_folder, excluded_folders)
        
        print(f"All code files' contents have been written to {output_filepath}")





# def write_file_content(output_file, filepath):
#     with open(filepath, 'r', encoding='utf-8') as file:
#         content = file.read()
#     relative_path = os.path.relpath(filepath, start=input_folder)
#     output_file.write(f"{relative_path}:\n")
#     output_file.write(content)
#     output_file.write("\n\n")

# def process_folder(output_file, folder_path, excluded_folders):
#     for root, dirs, files in os.walk(folder_path):
#         dirs[:] = [d for d in dirs if d not in excluded_folders]
#         for file in sorted(files):
#             if is_code_file(file):
#                 filepath = os.path.join(root, file)
#                 write_file_content(output_file, filepath)

# if __name__ == "__main__":
#     input_folder = input("Enter the folder path: ").strip()
    
#     if not os.path.isdir(input_folder):
#         print("The provided path is not a directory.")
#     else:
#         excluded_folders = {'node_modules', 'public', '.next'}

#         exclude_more = input("Do you want to exclude any folder? (Y/N): ").strip().upper()
#         while exclude_more == 'Y':
#             folder_paths = input("Enter folder paths separated by ', ': ").strip()
#             excluded_folders.update(
#                 os.path.basename(folder_path.strip()) 
#                 for folder_path in folder_paths.split(',') if folder_path.strip()
#             )
#             exclude_more = input("Mentioned folders are excluded. Will that be all? (Y/N): ").strip().upper()
        
#         output_filepath = os.path.join(input_folder, "all_code_files.txt")
#         with open(output_filepath, 'w', encoding='utf-8') as output_file:
#             process_folder(output_file, input_folder, excluded_folders)
        
#         print(f"All code files' contents have been written to {output_filepath}")
