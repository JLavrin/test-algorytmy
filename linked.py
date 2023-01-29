# 1
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None

    def addLast(self, data):
        newNode = Node(data)

        if not self.head:
            self.head = newNode
            return

        current = self.head
        while current.next:
            current = current.next

        current.next = newNode

    def addFirst(self, data):
        self.head = Node(data, self.head)
    
    def removeFirst(self):
        if not self.head:
            return None
        current_head = self.head
        self.head = current_head.next
        return current_head.data
