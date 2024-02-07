
class Template:

    
    @staticmethod
    def generate(status: int, results: list = None, message: str = None) -> dict:
        
        return {
            'status': status,
            'results': results,
            'message': message
        }
  
