import os

def create_address_book(file_name):
    with open(file_name, 'w') as f:
        print(f"Address book '{file_name}' created successfully.")

def view_address_book(file_name):
    if os.path.exists(file_name):
        with open(file_name, 'r') as f:
            content = f.read()
            print(content if content else "Address book is empty.")
    else:
        print("Address book does not exist.")

def insert_record(file_name, record):
    with open(file_name, 'a') as f:
        f.write(record + '\n')
        print("Record added successfully.")

def delete_record(file_name, record_to_delete):
    if os.path.exists(file_name):
        with open(file_name, 'r') as f:
            lines = f.readlines()
        with open(file_name, 'w') as f:
            for line in lines:
                if line.strip() != record_to_delete:
                    f.write(line)
        print("Record deleted successfully.")
    else:
        print("Address book does not exist.")

def modify_record(file_name, old_record, new_record):
    if os.path.exists(file_name):
        with open(file_name, 'r') as f:
            lines = f.readlines()
        with open(file_name, 'w') as f:
            for line in lines:
                if line.strip() == old_record:
                    f.write(new_record + '\n')
                else:
                    f.write(line)
        print("Record modified successfully.")
    else:
        print("Address book does not exist.")

def main():
    file_name = "address_book.txt"
    while True:
        print("\nAddress Book Menu:")
        print("a) Create Address Book")
        print("b) View Address Book")
        print("c) Insert Record")
        print("d) Delete a Record")
        print("e) Modify a Record")
        print("f) Exit")
        choice = input("Enter your choice: ").strip().lower()

        if choice == 'a':
            create_address_book(file_name)
        elif choice == 'b':
            view_address_book(file_name)
        elif choice == 'c':
            record = input("Enter record to insert: ")
            insert_record(file_name, record)
        elif choice == 'd':
            record_to_delete = input("Enter record to delete: ")
            delete_record(file_name, record_to_delete)
        elif choice == 'e':
            old_record = input("Enter record to modify: ")
            new_record = input("Enter new record: ")
            modify_record(file_name, old_record, new_record)
        elif choice == 'f':
            print("Exiting program.")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
